'use client'

import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { usePathname } from 'next/navigation'
import { menus } from '@/constant/menu'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Footer = () => {
  const pathname = usePathname()

  return (
    <footer className="flex flex-col border-x-4 border-x-black border-t-4 border-t-black bg-white p-6 lg:p-14 mx-4 lg:mx-36">
      <div className="flex flex-col lg:flex-row gap-y-10 lg:justify-between lg:items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-x-4">
            <Image
              src="/icons/logo.png"
              alt="Logo"
              width={100}
              height={100}
              loading="lazy"
              className="size-7"
            />
            <h2 className="font-semibold text-lg text-black">zhekabaila</h2>
          </Link>
        </div>

        <ul className="flex flex-col lg:flex-row lg:items-center">
          <li className="w-full lg:w-1 h-1 lg:h-14 bg-black"></li>
          {menus.map(({ href, label }, index) => (
            <React.Fragment key={index}>
              <li className="h-full">
                <Link
                  href={href}
                  className={`flex items-center justify-center w-full h-14 font-medium border-x-4 border-x-black text-black ${
                    pathname === href ? 'bg-stabilo' : ''
                  } hover:bg-stabilo`}
                >
                  {label}
                </Link>
              </li>
              <li className="w-full lg:w-1 h-1 lg:h-14 bg-black"></li>
            </React.Fragment>
          ))}
        </ul>

        <ul className="flex items-center justify-around gap-x-4">
          <li>
            <Link
              href="https://instagram.com/zhekabailaa"
              target="_blank"
              className="block bg-black p-2 rounded"
            >
              <FaInstagram size={22} color="#ffffff" />
            </Link>
          </li>
          <li>
            <Link
              href="https://instagram.com/zhekabailaa"
              target="_blank"
              className="block bg-black p-2 rounded"
            >
              <FaLinkedin size={22} color="#ffffff" />
            </Link>
          </li>
          <li>
            <Link
              href="https://instagram.com/zhekabailaa"
              target="_blank"
              className="block bg-black p-2 rounded"
            >
              <FaGithub size={22} color="#ffffff" />
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-center pt-8 mt-10 border-t-4 border-t-black">
        <p className="text-lg font-medium text-black">
          &copy; 2024 Zheka Baila Arkan
        </p>
      </div>
    </footer>
  )
}

export default Footer
