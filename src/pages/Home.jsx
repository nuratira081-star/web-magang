import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import NewsCard from '../components/NewsCard'
import { useNews } from '../hooks/useNews'

const stats = [
  { value: '50K+', label: 'Alumni Aktif' },
  { value: '200+', label: 'Publikasi/Tahun' },
  { value: '40+', label: 'Mitra Industri' },
  { value: '#1', label: 'Akreditasi Nasional' },
]

const features = [
  {
    icon: 'verified',
    title: 'Akreditasi Unggul',
    desc: 'Mempertahankan standar global tertinggi dalam pendidikan tinggi, memastikan gelar Anda diakui lembaga terkemuka dunia.',
  },
  {
    icon: 'science',
    title: 'Riset Berdampak',
    desc: 'Fakultas kami memimpin penelitian pionir yang membentuk kebijakan, memajukan teknologi, dan mengubah pemahaman sosial.',
  },
  {
    icon: 'trending_up',
    title: 'Prospek Karir',
    desc: 'Jaringan lebih dari 50.000 alumni dan kemitraan industri yang kuat membuka jalur tak tertandingi menuju kesuksesan.',
  },
  {
    icon: 'school',
    title: 'Fakultas Ahli',
    desc: 'Belajar dari para sarjana dan praktisi kelas dunia yang berdedikasi pada pendidikan dan ketelitian akademik.',
  },
]

function AnimatedSection({ children, className = '', delay = 0 }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.opacity = '1'
            el.style.transform = 'translateY(0)'
          }, delay)
          obs.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )
    el.style.opacity = '0'
    el.style.transform = 'translateY(28px)'
    el.style.transition = 'opacity 0.7s ease, transform 0.7s ease'
    obs.observe(el)
    return () => obs.disconnect()
  }, [delay])
  return <div ref={ref} className={className}>{children}</div>
}

