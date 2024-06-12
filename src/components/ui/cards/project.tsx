import Image from 'next/image'
import Link from 'next/link'

import { TbExternalLink } from 'react-icons/tb'
import { BsGithub } from 'react-icons/bs'
import { FC, HTMLAttributes } from 'react'

interface ProjectCardProps extends HTMLAttributes<HTMLDivElement> {
  title: string
  description: string
  img: string
  technology: string[]
  demo: string
  code?: string
}

const ProjectCard: FC<ProjectCardProps> = ({
  title,
  description,
  img,
  technology,
  demo,
  code,
  ...props
}) => {
  return (
    <div
      className="flex flex-col lg:flex-row lg:odd:flex-row-reverse gap-x-10 p-5 rounded-md bg-left-light shadow-odd"
      {...props}
    >
      <div className="basis-1/2 drop-shadow-lg rounded-[3px]">
        <div className="relative aspect-video w-full h-auto">
          <Image
            src={img}
            fill
            alt=""
            className="rounded-[3px]"
            loading="lazy"
          />
        </div>
      </div>
      <div className="relative flex flex-col justify-between gap-y-5 basis-1/2 py-4 lg:py-0 lg:p-4">
        <div>
          <h2 className="text-4xl lg:text-5xl font-abel font-medium text-slate-900 mt-4 lg:mt-0">
            {title}
          </h2>
          <p className="text-xl lg:text-2xl font-abel font-normal text-dark mt-3 lg:mt-6">
            {description}
          </p>
          <ul className="flex propss-center flex-wrap mt-4 gap-3">
            {technology.map((item, index) => (
              <li
                key={index}
                className="bg-secondary font-abel text-sm lg:text-base text-dark p-2 border border-dark py-1 px-4 rounded-full"
                style={{
                  boxShadow: '2px 2px 0px #c7c7c7, -2px -2px 0px #f9f9f9',
                }}
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
                <p className="font-abel text-sm lg:text-base font-bold text-dark">
                  Code
                </p>
                <BsGithub
                  size={24}
                  color="#000000"
                  className="size-5 lg:size-6"
                />
              </div>
            </Link>
          )}
          {demo && (
            <Link href={demo} target="_blank">
              <div className="flex items-center gap-x-1">
                <p className="font-abel text-sm lg:text-base font-bold text-dark">
                  Live Demo
                </p>
                <TbExternalLink
                  size={24}
                  color="#000000"
                  className="size-5 lg:size-6"
                />
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
