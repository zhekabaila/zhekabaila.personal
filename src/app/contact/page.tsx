import Link from 'next/link'
import { FaGithub, FaInstagram, FaLinkedinIn, FaMailBulk } from 'react-icons/fa'

const Contact = () => {
  return (
    <>
      <section
        id="roadmap"
        className="grid grid-cols-1 lg:grid-cols-2 border-y-4 border-y-black my-40 mx-4 lg:mx-36"
      >
        <div className="relative flex flex-col justify-center p-10 bg-[#0a66c2] text-white border-x-4 border-x-black lg:border-x-0 lg:border-l-4 lg:border-l-black lg:border-b-4 lg:border-b-black overflow-hidden">
          <div className="absolute right-auto left-1/2 lg:left-auto lg:right-0 top-1/2 -translate-x-1/2 lg:-translate-x-0 -translate-y-1/2 opacity-40">
            <FaLinkedinIn size={350} color="#fff" className="h-full w-auto" />
          </div>
          <div className="flex items-center gap-x-4 z-10">
            <div className="bg-white size-2.5 lg:size-3" />
            <h2 className="text-base lg:text-lg font-bold">Linkedin</h2>
          </div>
          <div className="mt-10 z-10">
            <p className="text-base lg:text-lg font-medium">
              Temukan informasi lebih lanjut tentang perjalanan profesional
              saya, keterampilan, dan pencapaian melalui LinkedIn. Di sini, saya
              berbagi wawasan, pengalaman kerja, dan koneksi dengan para
              profesional lainnya di bidang teknologi.
            </p>
            <br />
            <div className="flex">
              <Link
                href="https://www.linkedin.com/in/zhekabaila"
                target="_blank"
                className="block bg-white/80 text-sm lg:text-base text-black hover:bg-white px-5 py-2 border-2 border-black font-medium"
              >
                Kunjungi
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden lg:block bg-white border-b-4 border-b-black border-x-4 border-x-black"></div>
        <div className="hidden lg:block bg-white border-l-4 border-l-black"></div>
        <div className="relative bg-[#fe2752] flex flex-col justify-center p-10 border-x-4 border-x-black border-t-4 border-t-black lg:border-t-0 overflow-hidden text-white">
          <div className="absolute left-1/2 lg:left-auto lg:right-0 top-1/2 -translate-x-1/2 lg:-translate-x-0 -translate-y-1/2 opacity-40">
            <FaInstagram size={350} color="#fff" className="h-full w-auto" />
          </div>
          <div className="flex items-center gap-x-4 z-10">
            <div className="bg-white size-2.5 lg:size-3" />
            <h2 className="text-base lg:text-lg font-bold">Instagram</h2>
          </div>
          <div className="mt-10 z-10">
            <p className="text-base lg:text-lg font-medium">
              Ikuti perjalanan visual saya di Instagram. Saya berbagi momen
              menarik, proyek kreatif, dan inspirasi sehari-hari. Jangan
              lewatkan cerita di balik layar dan ide-ide baru yang saya bagikan.
            </p>
            <br />
            <div className="flex">
              <Link
                href="https://instagram.com/zhekabaila"
                target="_blank"
                className="block bg-white/80 text-sm lg:text-base text-black hover:bg-white px-5 py-2 border-2 border-black font-medium"
              >
                Kunjungi
              </Link>
            </div>
          </div>
        </div>
        <div className="relative flex flex-col justify-center p-10 bg-[#010409] text-white border-x-4 border-x-black lg:border-x-0 lg:border-l-4 lg:border-l-black border-t-4 border-t-black overflow-hidden">
          <div className="absolute left-1/2 lg:left-auto lg:right-0 top-1/2 -translate-x-1/2 lg:-translate-x-0 -translate-y-1/2 opacity-40">
            <FaGithub size={350} color="#fff" className="h-full w-auto" />
          </div>
          <div className="flex items-center gap-x-4 z-10">
            <div className="bg-white size-2.5 lg:size-3" />
            <h2 className="text-base lg:text-lg font-bold">Github</h2>
          </div>
          <div className="mt-10 z-10">
            <p className="text-base lg:text-lg font-medium">
              Jelajahi proyek open-source saya di GitHub. Di sini, saya
              mengembangkan dan berbagi kode untuk aplikasi web, API, dan solusi
              teknologi lainnya. Ayo kolaborasi untuk menciptakan sesuatu yang
              luar biasa!
            </p>
            <br />
            <div className="flex">
              <Link
                href="https://github.com/zhekabaila"
                target="_blank"
                className="block bg-white/80 text-sm lg:text-base text-black hover:bg-white px-5 py-2 border-2 border-black font-medium"
              >
                Kunjungi
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden lg:block bg-white border-t-4 border-t-black border-x-4 border-x-black"></div>
        <div className="hidden lg:block bg-white border-l-4 border-l-black"></div>
        <div className="relative bg-[#31aa52] flex flex-col justify-center p-10 border-x-4 border-x-black border-t-4 border-t-black lg:border-t-4 overflow-hidden text-white">
          <div className="absolute left-1/2 lg:left-auto lg:right-0 top-1/2 -translate-x-1/2 lg:-translate-x-0 -translate-y-1/2 opacity-40">
            <FaMailBulk size={350} color="#fff" className="h-full w-auto" />
          </div>
          <div className="flex items-center gap-x-4 z-10">
            <div className="bg-white size-2.5 lg:size-3" />
            <h2 className="text-base lg:text-lg font-bold">Email</h2>
          </div>
          <div className="mt-10 z-10">
            <p className="text-base lg:text-lg font-medium">
              Hubungi saya langsung melalui email untuk diskusi, kolaborasi,
              atau pertanyaan lebih lanjut.
            </p>
            <br />
            <div className="flex">
              <Link
                href="mailto:zhekabaila@gmail.com"
                target="_blank"
                className="block bg-white/80 text-sm lg:text-base text-black hover:bg-white px-5 py-2 border-2 border-black font-medium"
              >
                Kunjungi
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
