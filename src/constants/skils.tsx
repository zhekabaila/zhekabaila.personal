import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaPhp,
  FaGit,
  FaLaravel,
} from 'react-icons/fa'
import { ReactNode } from 'react'
import { BiLogoTypescript } from 'react-icons/bi'
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri'
import { SiMysql, SiMongodb, SiUnocss, SiPrisma } from 'react-icons/si'
import Image from 'next/image'

export type SkilType = {
  name: string
  icon: ReactNode
}

export const skills: SkilType[] = [
  {
    name: 'HTML',
    icon: <FaHtml5 size={45} color="#e5532d" />,
  },
  {
    name: 'CSS',
    icon: <FaCss3Alt size={45} color="#1a74c1" />,
  },
  {
    name: 'JavaScript',
    icon: <FaJsSquare size={45} color="#d6ba2c" />,
  },
  {
    name: 'Typescript',
    icon: <BiLogoTypescript size={45} color="#2f74c0" />,
  },
  {
    name: 'PHP',
    icon: <FaPhp size={45} color="#4d588e" />,
  },
  {
    name: 'Mysql',
    icon: <SiMysql size={45} color="#085b86" />,
  },
  {
    name: 'Mongodb',
    icon: <SiMongodb size={45} color="#10a44d" />,
  },
  {
    name: 'Prisma',
    icon: <SiPrisma size={45} color="#0c354b" />,
  },
  {
    name: 'Node.js',
    icon: <FaNodeJs size={45} color="#7ab560" />,
  },
  {
    name: 'Git',
    icon: <FaGit size={45} color="#e94e31" />,
  },
  {
    name: 'React',
    icon: <FaReact size={45} color="#65dafa" />,
  },
  {
    name: 'Vite',
    icon: (
      <Image
        src="/icons/vite.svg"
        width={45}
        height={45}
        alt="vite"
        loading="lazy"
      />
    ),
  },
  {
    name: 'Next',
    icon: <RiNextjsFill size={45} color="#000000" />,
  },
  {
    name: 'Laravel',
    icon: <FaLaravel size={45} color="#ff372a" />,
  },
  {
    name: 'Tailwindcss',
    icon: <RiTailwindCssFill size={45} color="#0fb6d5" />,
  },
  {
    name: 'Uno css',
    icon: <SiUnocss size={45} color="#898989" />,
  },
]
