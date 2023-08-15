import Container from '@/components/layout/container'
import Title from '@/components/ui/Title'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Me | Zheka Baila Arkan',
  description: 'About page',
}

export default function About() {
  return (
    <main>
      <Container>
        <Title text="About Me" />
        <section className="flex">
          <div className="flex flex-col basis-2/3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            sint, praesentium pariatur maxime soluta laboriosam dolore velit
            tempore! Reprehenderit deleniti quidem pariatur accusantium quas quo
            qui iste, doloremque excepturi eos?
          </div>
          <div className="flex flex-col basis-1/3">
            <div className="w-full h-full bg-slate-600">j</div>
          </div>
        </section>
      </Container>
    </main>
  )
}
