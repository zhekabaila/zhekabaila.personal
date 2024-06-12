import {
  Hero,
  Skill,
  About,
  Project,
} from '@/components/common/sections/landing'

const Home = () => {
  return (
    <div className="snap-y snap-mandatory">
      <Hero />
      <About />
      <Skill />
      <Project />
    </div>
  )
}

export default Home
