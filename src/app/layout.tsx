import { Montserrat, Lobster_Two } from 'next/font/google'
import type { Metadata } from 'next'

import '@/shared/styles/main.css'

import Footer from '@/components/common/footer'
import Navbar from '@/components/common/navbar'

export const metadata: Metadata = {
  title: 'Zheka Baila Arkan',
  description: 'Zheka Baila Arkan',
}

const lobsterTwo = Lobster_Two({
  subsets: ['latin'],
  weight: '400',
  style: 'normal',
  variable: '--font-lobster',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: '400',
  style: 'normal',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} ${lobsterTwo.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
