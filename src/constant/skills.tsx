import { SiMysql, SiMongodb, SiUnocss, SiPrisma, SiVite } from 'react-icons/si'
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri'
import { BiLogoTypescript } from 'react-icons/bi'
import { ReactNode } from 'react'
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

export type SkilType = {
  name: string
  icon: ReactNode
}

export const skills: SkilType[] = [
  {
    name: 'HTML',
    icon: <FaHtml5 size={25} color="#e5532d" />,
  },
  {
    name: 'CSS',
    icon: <FaCss3Alt size={25} color="#1a74c1" />,
  },
  {
    name: 'JavaScript',
    icon: <FaJsSquare size={25} color="#d6ba2c" />,
  },
  {
    name: 'Typescript',
    icon: <BiLogoTypescript size={25} color="#2f74c0" />,
  },
  {
    name: 'PHP',
    icon: <FaPhp size={25} color="#4d588e" />,
  },
  {
    name: 'Mysql',
    icon: <SiMysql size={25} color="#085b86" />,
  },
  {
    name: 'Mongodb',
    icon: <SiMongodb size={25} color="#10a44d" />,
  },
  {
    name: 'Prisma',
    icon: <SiPrisma size={25} color="#0c354b" />,
  },
  {
    name: 'Node.js',
    icon: <FaNodeJs size={25} color="#7ab560" />,
  },
  {
    name: 'Git',
    icon: <FaGit size={25} color="#e94e31" />,
  },
  {
    name: 'React',
    icon: <FaReact size={25} color="#65dafa" />,
  },
  {
    name: 'Vite',
    icon: <SiVite size={25} color="#000000" />,
  },
  {
    name: 'Next',
    icon: <RiNextjsFill size={25} color="#000000" />,
  },
  {
    name: 'Laravel',
    icon: <FaLaravel size={25} color="#ff372a" />,
  },
  {
    name: 'Tailwindcss',
    icon: <RiTailwindCssFill size={25} color="#0fb6d5" />,
  },
  {
    name: 'Uno css',
    icon: <SiUnocss size={25} color="#898989" />,
  },
]
