'use client'

import { usePathname } from 'next/navigation'
import { menus } from '@/constant/menu'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 max-w-[2000px] mx-auto">
      <div className="flex items-center justify-between bg-white border-b-4 border-b-black w-full px-36">
        <div className="flex items-center">
          <div className="w-1 h-14 bg-black"></div>
          <Link
            href="/"
            className="flex items-center gap-x-4 px-14 h-14 hover:bg-black hover:text-white"
          >
            <Image
              src="/icons/logo.png"
              alt="Logo"
              width={100}
              height={100}
              loading="lazy"
              className="size-7"
            />
            <h1 className="font-semibold text-lg">zhekabaila</h1>
          </Link>
          <div className="w-1 h-14 bg-black"></div>
        </div>
        <ul className="flex items-center">
          <li className="w-1 h-14 bg-black"></li>
          {menus.map(({ href, label }, index) => (
            <React.Fragment key={index}>
              <li className="h-full">
                <Link
                  href={href}
                  className={`flex items-center justify-center w-28 h-14 font-medium ${
                    pathname === href ? 'bg-stabilo' : ''
                  } hover:bg-stabilo`}
                >
                  {label}
                </Link>
              </li>
              <li className="w-1 h-14 bg-black"></li>
            </React.Fragment>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
