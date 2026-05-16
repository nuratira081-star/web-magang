import { useState } from 'react'
import { Link } from 'react-router-dom'

const months = ['Oktober 2024', 'November 2024', 'Desember 2024']

const events = {
  'Oktober 2024': [
    {
      id: 1,
      day: '15',
      month: 'OKT',
      title: 'Kuliah Umum Baru: Etika AI dalam Riset',
      time: '10:00 – 12:00',
      location: 'Aula Utama',
      type: 'Akademik',
      mode: 'Tatap Muka',
      desc: 'Narasumber: Prof. Dr. Andri Kusuma (Pakar AI Nasional). Terbuka untuk seluruh mahasiswa dan dosen.',
    },
    {
      id: 2,
      day: '18',
      month: 'OKT',
      title: 'Bimbingan Karir Mahasiswa Akhir',
      time: '13:30 – 15:30',
      location: 'Ruang Seminar B',
      type: 'Kemahasiswaan',
      mode: 'Tatap Muka',
      desc: 'Sesi bimbingan karir khusus mahasiswa semester akhir bersama konsultan karir dari LinkedIn Indonesia.',
    },
    {
      id: 3,
      day: '20',
      month: 'OKT',
      title: 'Sumpah Pemuda Symposium 2024',
      time: '08:00 – 17:00',
      location: 'Gedung Rektorat Lt. 3',
      type: 'Kemahasiswaan',
      mode: 'Tatap Muka',
      desc: 'Simposium nasional memperingati Hari Sumpah Pemuda dengan tema "Generasi Muda dan Tantangan Digital".',
    },
    {
      id: 4,
      day: '22',
      month: 'OKT',
      title: 'Workshop Penulisan Jurnal Internasional',
      time: '09:00 – 16:00',
      location: 'Lab Riset',
      type: 'Penelitian',
      mode: 'Tatap Muka',
      desc: 'Workshop intensif teknik penulisan dan publikasi artikel di jurnal internasional berindeks Scopus.',
    },
    {
      id: 5,
      day: '25',
      month: 'OKT',
      title: 'Diskusi Panel: Masa Depan Pendidikan Tinggi',
      time: '14:00 – 17:00',
      location: 'Daring (Zoom)',
      type: 'Akademik',
      mode: 'Daring',
      desc: 'Panel diskusi virtual dengan pembicara dari 5 universitas internasional. Link Zoom dikirim via email.',
    },
  ],
  'November 2024': [
    {
      id: 6,
      day: '12',
      month: 'NOV',
      title: 'Annual Research Symposium 2024',
      time: '09:00 – 17:00',
      location: 'Gedung Pascasarjana',
      type: 'Penelitian',
      mode: 'Hybrid',
      desc: 'Simposium penelitian tahunan dengan presentasi dari 40+ peneliti. Terbuka untuk umum dengan registrasi.',
    },
    {
      id: 7,
      day: '18',
      month: 'NOV',
      title: 'Guest Lecture: Ethics in AI',
      time: '14:00 – 16:00',
      location: 'Digital Arts Center',
      type: 'Akademik',
      mode: 'Tatap Muka',
      desc: 'Kuliah tamu dari Prof. Eleanor Vance (Cambridge University) tentang etika kecerdasan buatan.',
    },
    {
      id: 8,
      day: '28',
      month: 'NOV',
      title: 'Pameran Karya Mahasiswa 2024',
      time: '10:00 – 20:00',
      location: 'Aula Serbaguna',
      type: 'Kemahasiswaan',
      mode: 'Tatap Muka',
      desc: 'Pameran karya penelitian dan kreasi mahasiswa terbaik sepanjang tahun 2024.',
    },
  ],
  'Desember 2024': [
    {
      id: 9,
      day: '05',
      month: 'DES',
      title: 'Penutupan Semester Ganjil & Yudisium',
      time: '09:00 – 12:00',
      location: 'Auditorium Utama',
      type: 'Akademik',
      mode: 'Tatap Muka',
      desc: 'Upacara resmi penutupan semester ganjil dan prosesi yudisium mahasiswa berprestasi.',
    },
    {
      id: 10,
      day: '20',
      month: 'DES',
      title: 'Departemen Year-End Gathering',
      time: '16:00 – 21:00',
      location: 'Hall Departemen',
      type: 'Kemahasiswaan',
      mode: 'Tatap Muka',
      desc: 'Acara pertemuan akhir tahun seluruh civitas akademika departemen.',
    },
  ],
}

const typeColor = {
  Akademik: 'bg-blue-50 text-blue-700',
  Penelitian: 'bg-purple-50 text-purple-700',
  Kemahasiswaan: 'bg-green-50 text-green-700',
}

const modeIcon = {
  'Tatap Muka': 'location_on',
  'Daring': 'videocam',
  'Hybrid': 'devices',
}

