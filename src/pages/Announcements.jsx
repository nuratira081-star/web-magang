import { Link } from 'react-router-dom'

const announcements = [
  {
    id: 1,
    category: 'AKADEMIK',
    title: 'Batas Akhir Pendaftaran Yudisium Semester Ganjil 2024/2025',
    desc: 'Mahasiswa yang telah menyelesaikan seluruh SKS wajib mendaftar yudisium melalui portal akademik paling lambat 20 Oktober 2024.',
    date: 'Deadline: 20 Oktober 2024',
    priority: 'high',
    icon: 'school',
  },
  {
    id: 2,
    category: 'BEASISWA',
    title: 'Pembukaan Program Pertukaran Mahasiswa ke Eropa 2025',
    desc: 'Program pertukaran mahasiswa ke universitas-universitas terkemuka di Eropa dibuka untuk 5 mahasiswa berprestasi. IPK minimum 3.50.',
    date: 'Tersedia untuk 5 mahasiswa berprestasi',
    priority: 'medium',
    icon: 'public',
  },
  {
    id: 3,
    category: 'FASILITAS',
    title: 'Pemeliharaan Rutin Server Laboratorium Komputer',
    desc: 'Laboratorium komputer akan ditutup sementara untuk pemeliharaan rutin server. Harap rencanakan kegiatan Anda sebelum tanggal tersebut.',
    date: 'Sabtu, 14 Okt (08:00–16:00)',
    priority: 'low',
    icon: 'computer',
  },
  {
    id: 4,
    category: 'PENELITIAN',
    title: 'Pendaftaran Hibah Penelitian Internal Semester Genap',
    desc: 'Departemen membuka pendaftaran hibah penelitian internal bagi dosen tetap. Maksimal Rp 25.000.000 per proposal.',
    date: 'Pendaftaran: 1–31 November 2024',
    priority: 'medium',
    icon: 'science',
  },
  {
    id: 5,
    category: 'KEMAHASISWAAN',
    title: 'Pemilihan Ketua BEM Departemen Periode 2025',
    desc: 'Pendaftaran calon Ketua BEM Departemen dibuka. Syarat: mahasiswa aktif semester 3–7, IPK min 3.00, tidak sedang cuti.',
    date: 'Pendaftaran: 15–25 Oktober 2024',
    priority: 'medium',
    icon: 'groups',
  },
  {
    id: 6,
    category: 'AKADEMIK',
    title: 'Perubahan Jadwal UTS Mata Kuliah Metodologi Penelitian',
    desc: 'UTS Metodologi Penelitian kelas A dan B dipindahkan ke ruang R.203 karena renovasi gedung utama.',
    date: 'Berlaku mulai 17 Oktober 2024',
    priority: 'high',
    icon: 'event_note',
  },
]

const priorityStyle = {
  high: {
    border: 'border-l-4 border-red-400',
    badge: 'bg-red-50 text-red-700',
    label: 'Penting',
  },
  medium: {
    border: 'border-l-4 border-[var(--color-primary)]',
    badge: 'bg-[var(--color-primary-fixed)] text-[var(--color-primary)]',
    label: 'Info',
  },
  low: {
    border: 'border-l-4 border-[var(--color-outline-variant)]',
    badge: 'bg-[var(--color-surface-container)] text-[var(--color-secondary)]',
    label: 'Umum',
  },
}

export default function Announcements() {
  return (
    <div className="max-w-[1280px] mx-auto px-5 md:px-10 py-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-[var(--color-outline)] mb-6">
        <Link to="/" className="hover:text-[var(--color-primary)] transition-colors">Beranda</Link>
        <span className="material-symbols-outlined text-[14px]">chevron_right</span>
        <span className="text-[var(--color-on-surface)]">Pengumuman</span>
      </nav>

      {/* Page Header */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)] flex items-center justify-center">
            <span className="material-symbols-outlined text-white text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>campaign</span>
          </div>
          <div>
            <h1 className="text-[36px] md:text-[42px] font-black text-[var(--color-primary)]" style={{ fontFamily: 'var(--font-display)' }}>
              Pengumuman
            </h1>
          </div>
        </div>
        <p className="text-[17px] text-[var(--color-secondary)] max-w-2xl">
          Informasi resmi dan pengumuman penting dari Departemen Keunggulan Akademik untuk seluruh civitas akademika.
        </p>
      </div>

      {/* Priority legend */}
      <div className="flex flex-wrap gap-3 mb-8">
        {Object.entries(priorityStyle).map(([key, { badge, label }]) => (
          <span key={key} className={`inline-flex items-center gap-1.5 text-[12px] font-semibold px-3 py-1 rounded-full ${badge}`}>
            <span className="w-1.5 h-1.5 rounded-full bg-current" />
            {label}
          </span>
        ))}
      </div>

      {/* Announcements list */}
      <div className="space-y-4">
        {announcements.map(ann => {
          const style = priorityStyle[ann.priority]
          return (
            <div
              key={ann.id}
              className={`bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200 ${style.border} flex gap-5 group cursor-pointer`}
            >
              <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-[var(--color-surface-container-low)] flex items-center justify-center group-hover:bg-[var(--color-primary-fixed)] transition-colors">
                <span className="material-symbols-outlined text-[var(--color-primary)] text-[20px]">{ann.icon}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--color-primary)]">
                    {ann.category}
                  </span>
                  <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${style.badge}`}>
                    {style.label}
                  </span>
                </div>
                <h3 className="font-bold text-[var(--color-primary)] text-[16px] mb-1 leading-snug">
                  {ann.title}
                </h3>
                <p className="text-sm text-[var(--color-secondary)] leading-relaxed mb-3">
                  {ann.desc}
                </p>
                <div className="flex items-center gap-1.5 text-[13px] text-[var(--color-outline)]">
                  <span className="material-symbols-outlined text-[14px]">schedule</span>
                  {ann.date}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Info box */}
      <div className="mt-12 bg-[var(--color-surface-container-low)] border border-[var(--color-outline-variant)] rounded-2xl p-8 flex flex-col md:flex-row gap-6 items-start">
        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[var(--color-primary)] flex items-center justify-center">
          <span className="material-symbols-outlined text-white">notifications_active</span>
        </div>
        <div>
          <h3 className="font-bold text-[var(--color-primary)] text-[18px] mb-2">Aktifkan Notifikasi</h3>
          <p className="text-[var(--color-secondary)] text-sm leading-relaxed max-w-lg">
            Pastikan Anda selalu memeriksa email institusional dan portal mahasiswa untuk mendapatkan pengumuman terbaru secara real-time. Pengumuman penting selalu dikirimkan melalui email resmi departemen.
          </p>
          <a
            href="mailto:info@dept.ac.id"
            className="inline-flex items-center gap-2 mt-4 text-[var(--color-primary)] font-semibold text-sm hover:gap-3 transition-all"
          >
            <span className="material-symbols-outlined text-[16px]">mail</span>
            Hubungi Departemen
          </a>
        </div>
      </div>
    </div>
  )
}
