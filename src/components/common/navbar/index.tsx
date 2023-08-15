'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

import Container from '@/components/layout/container'
import { menus } from '@/constants/app'
import { cn } from '@/lib/utils'

const Navbar = () => {
  const pathname = usePathname()

  return (
    <Container className="pt-10">
      <nav className="flex flex-col justify-center items-center space-y-14">
        <Link href="/">
          <div className="flex flex-col justify-center items-center text-center space-y-3">
            <h1 className="text-5xl text-[#262626] font-lobster font-thin italic">
              Zheka Baila Arkan
            </h1>
            <p className="text-base font-light text-slate-600 uppercase">
              Frontend web dev
            </p>
          </div>
        </Link>
        <ul className="flex justify-center gap-10 items-center flex-wrap">
          {menus.map(({ name, link }, index: number) => (
            <li key={index}>
              <Link href={link}>
                <div
                  className={cn(
                    'text-dark text-base font-medium py-3 px-6 bg-secondary hover:bg-[#e2e2e2] transition-all ease-in-out duration-300 rounded-l-full rounded-r-full',
                    link === pathname &&
                      'text-dark bg-[#e2e2e2] outline outline-2 outline-black'
                  )}
                >
                  {name}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </Container>
  )
}

export default Navbar
