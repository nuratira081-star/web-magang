import { useState, useEffect } from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Beranda' },
  { to: '/news', label: 'Berita' },
  { to: '/announcements', label: 'Pengumuman' },
  { to: '/events', label: 'Agenda' },
  { to: '/about', label: 'Tentang' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate()

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      navigate(`/news?search=${encodeURIComponent(searchQuery)}`)
      setSearchOpen(false)
      setMobileOpen(false)
    }
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="z-50 w-full">
      {/* Institutional Top Bar (Desktop Only) */}
      <div className="hidden md:block bg-[var(--color-primary)] text-white/70 py-2 border-b border-white/10 text-[11px] font-bold uppercase tracking-widest">
        <div className="max-w-[1280px] mx-auto px-10 flex justify-between">
          <span>Fakultas Dakwah dan Komunikasi Islam</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Portal Mahasiswa</a>
            <a href="#" className="hover:text-white transition-colors">E-Library</a>
          </div>
        </div>
      </div>

      <nav
        className={`sticky top-0 transition-all duration-300 ${
          scrolled || mobileOpen
            ? 'bg-white shadow-md py-3'
            : 'bg-white py-5'
        } border-b border-[var(--color-outline-variant)]`}
      >
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            <div className="w-10 h-10 rounded bg-[var(--color-primary)] flex items-center justify-center group-hover:bg-[var(--color-accent)] transition-colors">
              <span className="material-symbols-outlined text-white text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                school
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[18px] font-black text-[var(--color-primary)] leading-tight">
                DEPT<span className="text-[var(--color-accent)]">NEWS</span>
              </span>
              <span className="text-[9px] font-bold text-[var(--color-secondary)] uppercase tracking-[0.2em] leading-none">
                Manajemen Dakwah
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `px-4 py-2 rounded text-[14px] font-bold uppercase tracking-wider transition-all duration-200 ${
                    isActive
                      ? 'text-[var(--color-accent)] border-b-2 border-[var(--color-accent)] rounded-none'
                      : 'text-[var(--color-primary)] hover:text-[var(--color-accent)]'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            
            <button
              onClick={() => setSearchOpen(v => !v)}
              className="ml-4 p-2 text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors"
            >
              <span className="material-symbols-outlined text-[24px]">search</span>
            </button>
          </div>

          {/* Mobile actions */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => setSearchOpen(v => !v)}
              className="p-2 text-[var(--color-primary)]"
              aria-label="Cari"
            >
              <span className="material-symbols-outlined text-[24px]">search</span>
            </button>
            <button
              onClick={() => setMobileOpen(v => !v)}
              className="p-2 text-[var(--color-primary)]"
              aria-label="Menu"
            >
              <span className="material-symbols-outlined text-[28px]">
                {mobileOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Search Overlay */}
        <div className={`overflow-hidden transition-all duration-300 ${searchOpen ? 'max-h-20 border-t border-[var(--color-outline-variant)]' : 'max-h-0'}`}>
          <div className="px-5 py-4 bg-slate-50">
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-outline)]">search</span>
              <input
                className="w-full bg-white border border-[var(--color-outline-variant)] rounded-lg pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
                placeholder="Cari berita akademik..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                onKeyDown={handleSearch}
                autoFocus={searchOpen}
              />
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`md:hidden fixed inset-0 top-[73px] bg-white z-40 transition-transform duration-300 ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="px-6 py-8 flex flex-col gap-2">
            {navItems.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between px-4 py-5 rounded-lg text-[16px] font-black uppercase tracking-widest border-b border-slate-100 ${
                    isActive
                      ? 'text-[var(--color-accent)] bg-slate-50'
                      : 'text-[var(--color-primary)]'
                  }`
                }
              >
                {label}
                <span className="material-symbols-outlined text-[20px]">chevron_right</span>
              </NavLink>
            ))}
            
            <div className="mt-auto pt-10 text-center">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mb-4">Official Faculty App</p>
              <div className="flex justify-center gap-6 text-slate-400">
                <span className="material-symbols-outlined">language</span>
                <span className="material-symbols-outlined">mail</span>
                <span className="material-symbols-outlined">share</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