export default function Events() {
  const [activeMonth, setActiveMonth] = useState(months[0])
  const [expandedId, setExpandedId] = useState(null)
  const currentEvents = events[activeMonth] || []

  return (
    <div className="max-w-[1280px] mx-auto px-5 md:px-10 py-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-[var(--color-outline)] mb-6">
        <Link to="/" className="hover:text-[var(--color-primary)] transition-colors">Beranda</Link>
        <span className="material-symbols-outlined text-[14px]">chevron_right</span>
        <span className="text-[var(--color-on-surface)]">Agenda</span>
      </nav>

      {/* Header */}
      <div className="mb-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-7">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)] flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                calendar_month
              </span>
            </div>
            <h1 className="text-[36px] md:text-[42px] font-black text-[var(--color-primary)]" style={{ fontFamily: 'var(--font-display)' }}>
              Agenda Akademik
            </h1>
          </div>
          <p className="text-[17px] text-[var(--color-secondary)] max-w-xl">
            Jadwal kegiatan akademik, seminar, workshop, dan acara penting Departemen Keunggulan Akademik semester ini.
          </p>
        </div>
        {/* Quick stats */}
        <div className="md:col-span-5 grid grid-cols-3 gap-4">
          {[
            { val: Object.values(events).flat().length, label: 'Total Acara' },
            { val: '3', label: 'Bulan' },
            { val: Object.values(events).flat().filter(e => e.mode === 'Daring' || e.mode === 'Hybrid').length, label: 'Acara Daring' },
          ].map(({ val, label }) => (
            <div key={label} className="bg-[var(--color-surface-container-low)] rounded-xl p-4 text-center border border-[var(--color-outline-variant)]">
              <div className="text-[28px] font-black text-[var(--color-primary)]" style={{ fontFamily: 'var(--font-display)' }}>{val}</div>
              <div className="text-[11px] text-[var(--color-secondary)] uppercase tracking-wider mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Month tabs */}
      <div className="flex gap-3 mb-8 flex-wrap">
        {months.map(m => (
          <button
            key={m}
            onClick={() => setActiveMonth(m)}
            className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-200 ${activeMonth === m
                ? 'bg-[var(--color-primary)] text-white shadow-md'
                : 'bg-white border border-[var(--color-outline-variant)] text-[var(--color-secondary)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]'
              }`}
          >
            {m}
          </button>
        ))}
      </div>

      {/* Events timeline */}
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-[27px] top-0 bottom-0 w-0.5 bg-[var(--color-outline-variant)] hidden md:block" />

        <div className="space-y-4">
          {currentEvents.map(ev => (
            <div key={ev.id} className="md:flex gap-6 items-start">
              {/* Date badge */}
              <div className="hidden md:flex flex-col items-center flex-shrink-0">
                <div className="w-14 h-14 rounded-xl bg-[var(--color-primary)] text-white flex flex-col items-center justify-center shadow-md z-10">
                  <span className="font-black text-[18px] leading-none">{ev.day}</span>
                  <span className="text-[9px] font-bold uppercase">{ev.month}</span>
                </div>
              </div>

              {/* Card */}
              <div
                className="flex-1 bg-white rounded-2xl border border-[var(--color-outline-variant)] shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden cursor-pointer"
                onClick={() => setExpandedId(expandedId === ev.id ? null : ev.id)}
              >
                <div className="p-5 flex gap-4 items-start">
                  {/* Mobile date */}
                  <div className="md:hidden flex-shrink-0 w-12 h-12 rounded-xl bg-[var(--color-primary)] text-white flex flex-col items-center justify-center">
                    <span className="font-black text-[16px] leading-none">{ev.day}</span>
                    <span className="text-[9px] font-bold uppercase">{ev.month}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${typeColor[ev.type] || 'bg-gray-50 text-gray-700'}`}>
                        {ev.type}
                      </span>
                      <span className="text-[11px] font-medium text-[var(--color-outline)] flex items-center gap-1">
                        <span className="material-symbols-outlined text-[12px]">{modeIcon[ev.mode]}</span>
                        {ev.mode}
                      </span>
                    </div>
                    <h3 className="font-bold text-[var(--color-primary)] text-[16px] leading-snug mb-1">{ev.title}</h3>
                    <div className="flex flex-wrap gap-3 text-[13px] text-[var(--color-outline)]">
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">schedule</span>
                        {ev.time}
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">location_on</span>
                        {ev.location}
                      </span>
                    </div>
                  </div>
                  <span className={`material-symbols-outlined text-[var(--color-outline)] transition-transform duration-200 flex-shrink-0 ${expandedId === ev.id ? 'rotate-180' : ''}`}>
                    expand_more
                  </span>
                </div>

                {/* Expanded */}
                {expandedId === ev.id && (
                  <div className="px-5 pb-5 border-t border-[var(--color-outline-variant)] pt-4">
                    <p className="text-[14px] text-[var(--color-secondary)] leading-relaxed mb-4">{ev.desc}</p>
                    <button className="btn-primary text-sm py-2 px-5">
                      Daftar Sekarang
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Important note */}
      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[var(--color-primary-fixed)] border border-[var(--color-primary)]/20 rounded-2xl p-6">
          <h4 className="font-bold text-[var(--color-primary)] flex items-center gap-2 mb-3">
            <span className="material-symbols-outlined text-[18px]">info</span>
            Informasi Registrasi
          </h4>
          <p className="text-sm text-[var(--color-secondary)] leading-relaxed">
            Untuk acara tatap muka, kapasitas peserta terbatas. Registrasi dapat dilakukan melalui portal mahasiswa atau menghubungi admin departemen minimal H-3 acara.
          </p>
        </div>
        <div className="bg-[var(--color-surface-container-low)] border border-[var(--color-outline-variant)] rounded-2xl p-6">
          <h4 className="font-bold text-[var(--color-primary)] flex items-center gap-2 mb-3">
            <span className="material-symbols-outlined text-[18px]">videocam</span>
            Acara Daring
          </h4>
          <p className="text-sm text-[var(--color-secondary)] leading-relaxed">
            Tautan Zoom/Meet untuk acara daring akan dikirimkan melalui email institusional maksimal 1 hari sebelum acara. Pastikan email Anda aktif.
          </p>
        </div>
      </div>
    </div>
  )
}
