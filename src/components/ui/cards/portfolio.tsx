import Image from 'next/image'
import Link from 'next/link'

import { TbExternalLink } from 'react-icons/tb'
import { BsGithub } from 'react-icons/bs'

interface PortofolioType {
  title: string
  description: string
  img: string
  technology: string[]
  demo: string
  code?: string
  key?: number
}

const PortfolioCard: React.FC<PortofolioType> = ({
  title,
  description,
  img,
  technology,
  demo,
  code,
  key,
}) => {
  return (
    <div
      className="flex flex-col lg:flex-row lg:odd:flex-row-reverse gap-x-10"
      key={key}
    >
      <div className="hidden lg:block basis-1/2 drop-shadow-lg">
        <div className="relative aspect-video w-full h-auto">
          <Image src={img} fill alt="" className="rounded-2xl" />
        </div>
      </div>
      <div className="relative flex flex-col justify-between gap-y-5 basis-1/2 p-4">
        <div>
          <h2 className="text-3xl font-medium text-slate-900">{title}</h2>
          <div className="block lg:hidden relative aspect-video w-full h-auto mt-4">
            <Image
              src={img}
              fill
              alt={title + 'project pict'}
              className="rounded-2xl"
            />
          </div>
          <p className="text-base font-normal text-dark mt-6">{description}</p>
          <ul className="flex propss-center flex-wrap mt-4 gap-3">
            {technology.map((item, index) => (
              <li
                key={index}
                className="bg-secondary text-base text-dark p-2 border border-dark py-1 px-4 rounded-full"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-end items-center gap-x-7">
          {code && (
            <Link href={code} target="_blank">
              <div className="flex items-center gap-x-1">
                <p className="text-base font-bold text-dark">Code</p>
                <BsGithub size={24} color="#000000" />
              </div>
            </Link>
          )}
          <Link href={demo} target="_blank">
            <div className="flex items-center gap-x-1">
              <p className="text-base font-bold text-dark">Live Demo</p>
              <TbExternalLink size={24} color="#000000" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PortfolioCard
