import './globals.css'
import dynamic from 'next/dynamic'
import type { Metadata } from 'next'
import { Abel } from 'next/font/google'
import { DarkModeProvider } from '@/hooks/context/darkMode'

const Navbar = dynamic(() => import('@/components/layouts/navbar'))
const Footer = dynamic(() => import('@/components/layouts/footer'))

const abel = Abel({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
  variable: '--font-abel',
})

const title = 'Personal Website - Zheka Baila Arkan'
const description =
  'Nama saya Zheka Baila Arkan, saya sangat tertarik dengan bidang Software Engineer sejak saya duduk di bangku SMK. Saya cukup familiar dengan bahasa pemrograman yang digunakan untuk mengembangkan sebuah website.'

export const metadata: Metadata = {
  title,
  description,
  applicationName: 'Personal Website Zheka Baila Arkan',
  authors: [
    {
      name: 'Zheka Baila Arkan',
      url: process.env.NEXT_PUBLIC_SITE_URL ?? '/',
    },
  ],
  creator: 'Zheka Baila Arkan',
  keywords: ['zheka', 'baila', 'arkan', 'zheka baila arkan'],
  robots: process.env.NEXT_PUBLIC_SITE_URL + '/robots.txt',
  openGraph: {
    title,
    description,
    url: process.env.NEXT_PUBLIC_SITE_URL ?? '/',
    type: 'website',
    locale: 'id_ID',
    siteName: 'Personal Website Zheka Baila Arkan',
    emails: 'zhekabaila@gmail.com',
    countryName: 'Indonesia',
    images: '/images/thumbnail.jpg',
  },
  appLinks: {
    web: {
      url: process.env.NEXT_PUBLIC_SITE_URL ?? '/',
    },
  },
  twitter: {
    title,
    description,
    site: process.env.NEXT_PUBLIC_SITE_URL ?? '/',
    card: 'summary_large_image',
    creator: 'Zheka Baila Arkan',
    images: '/images/thumbnail.jpg',
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL + '/',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <DarkModeProvider>
      <html lang="en" className="light">
        <body className={`${abel.className} bg-[#fff8f0] dark:bg-dark`}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </DarkModeProvider>
  )
}
