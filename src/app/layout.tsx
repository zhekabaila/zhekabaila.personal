import type { Metadata } from 'next'
import { Poppins, Abel } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layouts/navbar'
import Footer from '@/components/layouts/footer'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
})

const abel = Abel({
  weight: '400',
  style: 'normal',
  variable: '--font-abel',
  subsets: ['latin'],
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
    <html lang="en">
      <body className={`${abel.variable} ${poppins.className} bg-[#fff8f0]`}>
        <Navbar />
        <main className="mt-56">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
