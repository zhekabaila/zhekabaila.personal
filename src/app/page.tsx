import {
  Hero,
  Skil,
  About,
  Project,
} from '@/components/common/sections/landing'

const Home = () => {
  return (
    <div className="snap-y snap-mandatory">
      <Hero />
      <About />
      <Skil />
      <Project />
    </div>
  )
}

export default Home
