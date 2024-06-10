'use client'

import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { CiMenuBurger, CiInstagram } from 'react-icons/ci'
import { VscMenu } from 'react-icons/vsc'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-[#fff8f0] px-36 py-8 border-b-2 border-b-[#272727] border-dotted transition-transform duration-300 ${
        showNavbar ? 'transform translate-y-0' : 'transform -translate-y-full'
      }`}
    >
      <button>
        <VscMenu size={32} color="#272727" />
      </button>
      <h1 className="font-abel text-center text-[#272727] text-3xl font-normal">
        ZHEKA BAILA ARKAN
      </h1>
      <Link href="https://instagram.com/zhekabailaa" target="_blank">
        <CiInstagram size={32} color="#272727" />
      </Link>
    </nav>
  )
}

export default Navbar
