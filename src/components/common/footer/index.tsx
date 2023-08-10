import Container from '@/components/layout/container'
import Link from 'next/link'
import React from 'react'

import { BiLogoFacebook, BiLogoInstagram } from 'react-icons/bi'

const Footer = () => {
  return (
    <Container className="py-10">
      <footer className="flex justify-between items-ceter">
        <div>
          <p>&copy; {new Date().getFullYear()} Zheka Baila Arkan</p>
        </div>
        <ul className="flex items-center gap-x-7">
          <li className="flex">
            <Link href="/" className="bg-secondary p-2 rounded-full">
              <BiLogoFacebook color="#000000" size={24} />
            </Link>
          </li>
          <li className="flex">
            <Link href="/" className="bg-secondary p-2 rounded-full">
              <BiLogoInstagram color="#000000" size={24} />
            </Link>
          </li>
        </ul>
        <div>
          <p>Website by Zheka Baila Arkan</p>
        </div>
      </footer>
    </Container>
  )
}

export default Footer