export default function Home() {
  const { articles, loading } = useNews()
  const featured = articles.slice(0, 3)

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative h-[620px] md:h-[700px] w-full overflow-hidden">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDm9cU8FajirxCgG0QZ7Ed7T1_z-PA8F-cqqIWBzT0UMhKBzau_kVOrHyhaP5onBjsGME0gLqyIiC-qcdU3_Dcj85kMQokcCJk7GV4pE8YtDGaqmLj_7s0JvaKqcjp4LhzYcxj_AMB5-Le9Cc9JAUwA2SC_JcnQdZ7iThetE-WZz6eY4i9mwTrfq8bfrka8eFAk6tsuKjk48YhsKtSMDkhTaxSzhTHRBAhPiBnQ7LNdBFusAuiJUbaLll6ljjVgz7-BmndPWJWSkfWc"
          alt="University Building"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-[1280px] mx-auto px-5 md:px-10 w-full">
            <div className="max-w-2xl text-white">
              <span className="inline-block text-[12px] font-bold uppercase tracking-widest text-[var(--color-primary-fixed-dim)] mb-4 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                Fakultas Ilmu Sosial dan Humaniora
              </span>
              <h1
                className="text-[36px] md:text-[56px] font-black leading-tight mb-6"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Memajukan Ilmu untuk Dunia yang Berubah
              </h1>
              <p className="text-[17px] md:text-[20px] leading-relaxed mb-8 text-white/85">
                Bergabunglah dengan komunitas sarjana yang berdedikasi pada ketelitian intelektual dan pencarian kebenaran melalui penelitian multidisiplin.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <Link to="/about" className="btn-primary !bg-[var(--color-accent)] !text-white hover:!brightness-110">
                  Pelajari Kurikulum
                </Link>
                <Link to="/news" className="btn-outline !border-white !text-white hover:!bg-white/10">
                  <span className="material-symbols-outlined">newspaper</span>
                  Portal Berita
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 animate-bounce">
          <span className="material-symbols-outlined text-[28px]">keyboard_arrow_down</span>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="bg-[var(--color-primary)]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center text-white">
              <div className="text-[36px] md:text-[42px] font-black" style={{ fontFamily: 'var(--font-display)' }}>
                {value}
              </div>
              <div className="text-[13px] text-white/70 uppercase tracking-wider mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── About intro ── */}
      <section className="py-24 bg-[var(--color-surface-container-low)]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
          <AnimatedSection className="md:col-span-7">
            <h2 className="section-title mb-6">Memupuk Keunggulan dalam Kajian Akademik</h2>
            <div className="space-y-4 text-[17px] leading-loose text-[var(--color-secondary)]">
              <p>
                Didirikan sebagai landasan universitas, departemen kami berfungsi sebagai sumber terpercaya dalam wacana akademik kontemporer. Kami menjembatani kesenjangan antara kearifan sejarah dan inovasi modern.
              </p>
              <p>
                Kurikulum kami dirancang untuk menantang intelektualitas, memupuk keterampilan berpikir kritis yang mempersiapkan lulusan menghadapi kompleksitas kepemimpinan global.
              </p>
            </div>
            <blockquote className="mt-8 border-l-4 border-[var(--color-primary)] pl-6 italic text-[var(--color-secondary)] text-[16px]">
              "Pencarian pengetahuan bukan perjalanan soliter, melainkan perjalanan kolektif menuju pencerahan dan integritas institusional." — Dekan Studi
            </blockquote>
            <Link to="/about" className="inline-flex items-center gap-2 mt-8 text-[var(--color-primary)] font-semibold hover:gap-3 transition-all">
              Selengkapnya tentang kami
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </AnimatedSection>
          <AnimatedSection className="md:col-span-5 group" delay={150}>
            <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-xl">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAj6IJ_6w7jizTXB2mRyaXLX16jNmvm8MYd5DYvpSEP6nAxfcB8T3x-xtz_h5cuOlk_sicrknkpitbAGzfUETVIvn96QVNeIg5Vjxizudpfekf_L3qd2hHYZNG5g0L9OuvgH8KfhjkHXJ_4k5GnxVG75KjZTfJKpuQme28TaCRwMkwUn3PWUrV_ACe_HmqHCeZWr9IhOb6JERoLk_5dr9dp7HNurDSFDhyQsB2JA6MUzP0G7yO39V6cD88oFT4Lodt7BA83lMClAOV"
                alt="Student Research"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="py-24">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10">
          <AnimatedSection className="text-center mb-16">
            <h2 className="section-title mb-4">Warisan Keunggulan</h2>
            <p className="text-[var(--color-secondary)] text-[17px] max-w-2xl mx-auto">
              Menyediakan pilar fundamental untuk karir yang sukses dalam dunia akademik dan seterusnya.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {features.map(({ icon, title, desc }, i) => (
              <AnimatedSection key={title} delay={i * 100}>
                <div className="p-7 border border-[var(--color-outline-variant)] bg-white rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group h-full">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-primary-fixed)] flex items-center justify-center mb-5 group-hover:bg-[var(--color-primary)] transition-colors">
                    <span
                      className="material-symbols-outlined text-[var(--color-primary)] group-hover:text-white text-[24px] transition-colors"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      {icon}
                    </span>
                  </div>
                  <h3 className="font-bold text-[var(--color-primary)] text-[18px] mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                    {title}
                  </h3>
                  <p className="text-[14px] text-[var(--color-secondary)] leading-relaxed">{desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured News ── */}
      <section className="py-24 bg-[var(--color-surface-container)]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10">
          <AnimatedSection className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="section-title mb-2">Pembaruan Departemen</h2>
              <p className="text-[var(--color-secondary)] text-[16px]">
                Berita dan pengumuman terbaru dari komunitas akademik kami.
              </p>
            </div>
            <Link
              to="/news"
              className="flex items-center gap-2 text-[var(--color-primary)] font-semibold hover:gap-3 transition-all whitespace-nowrap"
            >
              Semua Berita <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </AnimatedSection>

          {loading ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="bg-[var(--color-surface-container-high)] rounded-lg h-64 animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {featured.map((article, i) => (
                <AnimatedSection key={article.slug} delay={i * 100}>
                  <NewsCard article={article} />
                </AnimatedSection>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 text-center">
          <AnimatedSection>
            <h2 className="section-title mb-4">Mulai Perjalanan Akademik Anda</h2>
            <p className="text-[var(--color-secondary)] text-[17px] mb-10 max-w-xl mx-auto">
              Temukan program studi, daftar sebagai mahasiswa baru, atau hubungi kami untuk informasi lebih lanjut.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/about" className="btn-primary flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">how_to_reg</span>
                Pendaftaran
              </Link>
              <Link to="/about#curriculum" className="btn-outline flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">menu_book</span>
                Kurikulum
              </Link>
              <Link to="/about#contact" className="btn-outline flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">mail</span>
                Hubungi Kami
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
