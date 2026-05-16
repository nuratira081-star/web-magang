import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const faculty = [
  {
    name: 'Prof. Dr. Budi Santoso, M.Hum.',
    role: 'Ketua Departemen',
    field: 'Sosiologi & Kebijakan Publik',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBGOQ6JR7_IgHP-jwq-mgMbqbP00TQZRJAff7XU-o-N-VPPgZwtZissLVtQDgksljGdYQovIcqWNZ_6GGkfLatz__i13H9tkSXNFOJz5XfthTBd-yV61bbJTB-gma985nThg28jwKynW7PcIRynt981JQPE1Bqxw3IXTWLTX4yVk17jsr-0o6Gt1A5b9B2b_Lt7A5twlhrTLipC_dbODEKHzXSxtzPjlVgY7cpBHqIOQhId389VDSzjVXAj3u93X1m3mHLCamE-61h',
  },
  {
    name: 'Dr. Sarah Jenkins, Ph.D.',
    role: 'Kepala Penelitian',
    field: 'Lingkungan & Keberlanjutan',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBGOQ6JR7_IgHP-jwq-mgMbqbP00TQZRJAff7XU-o-N-VPPgZwtZissLVtQDgksljGdYQovIcqWNZ_6GGkfLatz__i13H9tkSXNFOJz5XfthTBd-yV61bbJTB-gma985nThg28jwKynW7PcIRynt981JQPE1Bqxw3IXTWLTX4yVk17jsr-0o6Gt1A5b9B2b_Lt7A5twlhrTLipC_dbODEKHzXSxtzPjlVgY7cpBHqIOQhId389VDSzjVXAj3u93X1m3mHLCamE-61h',
  },
  {
    name: 'Prof. Agus Salim, M.Si.',
    role: 'Dosen Senior',
    field: 'Energi & Kebijakan Nasional',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBGOQ6JR7_IgHP-jwq-mgMbqbP00TQZRJAff7XU-o-N-VPPgZwtZissLVtQDgksljGdYQovIcqWNZ_6GGkfLatz__i13H9tkSXNFOJz5XfthTBd-yV61bbJTB-gma985nThg28jwKynW7PcIRynt981JQPE1Bqxw3IXTWLTX4yVk17jsr-0o6Gt1A5b9B2b_Lt7A5twlhrTLipC_dbODEKHzXSxtzPjlVgY7cpBHqIOQhId389VDSzjVXAj3u93X1m3mHLCamE-61h',
  },
  {
    name: 'Dr. Rina Kusuma, M.Kom.',
    role: 'Dosen & Koordinator PKL',
    field: 'Teknologi & Inovasi Digital',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBGOQ6JR7_IgHP-jwq-mgMbqbP00TQZRJAff7XU-o-N-VPPgZwtZissLVtQDgksljGdYQovIcqWNZ_6GGkfLatz__i13H9tkSXNFOJz5XfthTBd-yV61bbJTB-gma985nThg28jwKynW7PcIRynt981JQPE1Bqxw3IXTWLTX4yVk17jsr-0o6Gt1A5b9B2b_Lt7A5twlhrTLipC_dbODEKHzXSxtzPjlVgY7cpBHqIOQhId389VDSzjVXAj3u93X1m3mHLCamE-61h',
  },
]

const values = [
  { icon: 'verified', title: 'Integritas Akademik', desc: 'Menjunjung tinggi kejujuran dan etika dalam setiap aspek pendidikan dan penelitian.' },
  { icon: 'lightbulb', title: 'Inovasi', desc: 'Mendorong pemikiran kritis dan solusi kreatif untuk tantangan dunia nyata.' },
  { icon: 'handshake', title: 'Kolaborasi', desc: 'Membangun kemitraan yang kuat antara akademisi, industri, dan masyarakat.' },
  { icon: 'public', title: 'Dampak Global', desc: 'Menghasilkan penelitian yang relevan dan berdampak bagi masyarakat lokal dan global.' },
]

