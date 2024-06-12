import SkillSkeleton from '@/components/ui/cards/skillSkeleton'
import { skills, SkilType } from '@/constants/skils'
import dynamic from 'next/dynamic'
import Marquee from 'react-fast-marquee'

const SkillCard = dynamic(() => import('@/components/ui/cards/skill'), {
  ssr: false,
  loading: () => <SkillSkeleton />,
})

export const Skill = () => {
  const shuffleArray = (array: SkilType[]): SkilType[] => {
    return array.sort(() => Math.random() - 0.5)
  }

  return (
    <section id="skills" className="snap-start my-60">
      <h2 className="px-4 lg:px-36 font-abel text-[#272727] text-4xl lg:text-5xl font-bold">
        Skills
      </h2>
      <Marquee className="mt-10 py-3">
        {shuffleArray([...skills]).map((item, index) => (
          <SkillCard icon={item.icon} name={item.name} key={index} />
        ))}
      </Marquee>
      <Marquee className="mt-10 py-3" direction="right">
        {shuffleArray([...skills]).map((item, index) => (
          <SkillCard icon={item.icon} name={item.name} key={index} />
        ))}
      </Marquee>
    </section>
  )
}
