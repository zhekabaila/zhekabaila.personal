import {
  HomePortfolio,
  HomeRoadmap,
  HomeAbout,
  HomeHero,
  HomeContact,
} from '@/components/common/Sections/Home'

const Home = () => {
  return (
    <>
      <HomeHero />
      <HomeAbout />
      <HomePortfolio />
      <HomeRoadmap />
      <HomeContact />
    </>
  )
}

export default Home
