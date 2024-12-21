'use client'
import { usePathname } from 'next/navigation'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { menus } from '@/constant/menu'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => {
    setIsMenuOpen((c) => !c)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 max-w-[2000px] mx-auto">
      <div className="relative z-50 flex items-center justify-between bg-white border-b-4 border-b-black w-full px-4 lg:px-36">
        <div className="flex items-center">
          <div className="w-1 h-14 bg-black"></div>
          <Link
            href="/"
            className="flex items-center gap-x-4 px-4 lg:px-14 lg:h-14 text-black hover:bg-black hover:text-white"
          >
            <Image
              src="/icons/logo.png"
              alt="Logo"
              width={100}
              height={100}
              loading="lazy"
              className="size-6 lg:size-7"
            />
            <h1 className="font-semibold text-lg">zhekabaila</h1>
          </Link>
          <div className="w-1 h-14 bg-black"></div>
        </div>

        <button
          type="button"
          onClick={toggleMenu}
          className="w-28 z-50 bg-white flex lg:hidden items-center justify-between gap-x-4 transition-all duration-500 ease-in-out delay-700"
        >
          <div className="w-1 h-14 bg-black"></div>
          {isMenuOpen ? (
            <HiX size={24} color="#000000" />
          ) : (
            <HiMenuAlt4 size={24} color="#000000" />
          )}
          <div className="w-1 h-14 bg-black"></div>
        </button>

        <ul
          className={`${
            isMenuOpen ? 'top-[55px]' : '-top-96'
          } flex absolute z-40 right-4 lg:static lg:flex flex-col lg:flex-row lg:items-center transition-all duration-500 ease-in-out`}
        >
          <li className="w-full lg:w-1 h-1 lg:h-14 bg-black"></li>
          {menus.map(({ href, label }, index) => (
            <React.Fragment key={index}>
              <li className="h-full">
                <Link
                  href={href}
                  className={`flex items-center justify-center w-28 h-14 font-medium border-x-4 border-x-black lg:border-x-0 text-black ${
                    pathname === href ? 'bg-stabilo' : 'bg-white'
                  } hover:bg-stabilo`}
                >
                  {label}
                </Link>
              </li>
              <li className="w-full lg:w-1 h-1 lg:h-14 bg-black"></li>
            </React.Fragment>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
