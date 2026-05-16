import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'fs'
import path from 'path'

// Helper for auto-syncing news markdown files to a JSON index
function syncNewsPlugin() {
  const NEWS_DIR = path.resolve('public/news')
  const INDEX_FILE = path.resolve('public/news-index.json')

  const sync = () => {
    try {
      if (!fs.existsSync(NEWS_DIR)) return;
      const files = fs.readdirSync(NEWS_DIR).filter(f => f.endsWith('.md'))
      const articles = files.map(f => {
        const content = fs.readFileSync(path.join(NEWS_DIR, f), 'utf-8')
        const match = content.match(/^---\s*[\r\n]+([\s\S]*?)[\r\n]+---/)
        if (!match) return null
        const meta = {}
        match[1].split(/\r?\n/).forEach(line => {
          const idx = line.indexOf(':')
          if (idx !== -1) {
            const k = line.slice(0, idx).trim()
            const v = line.slice(idx + 1).trim()
            if (k) meta[k] = v
          }
        })
        return { slug: f.replace('.md', ''), ...meta }
      }).filter(Boolean)
      fs.writeFileSync(INDEX_FILE, JSON.stringify(articles, null, 2))
    } catch (e) { /* ignore */ }
  }

  return {
    name: 'sync-news',
    buildStart: sync,
    configureServer(server) {
      server.watcher.on('all', (event, file) => {
        if (file.endsWith('.md') && file.includes('news')) sync()
      })
    }
  }
}

export default defineConfig({
  base: '/web-magang/',
  plugins: [
    react(),
    tailwindcss(),
    syncNewsPlugin()
  ],
})
