import { portfolios } from '@/constant/portfolios'
import Image from 'next/image'
import Link from 'next/link'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

const Portfolio = () => {
  return (
    <>
      <section className="mx-4 lg:mx-36 py-10 mt-16">
        <div className="flex items-center gap-x-4">
          <div className="bg-black size-2.5 lg:size-3" />
          <h2 className="text-base lg:text-lg font-bold">My Projects</h2>
        </div>
        <div className="grid grid-cols-1 gap-10 mt-20">
          {portfolios.map((item, index) => (
            <div
              key={index}
              className="flex flex-col lg:odd:flex-row lg:even:flex-row-reverse items-center justify-center border-4 border-black"
            >
              <div className="basis-1/2">
                <Image src={item.img} alt="" width={1000} height={1000} />
              </div>
              <div className="basis-1/2 w-full h-full flex flex-col justify-between gap-6 p-6 lg:p-10">
                <div>
                  <h3 className="text-base lg:text-lg font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-base lg:text-lg mt-4">
                    {item.description}
                  </p>
                  <div className="flex items-center flex-wrap gap-4 mt-6 lg:mt-4">
                    {item.technology.map((tech, index) => (
                      <div
                        className="px-3 py-1 bg-white border border-black rounded-full"
                        key={index}
                      >
                        <p className="text-sm">{tech}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center lg:justify-end gap-x-6">
                  {item.code && (
                    <Link
                      href={item.code}
                      target="_blank"
                      className="flex items-center gap-x-4"
                    >
                      <FaGithub />
                      <p className="text-sm lg:text-base">Source Code</p>
                    </Link>
                  )}
                  {item.demo && (
                    <Link
                      href={item.demo}
                      target="_blank"
                      className="flex items-center gap-x-4"
                    >
                      <FaExternalLinkAlt />
                      <p className="text-sm lg:text-base">Live Demo</p>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Portfolio
