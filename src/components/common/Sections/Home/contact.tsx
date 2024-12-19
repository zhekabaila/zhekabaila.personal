import Link from 'next/link'

export const HomeContact = () => {
  return (
    <section
      id="contact"
      className="border-4 border-black my-10 py-14 bg-stabilo px-6 mx-4 lg:mx-36"
    >
      <div className="flex flex-col justify-center items-center">
        <div className="flex items-center gap-x-4">
          <h2 className="text-4xl lg:text-7xl font-bold">Get In Touch</h2>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-normal lg:items-center w-full gap-6 mt-10">
          <Link
            href="https://instagram.com/zhekabailaa"
            target="_blank"
            className="block bg-white hover:bg-stabilo px-5 py-2 border-2 border-black font-medium shadow-button"
          >
            Instagtam Saya
          </Link>
          <Link
            href="/contact"
            className="block bg-white hover:bg-stabilo px-5 py-2 border-2 border-black font-medium shadow-button"
          >
            Lihat Selengkapnya
          </Link>
        </div>
      </div>
    </section>
  )
}
