export type PortfolioType = {
  title: string
  description: string
  img: string
  technology: string[]
  demo: string
  code?: string
}

export const portfolios: PortfolioType[] = [
  {
    title: 'Tebak Angka Acak',
    description:
      'Proyek Tebak Angka Acak ini adalah proyek website pertama yang saya buat. Ini adalah website untuk mencari angka acak berdasarkan tingkat kesulitan yang pengguna pilih.',
    img: '/images/portfolios/tebak-angka-acak.png',
    technology: ['next js', 'unocss', 'typescript'],
    demo: 'https://tebak-angka-random.vercel.app/',
    code: 'https://github.com/zhekabaila/Tebak-Angka-Random',
  },
  {
    title: 'Positivus',
    description:
      'Proyek Positivus ini adalah proyek saya ketika belajar menggunakan teknologi Next Js dan Tailwindcss. Proyek ini dibuat ketika saya mesih duduk di bangku SMK kelas 2. Website ini hanya website landing page biasa yang desainnya saya temukan di figma community.',
    img: '/images/portfolios/positivus.png',
    technology: ['next js', 'unocss', 'typescript'],
    demo: 'https://positivus-gamma.vercel.app/',
    code: 'https://github.com/zhekabaila/positivus-next',
  },
  {
    title: 'Ghia Farm',
    description:
      'Proyek Ghia Farm ini adalah proyek yang saya kerjakan bersama tim magang saya di PT. Sawala. Ini adalah proyek pertama yang saya kerjakan bersama tim atau tidak individu. Di proyek ini saya belajar cara menggunakan Git dan Github.',
    img: '/images/portfolios/ghia-farm.png',
    technology: ['next js', 'unocss', 'typescript'],
    demo: 'https://ghia-farm-sawala-tech.vercel.app/',
    code: '',
  },
  {
    title: 'Pionicon',
    description:
      'Proyek Pionicon ini adalah proyek yang ke dua yang dikerjakan tim magang saya ketika di PT. Sawala. Di proyek ini saya belajar tentang Conditional Rendering, Dynamic Routes, dan Parallax.',
    img: '/images/portfolios/pionicon.png',
    technology: ['next js', 'unocss', 'typescript'],
    demo: 'https://pionicon.vercel.app/',
    code: '',
  },
  {
    title: 'Isea Instellar',
    description:
      'Proyek Isea Insteller ini adalah proyek paling berkesan yang pernah saya kerjakan. Karena proyek ini adalah proyek pertama dari client yang saya kerjakan bersama tim magang saya di PT. Sawala.',
    img: '/images/portfolios/isea-instellar.png',
    technology: [
      'react js',
      'husky',
      'typescript',
      'tailwindcss',
      'twin.macro',
      'vite',
    ],
    demo: 'https://isea.instellar.id/',
    code: '',
  },
  {
    title: 'E-Agenda Kelas',
    description:
      'Proyek E-Agenda Kelas ini adalah proyek yang saya kerjakan bersama tim Tefa RPL Stemanika semasa sekolah. Ini adalah website menejemen agenda kelas berbasis digital. Website ini juga dapat membantu mempercepat pihak sekolah dalam merekap data kehadiran siswa maupun guru. Jika sekolah anda tertarik untuk menggunakan website kami, anda dapat mengunjungi website E-Agenda Kelas dengan cara menekan tombol Live Demo di bawah.',
    img: '/images/portfolios/eagenda.png',
    technology: [
      'tailwindcss',
      'javascript',
      'php',
      'laravel',
      'mysql',
      'cloudinary',
    ],
    demo: 'https://e-agendakelas.com',
    code: '',
  },
  {
    title: 'Kelulusan',
    description:
      'Website Kelulusan ini adalah proyek yang saya kerjakan sendiri ketika masih sekolah di SMK Negeri 1 Majalengka. Website ini berfungsi untuk mengumumkan informasi kelulusan siswa berbasi website, sehingga siswa tidak perlu datang ke sekolah.',
    img: '/images/portfolios/kelulusan.png',
    technology: ['tailwindcss', 'javascript', 'php', 'laravel', 'mysql'],
    demo: '',
    code: '',
  },
  {
    title: 'Bookshelf Apps',
    description:
      'Bookshelf ini adalah website untuk menejemen buku yang sudah atau belum dibaca. Website ini dibuat untuk memenuhi tugas akhir pada pelatihan Belajar Front-End Web untuk Pemula di Dicoding.',
    img: '/images/portfolios/bookshelf-apps.png',
    technology: ['tailwindcss', 'javascript', 'nextjs'],
    demo: 'https://bookshelf-apps-zeta.vercel.app/',
    code: 'https://github.com/zhekabaila/bookshelf-apps',
  },
  {
    title: 'Santay Dulu',
    description:
      'Ini adalah proykek website landing page untuk mencari tempat liburan. Proyek ini saya buat untuk memenuhi tugas akhir pelatihan Belajar Dasar Pemrograman Web di Dicoding.',
    img: '/images/portfolios/santaydulu.png',
    technology: ['tailwindcss', 'javascript', 'nextjs'],
    demo: 'https://santaydulu.vercel.app/',
    code: 'https://github.com/zhekabaila/santay-dulu',
  },
  {
    title: 'Notes',
    description:
      'Ini adalah proyek catatan yang saya buat untuk memenuhi tugas akhir pada pelatihan Belajar Membuat Aplikasi Web dengan React di Dicoding.',
    img: '/images/portfolios/notes-react.png',
    technology: ['tailwindcss', 'javascript', 'nextjs'],
    demo: 'https://notes-react-course-dicoding.vercel.app/',
    code: 'https://github.com/zhekabaila/notes-react-course-dicoding',
  },
  {
    title: 'Kalkulator Segitiga',
    description:
      'Proyek kalkulator segitiga sederhana ini saya buat untuk memenuhi tugas akhir dalam course junior frontend web development di RevoU. Seperti namanya, website ini dapat menghitung segitiga, namun hanya luas dan keliling saja.',
    img: '/images/portfolios/kalkulator_segitiga.png',
    technology: ['tailwindcss', 'javascript', 'nextjs'],
    demo: 'https://revou-fundamental-course.github.io/25-dec-23-zhekabaila/',
    code: '',
  },
  {
    title: 'Virtualtour Stemanika',
    description:
      'Proyek kalkulator segitiga sederhana ini saya buat untuk memenuhi tugas akhir dalam course junior frontend web development di RevoU. Seperti namanya, website ini dapat menghitung segitiga, namun hanya luas dan keliling saja.',
    img: '/images/portfolios/virtualtour.png',
    technology: ['tailwindcss', 'javascript', 'nextjs'],
    demo: 'https://revou-fundamental-course.github.io/25-dec-23-zhekabaila/',
    code: '',
  },
  {
    title: 'Trigonometri',
    description:
      'Proyek Website Trigonometri ini saya kerjakan bersama teman-teman satu kelompok pada mata kuliah Kalkulus I. Proyek ini dibuat untuk memenuhi tugas akhir mata kuliah Kalkulus I.',
    img: '/images/portfolios/trigonometri.png',
    technology: ['tailwindcss', 'javascript', 'nextjs'],
    demo: '',
    code: '',
  },
]
