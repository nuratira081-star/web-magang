import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { marked } from 'marked'
import { useArticle } from '../hooks/useNews'
import { useNews } from '../hooks/useNews'
import NewsCard from '../components/NewsCard'

// Configure marked for safe rendering
marked.setOptions({ breaks: true, gfm: true })

function ReadingProgress() {
  const [pct, setPct] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement
      const scrolled = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100
      setPct(Math.min(scrolled, 100))
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <div
      id="reading-progress"
      style={{ width: `${pct}%` }}
    />
  )
}

export default function NewsDetail() {
  const { slug } = useParams()
  const { article, content, loading, error } = useArticle(slug)
  const { articles } = useNews()
  const related = articles.filter(a => a.slug !== slug).slice(0, 3)

  useEffect(() => {
    if (article) {
      document.title = `${article.title} | Portal Berita Departemen`
    }
  }, [article])

  if (loading) {
    return (
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 py-16 animate-pulse">
        <div className="h-6 bg-[var(--color-surface-container)] rounded w-48 mb-8" />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-4">
            <div className="h-12 bg-[var(--color-surface-container)] rounded w-3/4" />
            <div className="h-12 bg-[var(--color-surface-container)] rounded w-1/2" />
            <div className="aspect-video bg-[var(--color-surface-container)] rounded-2xl mt-8" />
            {[1,2,3,4].map(i => <div key={i} className="h-5 bg-[var(--color-surface-container)] rounded" />)}
          </div>
          <div className="lg:col-span-4 space-y-6">
            <div className="h-64 bg-[var(--color-surface-container)] rounded-xl" />
          </div>
        </div>
      </div>
    )
  }

  if (error || !article) {
    return (
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 py-32 text-center">
        <span className="material-symbols-outlined text-[64px] text-[var(--color-outline-variant)]">error</span>
        <h2 className="text-[24px] font-bold text-[var(--color-primary)] mt-4 mb-2">Artikel Tidak Ditemukan</h2>
        <p className="text-[var(--color-secondary)] mb-8">{error}</p>
        <Link to="/news" className="btn-primary">← Kembali ke Berita</Link>
      </div>
    )
  }

  return (
    <>
      <ReadingProgress />
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 py-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-[var(--color-outline)] mb-10">
          <Link to="/" className="hover:text-[var(--color-primary)] transition-colors">Beranda</Link>
          <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          <Link to="/news" className="hover:text-[var(--color-primary)] transition-colors">Berita</Link>
          <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          <span className="text-[var(--color-on-surface)] truncate max-w-[200px]">{article.category}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* ── Article ── */}
          <article className="lg:col-span-8">
            {/* Header */}
            <div className="mb-10">
              <div className="flex items-center gap-2 mb-4">
                <span className="badge">{article.category}</span>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em]">{article.date}</span>
              </div>
              <h1
                className="text-[32px] md:text-[52px] font-black text-[var(--color-primary)] leading-[1.1] mb-8"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {article.title}
              </h1>
              
              {/* Author Info - Firmer & Academic */}
              <div className="flex items-center justify-between flex-wrap gap-6 border-y-2 border-slate-100 py-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded bg-[var(--color-primary)] flex items-center justify-center text-[var(--color-accent)] font-black text-xl">
                    {article.author?.[0] ?? 'A'}
                  </div>
                  <div>
                    <p className="font-black text-[var(--color-primary)] text-[15px] uppercase tracking-wider">{article.author}</p>
                    <p className="text-[12px] font-bold text-slate-400 uppercase tracking-widest">Staf Pengajar / Peneliti</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right hidden sm:block">
                    <p className="text-[12px] font-bold text-slate-400 uppercase tracking-widest mb-1">Waktu Baca</p>
                    <p className="text-[14px] font-black text-[var(--color-primary)]">{article.readTime}</p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => navigator.share?.({ title: article.title, url: window.location.href })}
                      className="w-10 h-10 flex items-center justify-center border border-slate-200 rounded hover:bg-slate-50 transition-colors"
                      aria-label="Bagikan"
                    >
                      <span className="material-symbols-outlined text-[var(--color-primary)] text-[18px]">share</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero image */}
            <figure className="mb-12">
              <div className="aspect-[16/9] w-full overflow-hidden border-b-4 border-[var(--color-accent)] shadow-lg">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <figcaption className="mt-4 text-[12px] font-bold text-slate-400 uppercase tracking-[0.2em] text-center italic">
                Dokumentasi Resmi Departemen Keunggulan Akademik
              </figcaption>
            </figure>

            {/* MD Content */}
            <div
              className="article-content"
              dangerouslySetInnerHTML={{ __html: marked(content) }}
            />

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-[var(--color-outline-variant)]">
              <h4 className="text-[12px] font-bold uppercase tracking-widest text-[var(--color-secondary)] mb-4">Kategori</h4>
              <div className="flex flex-wrap gap-2">
                {[article.category, 'Akademik', 'Departemen'].map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-[var(--color-surface-container)] text-[var(--color-primary)] text-[13px] rounded-full border border-[var(--color-outline-variant)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Prev / Next */}
            <div className="mt-10 flex gap-4">
              <Link
                to="/news"
                className="flex items-center gap-2 px-5 py-3 border border-[var(--color-outline-variant)] rounded-xl text-[var(--color-primary)] font-medium hover:bg-[var(--color-surface-container)] transition-colors text-sm"
              >
                <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                Semua Berita
              </Link>
            </div>
          </article>

          {/* ── Sidebar ── */}
          <aside className="lg:col-span-4 space-y-8">
            {/* Upcoming Events widget */}
            <div className="bg-[var(--color-surface-container-low)] p-6 rounded-2xl border border-[var(--color-outline-variant)]">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-[var(--color-primary)]">calendar_month</span>
                <h3 className="font-bold text-[var(--color-primary)] text-[18px]">Agenda Mendatang</h3>
              </div>
              <ul className="space-y-5">
                {[
                  { day: '15', month: 'OKT', title: 'Kuliah Umum: Etika AI', loc: 'Aula Utama, 10:00' },
                  { day: '18', month: 'OKT', title: 'Bimbingan Karir Mahasiswa', loc: 'Ruang Seminar B, 13:30' },
                  { day: '22', month: 'OKT', title: 'Workshop Jurnal Internasional', loc: 'Lab Riset, 09:00' },
                ].map(ev => (
                  <li key={ev.day} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[var(--color-primary)] text-white flex flex-col items-center justify-center rounded-xl">
                      <span className="font-bold text-[16px] leading-none">{ev.day}</span>
                      <span className="text-[9px] uppercase font-bold">{ev.month}</span>
                    </div>
                    <div>
                      <Link to="/events" className="font-semibold text-[var(--color-primary)] text-[14px] hover:underline leading-snug block">
                        {ev.title}
                      </Link>
                      <p className="text-[12px] text-[var(--color-outline)] mt-0.5">{ev.loc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <Link
                to="/events"
                className="mt-6 w-full py-2.5 flex justify-center border border-[var(--color-primary)] text-[var(--color-primary)] rounded-xl text-sm font-medium hover:bg-[var(--color-primary)] hover:text-white transition-all"
              >
                Lihat Semua Agenda
              </Link>
            </div>

            {/* Newsletter widget */}
            <div className="bg-[var(--color-primary)] text-white p-6 rounded-2xl">
              <h3 className="font-bold text-[18px] mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                Berlangganan Berita
              </h3>
              <p className="text-white/70 text-sm mb-5">
                Dapatkan berita dan pengumuman terbaru langsung di email Anda.
              </p>
              <form onSubmit={e => { e.preventDefault(); alert('Terima kasih!') }} className="space-y-3">
                <input
                  type="email"
                  required
                  placeholder="Email universitas Anda"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button type="submit" className="w-full py-3 bg-white text-[var(--color-primary)] font-bold rounded-xl text-sm hover:bg-[var(--color-primary-fixed)] transition-colors">
                  Langganan
                </button>
              </form>
            </div>

            {/* Catatan Penting */}
            <div className="bg-[var(--color-secondary-container)] p-5 rounded-2xl">
              <h5 className="font-bold text-[var(--color-primary)] flex items-center gap-2 mb-2 text-[14px]">
                <span className="material-symbols-outlined text-[16px]">info</span>
                Catatan Penting
              </h5>
              <p className="text-[13px] text-[var(--color-secondary)] leading-relaxed">
                Pastikan untuk selalu memeriksa email institusi Anda untuk tautan pendaftaran acara daring. Kapasitas untuk acara tatap muka terbatas.
              </p>
            </div>
          </aside>
        </div>

        {/* Related Articles */}
        {related.length > 0 && (
          <section className="mt-20 pt-12 border-t border-[var(--color-outline-variant)]">
            <div className="flex justify-between items-end mb-8">
              <div>
                <h2 className="section-title mb-1">Artikel Terkait</h2>
                <p className="text-[var(--color-secondary)] text-sm">Berita lainnya dari portal kami</p>
              </div>
              <Link to="/news" className="hidden md:flex items-center gap-2 text-[var(--color-primary)] font-semibold hover:gap-3 transition-all text-sm">
                Semua Berita <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map(a => <NewsCard key={a.slug} article={a} />)}
            </div>
          </section>
        )}
      </div>
    </>
  )
}