export default function About() {
  useEffect(() => {
    document.title = 'Tentang Kami | Portal Berita Departemen'
  }, [])

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-[var(--color-primary)] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-end pr-20">
          <span className="material-symbols-outlined" style={{ fontSize: '400px' }}>school</span>
        </div>
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 py-20 md:py-28 relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/50 mb-8">
            <Link to="/" className="hover:text-white transition-colors">Beranda</Link>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-white/80">Tentang Kami</span>
          </nav>
          <div className="max-w-3xl">
            <h1
              className="text-[40px] md:text-[56px] font-black leading-tight mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Tentang Departemen
            </h1>
            <p className="text-[18px] text-white/80 leading-relaxed max-w-2xl">
              Didirikan sebagai pusat keunggulan akademik, kami berkomitmen menghasilkan sarjana yang tidak hanya cerdas secara intelektual, namun juga berintegritas dan berdampak bagi masyarakat.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-[var(--color-surface-container-low)]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 border border-[var(--color-outline-variant)] shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-[var(--color-primary-fixed)] flex items-center justify-center mb-5">
              <span className="material-symbols-outlined text-[var(--color-primary)] text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>visibility</span>
            </div>
            <h2 className="text-[22px] font-bold text-[var(--color-primary)] mb-3" style={{ fontFamily: 'var(--font-display)' }}>
              Visi
            </h2>
            <p className="text-[var(--color-secondary)] leading-relaxed">
              Menjadi departemen terkemuka di Asia Tenggara yang menghasilkan pemimpin dan inovator akademik berkelas dunia, berkontribusi pada kemajuan ilmu pengetahuan dan kesejahteraan masyarakat global.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-[var(--color-outline-variant)] shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-[var(--color-primary-fixed)] flex items-center justify-center mb-5">
              <span className="material-symbols-outlined text-[var(--color-primary)] text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>flag</span>
            </div>
            <h2 className="text-[22px] font-bold text-[var(--color-primary)] mb-3" style={{ fontFamily: 'var(--font-display)' }}>
              Misi
            </h2>
            <ul className="space-y-2 text-[var(--color-secondary)]">
              {[
                'Menyelenggarakan pendidikan tinggi berkualitas dan berstandar internasional',
                'Melaksanakan penelitian inovatif yang relevan dan berdampak nyata',
                'Mengabdi kepada masyarakat melalui program yang terarah dan berkelanjutan',
                'Membangun jaringan kolaborasi global dengan institusi terkemuka',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[var(--color-primary)] text-[16px] mt-0.5 flex-shrink-0">check_circle</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Values */}
      <section id="values" className="py-20">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10">
          <div className="text-center mb-14">
            <h2 className="section-title mb-3">Nilai-Nilai Kami</h2>
            <p className="text-[var(--color-secondary)] text-[17px] max-w-xl mx-auto">
              Prinsip dasar yang memandu setiap langkah dalam proses akademik dan penelitian kami.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {values.map(({ icon, title, desc }) => (
              <div key={title} className="text-center p-6 rounded-2xl border border-[var(--color-outline-variant)] bg-white hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-2xl bg-[var(--color-primary-fixed)] flex items-center justify-center mx-auto mb-4 group-hover:bg-[var(--color-primary)] transition-colors">
                  <span className="material-symbols-outlined text-[var(--color-primary)] group-hover:text-white transition-colors text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    {icon}
                  </span>
                </div>
                <h3 className="font-bold text-[var(--color-primary)] text-[16px] mb-2">{title}</h3>
                <p className="text-[13px] text-[var(--color-secondary)] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section id="faculty" className="py-20 bg-[var(--color-surface-container-low)]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10">
          <div className="text-center mb-14">
            <h2 className="section-title mb-3">Staf Pengajar</h2>
            <p className="text-[var(--color-secondary)] text-[17px] max-w-xl mx-auto">
              Dipandu oleh para akademisi dan pakar kelas dunia yang berdedikasi pada pendidikan dan penelitian.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {faculty.map(({ name, role, field, img }) => (
              <div key={name} className="bg-white rounded-2xl overflow-hidden border border-[var(--color-outline-variant)] shadow-sm hover:shadow-lg transition-all duration-300 group">
                <div className="aspect-[4/3] overflow-hidden bg-[var(--color-surface-container)]">
                  <img
                    src={img}
                    alt={name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-[var(--color-primary)] text-[15px] leading-snug mb-1">{name}</h3>
                  <p className="text-[13px] font-semibold text-[var(--color-surface-tint)] mb-1">{role}</p>
                  <p className="text-[12px] text-[var(--color-secondary)]">{field}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section id="curriculum" className="py-20">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5">
              <h2 className="section-title mb-4">Kurikulum</h2>
              <p className="text-[var(--color-secondary)] text-[16px] leading-relaxed mb-6">
                Kurikulum kami dirancang mengacu pada standar internasional OBE (Outcome-Based Education) yang memastikan lulusan memiliki kompetensi yang relevan dengan kebutuhan industri global.
              </p>
              <ul className="space-y-3">
                {[
                  { sem: 'Semester 1–2', topic: 'Fondasi Keilmuan & Metodologi' },
                  { sem: 'Semester 3–4', topic: 'Spesialisasi & Penelitian Dasar' },
                  { sem: 'Semester 5–6', topic: 'Praktikum Lapangan & Kolaborasi' },
                  { sem: 'Semester 7–8', topic: 'Tugas Akhir & Publikasi' },
                ].map(({ sem, topic }) => (
                  <li key={sem} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--color-primary)] text-white text-[11px] flex items-center justify-center font-bold mt-0.5">✓</span>
                    <div>
                      <span className="font-semibold text-[var(--color-primary)] text-[14px]">{sem}</span>
                      <span className="text-[var(--color-secondary)] text-[14px]"> — {topic}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-7">
              <div className="aspect-video overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvRhlpZ6wr0xBvHxpwa31nysLasfnbTYWg7XSLlHHoNqTkVGROrQnRzXMJY4cxPz6xIgyG2psAKhFuxuWQQJyyB0fo4ky5QMK9PFb75n5_Px8by5zUiE-saWE4-PqKTa1eJZdc4H2ue4yaDmJMowB7KI36TknBfCkhrWS26RiS8McMkIexTTPFq9e28c9Hu_mk05z3tv9G3D_l4XL0Czdrxnjpz8eokdTgdsdjxXoSbXTd9_0ztI-Mm5ykyxVMvt67_LuSx8sx4eV0"
                  alt="Campus"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-[var(--color-surface-container-low)]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10">
          <div className="text-center mb-12">
            <h2 className="section-title mb-3">Hubungi Kami</h2>
            <p className="text-[var(--color-secondary)] text-[17px]">Kami siap membantu Anda. Jangan ragu untuk menghubungi kami.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: 'location_on', title: 'Alamat', detail: 'Gedung Akademik Lantai 3\nJl. Pendidikan No. 1\nKota Ilmu, 12345' },
              { icon: 'mail', title: 'Email', detail: 'info@dept.ac.id\nhumas@dept.ac.id' },
              { icon: 'phone', title: 'Telepon', detail: '(021) 123-4567\nSenin–Jumat, 08:00–16:00' },
            ].map(({ icon, title, detail }) => (
              <div key={title} className="bg-white rounded-2xl p-7 border border-[var(--color-outline-variant)] text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 rounded-2xl bg-[var(--color-primary-fixed)] flex items-center justify-center mx-auto mb-5">
                  <span className="material-symbols-outlined text-[var(--color-primary)] text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>{icon}</span>
                </div>
                <h3 className="font-bold text-[var(--color-primary)] text-[17px] mb-2">{title}</h3>
                <p className="text-[var(--color-secondary)] text-[14px] leading-relaxed whitespace-pre-line">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
