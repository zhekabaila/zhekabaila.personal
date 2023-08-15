import { Metadata } from 'next'

import Container from '@/components/layout/container'
import { portofolios } from '@/constants/app'
import PortfolioCard from '@/components/ui/cards/portfolio'
import Title from '@/components/ui/Title'

export const metadata: Metadata = {
  title: 'Portfolio | Zheka Baila Arkan',
  description: 'Portfolio page',
}

export default function Portofolio() {
  return (
    <Container>
      <Title text="Portfolio" />
      <div className="grid grid-cols-1 gap-y-16 mb-24">
        {portofolios.map((item, index: number) => (
          <PortfolioCard key={index} {...item} />
        ))}
      </div>
    </Container>
  )
}
