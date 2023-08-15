import { Metadata } from 'next'

import LandingHero from '@/components/common/sections/landing/hero'

export const metadata: Metadata = {
  title: 'Home | Zheka Baila Arkan',
  description: 'Home page',
}

export default function Home() {
  return (
    <main>
      <LandingHero />
    </main>
  )
}
