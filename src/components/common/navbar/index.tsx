'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

import Container from '@/components/layout/container'
import { menus } from '@/constants/app'
import { cn } from '@/lib/utils'

const Navbar = () => {
  const pathname = usePathname()

  return (
    <header className="py-7 sticky top-0 left-0 bg-white z-50">
      <Container>
        <nav className="flex items-center gap-x-16">
          <Link href="/">
            <h1 className="text-4xl text-[#262626] font-lobster font-extrabold">
              zhekabaila
            </h1>
          </Link>
          <ul className="flex justify-center gap-10 items-center flex-wrap">
            {menus.map(({ name, link }, index: number) => (
              <li key={index}>
                <Link href={link}>
                  <div
                    className={cn(
                      'text-dark text-base font-medium transition-all ease-in-out duration-300',
                      link === pathname && 'text-black'
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
    </header>
  )
}

export default Navbar
