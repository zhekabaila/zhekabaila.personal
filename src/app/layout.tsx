import { Space_Grotesk } from 'next/font/google'
import Navbar from '@/components/common/Navbar'
import type { Metadata } from 'next'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  style: ['normal'],
})

export const metadata: Metadata = {
  title: 'Welcome to my personal website - Zheka Baila Arkan',
  description: 'Welcome to my personal website - Zheka Baila Arkan',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.className} max-w-[2000px] mx-auto`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}
