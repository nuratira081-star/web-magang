import { useState, useMemo, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import NewsCard from '../components/NewsCard'
import { useNews } from '../hooks/useNews'

const categories = ['Semua', 'Research', 'Campus Life', 'Academic', 'Achievement', 'Partnership', 'Announcements']

export default function News() {
  const { articles, loading } = useNews()
  const [searchParams, setSearchParams] = useSearchParams()
  const [activeCategory, setActiveCategory] = useState('Semua')

  useEffect(() => {
    document.title = 'Portal Berita | Departemen Keunggulan Akademik'
  }, [])
  
  const searchQuery = searchParams.get('search') || ''
  const setSearchQuery = (val) => {
    if (val) {
      setSearchParams({ search: val })
    } else {
      setSearchParams({})
    }
  }

  const filtered = useMemo(() => {
    return articles.filter(a => {
      const matchCat = activeCategory === 'Semua' || a.category === activeCategory
      const matchSearch =
        !searchQuery ||
        a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        a.summary.toLowerCase().includes(searchQuery.toLowerCase())
      return matchCat && matchSearch
    })
  }, [articles, activeCategory, searchQuery])

  const featured = filtered[0]

  return (
    <div className="max-w-[1280px] mx-auto px-5 md:px-10 py-10">
      {/* Page header */}
      <div className="mb-10">
        <nav className="flex items-center gap-2 text-sm text-[var(--color-outline)] mb-6">
          <Link to="/" className="hover:text-[var(--color-primary)] transition-colors">Beranda</Link>
          <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          <span className="text-[var(--color-on-surface)]">Berita</span>
        </nav>
        <h1 className="text-[32px] md:text-[48px] font-black text-[var(--color-primary)] mb-3 leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
          Portal Berita
        </h1>
        <p className="text-[15px] md:text-[18px] text-[var(--color-secondary)] max-w-2xl leading-relaxed">
          Berita terkini, pencapaian, dan perkembangan terbaru dari Departemen Keunggulan Akademik.
        </p>
      </div>

      {/* Search + Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-10">
        <div className="relative flex-1 max-w-sm">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-outline)] text-[18px]">search</span>
          <input
            className="w-full bg-white border border-[var(--color-outline-variant)] rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] text-[var(--color-on-surface)]"
            placeholder="Cari berita..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-hide -mx-5 px-5 md:mx-0 md:px-0">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-[9px] font-black uppercase tracking-[0.2em] whitespace-nowrap transition-all duration-200 border-2 flex-shrink-0 ${
                activeCategory === cat
                  ? 'bg-[var(--color-primary)] border-[var(--color-primary)] text-white shadow-lg'
                  : 'bg-white border-[var(--color-outline-variant)] text-[var(--color-primary)] hover:border-[var(--color-accent)]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>



      {/* Grid */}
      {loading ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
            <div key={i} className="bg-[var(--color-surface-container)] rounded-lg h-64 animate-pulse" />
          ))}
        </div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-24">
          <span className="material-symbols-outlined text-[64px] text-[var(--color-outline-variant)]">article</span>
          <p className="mt-4 text-[var(--color-secondary)] text-lg">Tidak ada berita ditemukan</p>
          <button
            onClick={() => { setSearchQuery(''); setActiveCategory('Semua') }}
            className="mt-4 text-[var(--color-primary)] font-medium hover:underline"
          >
            Reset filter
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((article, i) => (
            <NewsCard key={article.slug} article={article} featured={i === 0} />
          ))}
        </div>
      )}

      {/* Newsletter */}
      <section className="mt-20 rounded-2xl bg-[var(--color-primary)] text-white p-8 md:p-14 relative overflow-hidden border-b-8 border-[var(--color-accent)]">
        <div className="absolute right-0 top-0 opacity-5 pointer-events-none">
          <span className="material-symbols-outlined" style={{ fontSize: '320px' }}>school</span>
        </div>
        <div className="relative z-10 max-w-xl mx-auto text-center lg:text-left lg:mx-0">
          <h2 className="text-[24px] md:text-[36px] font-black mb-4 leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
            Dapatkan Berita Mingguan
          </h2>
          <p className="text-white/70 text-[15px] mb-8 max-w-md mx-auto lg:mx-0">
            Jadilah yang pertama mengetahui hasil penelitian terbaru, peluang beasiswa, dan agenda departemen.
          </p>
          <form
            className="flex flex-col sm:flex-row gap-3"
            onSubmit={e => { e.preventDefault(); alert('Terima kasih telah berlangganan!') }}
          >
            <input
              type="email"
              required
              placeholder="Email universitas Anda"
              className="flex-1 px-5 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] text-sm"
            />
            <button type="submit" className="px-8 py-3 bg-[var(--color-accent)] text-[var(--color-primary)] font-black rounded-lg hover:brightness-110 transition-colors whitespace-nowrap text-sm uppercase tracking-widest">
              Langganan
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
