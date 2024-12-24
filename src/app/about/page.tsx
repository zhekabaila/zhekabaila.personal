import Image from 'next/image'
import Marquee from 'react-fast-marquee'
import style from '@/styles/timeline.module.css'
import { timeline } from '@/constant/timeline'
import { skills, SkilType } from '@/constant/skills'
import Link from 'next/link'
import { certificates } from '@/constant/certificates'

const About = () => {
  const shuffleArray = (array: SkilType[]): SkilType[] => {
    return array.sort(() => Math.random() - 0.5)
  }
  return (
    <>
      <section className="grid grid-cols-1 lg:grid-cols-2 mx-4 lg:mx-36 py-10 mt-16">
        <div className="flex flex-col justify-center lg:pr-10">
          <div className="flex items-center gap-x-4">
            <div className="bg-black size-3 rounded-full" />
            <h2 className="text-lg font-bold">About</h2>
          </div>
          <p className="mt-6 text-lg">
            Hi! I am Bayu Setiawan, a seasoned software engineer with a deep
            passion for creating elegant and efficient solutions through code.
            With a strong foundation in JavaScript and TypeScript, along with a
            comprehensive understanding of various frontend libraries and
            frameworks, I heve been navigating the ever-evolving landscape of
            web development with enthusiasm and dedication. Currently, reside in
            Jakarta, Indonesia 🇮🇩.
            <br />
            <br />
            As a fast learner and adaptive thinker, I thrive in dynamic
            environments where innovation is the driving force. My collaborative
            nature allows me to seamlessly integrate with teams, contributing
            not only my technical prowess but also a humble attitude that values
            every members input.
            <br />
            <br />
            This blog is my platform to share insights, experiences, and
            discoveries from my journey as a software engineer. Join me as we
            delve into the ever-exciting realm of technology, where each line of
            code has the potential to shape the digital landscape in remarkable
            ways. <br />
            <br />
            Thank you for visiting, and I look forward to embarking on this
            knowledge-sharing adventure
          </p>
        </div>
        <div className="hidden lg:block pl-10 border-l-4 border-l-black">
          <Image
            src="/images/zhekabaila-square.jpg"
            alt="Zheka Baila Arkan Picture"
            width={1000}
            height={1000}
            quality={100}
            loading="lazy"
            className="size-full object-center object-cover aspect-square grayscale-[0]"
          />
        </div>
      </section>
      <section className="mx-4 lg:mx-36 py-10 mt-16">
        <div>
          <div className="flex items-center gap-x-4">
            <div className="bg-black size-3 rounded-full" />
            <h2 className="text-lg font-bold">Linimasa</h2>
          </div>
        </div>
        <div className="relative mt-10">
          <Image
            src="/icons/timeline-arrow-right.svg"
            alt="Arrow Icon"
            width={27}
            height={27}
            className="absolute size-[27px] rotate-90 lg:rotate-0 bg-no-repeat z-10 bg-center bg-contain -bottom-[10px] lg:bottom-auto lg:top-[177px] -left-[12px] lg:left-auto lg:-right-2.5"
          />
          <div className={style.TimelineContainer}>
            {timeline.map(({ title, date }, i: number) => (
              <div className={style.Item} key={i + 1}>
                <div className={style.ItemContent}>
                  <h3 className={style.Title}>{title}</h3>
                  <p className={style.Desc}>{date}</p>
                </div>
                <span className={style.Bullet} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-4 lg:mx-36 py-10 mt-16">
        <div>
          <div className="flex items-center gap-x-4">
            <div className="bg-black size-3 rounded-full" />
            <h2 className="text-lg font-bold">SKills</h2>
          </div>
        </div>
        <Marquee className="py-3 mt-5" direction="left">
          {shuffleArray([...skills]).map((item: SkilType, index) => (
            <div
              key={index}
              className="ml-6 w-44 flex items-center justify-center gap-x-4 px-6 py-2 bg-white border border-black shadow-button hover:bg-stabilo"
            >
              {item.icon}
              <p>{item.name}</p>
            </div>
          ))}
        </Marquee>
        <Marquee className="py-3 mt-5" direction="right">
          {shuffleArray([...skills]).map((item: SkilType, index) => (
            <div
              key={index}
              className="ml-6 w-44 flex items-center justify-center gap-x-4 px-6 py-2 bg-white border border-black shadow-button hover:bg-stabilo"
            >
              {item.icon}
              <p>{item.name}</p>
            </div>
          ))}
        </Marquee>
      </section>
      <section className="mx-4 lg:mx-36 py-10 my-16">
        <div>
          <div className="flex items-center gap-x-4">
            <div className="bg-black size-3 rounded-full" />
            <h2 className="text-lg font-bold">Certificates</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mt-8">
          {certificates.map((item, index) => (
            <div key={index}>
              <div className="group relative flex flex-col items-center justify-center aspect-[6/4]">
                <Link
                  href={item.link}
                  target="_blank"
                  className="flex justify-center items-center absolute inset-0 bg-transparent group-hover:bg-slate-500/80 text-transparent group-hover:text-white font-medium transition-all ease-in-out duration-300"
                >
                  Tekan untuk melihat sertifikat
                </Link>
                <Image
                  src={item.img}
                  width={500}
                  height={400}
                  alt={item.title + ' Image'}
                  className="w-full h-auto aspect-auto object-center object-cover"
                />
              </div>
              <p className="text-center text-sm mt-2">{item.title}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="border-4 border-black my-16 py-14 bg-white px-6 mx-4 lg:mx-36"
      >
        <div className="flex flex-col justify-center items-center">
          <div className="flex items-center gap-x-4">
            <h2 className="text-4xl lg:text-7xl font-bold">
              Mari lihat portofolio saya
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center w-full gap-6 mt-10">
            <Link
              href="/portfolio"
              className="block bg-white hover:bg-stabilo px-5 py-2 border-2 border-black font-medium shadow-button"
            >
              Lihat
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
