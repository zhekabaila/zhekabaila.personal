import Container from '@/components/layout/container'
import Title from '@/components/ui/Title'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Me | Zheka Baila Arkan',
  description: 'Contact page',
}

export default function Contact() {
  return (
    <main>
      <Container>
        <Title text="Contact" />
      </Container>
    </main>
  )
}
