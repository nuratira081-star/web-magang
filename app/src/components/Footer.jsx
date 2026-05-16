import { Link } from 'react-router-dom'

const footerLinks = {
  Navigasi: [
    { label: 'Beranda', to: '/' },
    { label: 'Berita', to: '/news' },
    { label: 'Pengumuman', to: '/announcements' },
    { label: 'Agenda', to: '/events' },
  ],
  Akademik: [
    { label: 'Tentang Kami', to: '/about' },
    { label: 'Staf Pengajar', to: '/about#faculty' },
    { label: 'Kurikulum', to: '/about#curriculum' },
    { label: 'Jurnal Ilmiah', to: '/about#journal' },
  ],
  Dukungan: [
    { label: 'Kontak', to: '/about#contact' },
    { label: 'Portal Mahasiswa', to: '#' },
    { label: 'E-Library', to: '#' },
    { label: 'Peta Kampus', to: '#' },
  ],
}

const socialLinks = [
  { icon: 'language', label: 'Website Universitas', href: '#' },
  { icon: 'mail', label: 'Email', href: 'mailto:info@dept.ac.id' },
]

export default function Footer() {
  return (
    <footer className="bg-[var(--color-primary)] text-white border-t-4 border-[var(--color-accent)]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 pt-20 pb-10">
        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 pb-16 border-b border-white/10">
          {/* Brand */}
          <div className="md:col-span-5">
            <div
              className="text-[24px] font-black mb-6 flex items-center gap-3"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              <div className="w-10 h-10 rounded bg-[var(--color-accent)] flex items-center justify-center">
                <span className="material-symbols-outlined text-[var(--color-primary)] text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  school
                </span>
              </div>
              <span>DEPT<span className="text-[var(--color-accent)]">NEWS</span></span>
            </div>
            <p className="text-white/60 text-[15px] leading-loose max-w-sm">
              Portal informasi resmi Departemen Keunggulan Akademik. Berkomitmen pada penyebaran ilmu pengetahuan dan informasi yang kredibel bagi seluruh civitas akademika.
            </p>
            <div className="flex gap-4 mt-8">
              {socialLinks.map(({ icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-12 h-12 rounded border border-white/10 flex items-center justify-center text-white/50 hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)] hover:border-[var(--color-accent)] transition-all duration-300"
                >
                  <span className="material-symbols-outlined text-[20px]">{icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-10">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h6 className="text-[12px] font-black uppercase tracking-[0.2em] text-[var(--color-accent)] mb-6">
                  {category}
                </h6>
                <ul className="space-y-4">
                  {links.map(({ label, to }) => (
                    <li key={label}>
                      <Link
                        to={to}
                        className="text-[14px] text-white/60 hover:text-white hover:translate-x-1 inline-block transition-all"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-[12px] font-bold uppercase tracking-[0.1em] text-white/40">
          <p>© {new Date().getFullYear()} Departemen Keunggulan Akademik. Seluruh Hak Cipta Dilindungi.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
            <a href="#" className="hover:text-white transition-colors">Aksesibilitas</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
