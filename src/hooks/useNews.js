import { useState, useEffect } from 'react'

// Get the base URL from Vite (will be '/web-magang/' on GitHub Pages)
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '')

export function useNews() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(`${BASE}/news-index.json`)
      .then(r => {
        if (!r.ok) throw new Error('Gagal memuat berita')
        return r.json()
      })
      .then(data => {
        setArticles(data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  return { articles, loading, error }
}

export function useArticle(slug) {
  const [article, setArticle] = useState(null)
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!slug) return

    setLoading(true)
    fetch(`${BASE}/news-index.json?t=` + Date.now())
      .then(r => r.json())
      .then(data => {
        const found = data.find(a => a.slug === slug)
        if (!found) throw new Error('Artikel tidak ditemukan')
        setArticle(found)
        
        const contentUrl = `${BASE}/news/${found.slug}.md?t=` + Date.now()
        console.log('Fetching content from:', contentUrl)
        return fetch(contentUrl)
      })
      .then(r => {
        if (!r.ok) throw new Error('Konten artikel tidak ditemukan')
        const contentType = r.headers.get('content-type')
        if (contentType && contentType.includes('text/html')) {
          throw new Error('Server mengembalikan HTML, bukan Markdown. Pastikan file ada di public/news/')
        }
        return r.text()
      })
      .then(text => {
        if (text.trim().startsWith('<!DOCTYPE') || text.includes('<script')) {
          throw new Error('Konten yang diterima adalah HTML (kemungkinan fallback 404).')
        }
        const stripped = text.replace(/^---[\s\S]*?---\s*/, '')
        setContent(stripped || '_Belum ada konten untuk artikel ini._')
        setLoading(false)
      })
      .catch(err => {
        console.error('Fetch error:', err)
        setError(err.message)
        setLoading(false)
      })
  }, [slug])

  return { article, content, loading, error }
}
