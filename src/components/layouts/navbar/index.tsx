'use client'

import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { CiMenuBurger, CiInstagram } from 'react-icons/ci'
import { FaLaptopHouse } from 'react-icons/fa'
import { VscMenu } from 'react-icons/vsc'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState<boolean>(true)
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const [lastScrollY, setLastScrollY] = useState<number>(0)

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY && !showMenu) {
        // Scrolling down
        setShowNavbar(false)
      } else {
        // Scrolling up
        setShowNavbar(true)
      }
      setLastScrollY(window.scrollY)
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar)

      // Cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar)
      }
    }
  }, [lastScrollY])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 ${
        !showMenu ? '' : 'h-screen bg-[#fff8f0]'
      }`}
    >
      <nav
        className={`flex items-center justify-between bg-[#fff8f0] px-4 lg:px-36 py-8 border-b-2 border-b-[#272727] border-dotted transition-transform duration-300 ${
          showNavbar ? 'transform translate-y-0' : 'transform -translate-y-full'
        }`}
      >
        <button onClick={() => setShowMenu((e) => !e)}>
          <VscMenu size={32} color="#272727" />
        </button>
        <h1 className="font-abel text-center text-[#272727] text-3xl font-normal">
          ZHEKA BAILA ARKAN
        </h1>
        <Link href="https://instagram.com/zhekabailaa" target="_blank">
          <CiInstagram size={32} color="#272727" />
        </Link>
      </nav>
      {showMenu && (
        <div className="flex items-center justify-center size-full bg-[#fff8f0]">
          <ul className="space-y-4">
            <li>
              <Link href="#home" onClick={() => setShowMenu(false)}>
                <p className="text-center font-abel text-6xl tracking-wide font-medium">
                  Home
                </p>
              </Link>
            </li>
            <li>
              <Link href="#about" onClick={() => setShowMenu(false)}>
                <p className="text-center font-abel text-6xl tracking-wide font-medium">
                  About
                </p>
              </Link>
            </li>
            <li>
              <Link href="#skills" onClick={() => setShowMenu(false)}>
                <p className="text-center font-abel text-6xl tracking-wide font-medium">
                  Skills
                </p>
              </Link>
            </li>
            <li>
              <Link href="#projects" onClick={() => setShowMenu(false)}>
                <p className="text-center font-abel text-6xl tracking-wide font-medium">
                  Projects
                </p>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

export default Navbar
