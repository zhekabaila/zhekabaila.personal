import SkillSkeleton from '@/components/ui/cards/skillSkeleton'
import { skills, SkilType } from '@/constants/skils'
import dynamic from 'next/dynamic'
import Marquee from 'react-fast-marquee'

const SkillCard = dynamic(() => import('@/components/ui/cards/skill'), {
  ssr: false,
  loading: () => <SkillSkeleton />,
})

export const Skil = () => {
  const shuffleArray = (array: SkilType[]): SkilType[] => {
    return array.sort(() => Math.random() - 0.5)
  }

  return (
    <section id="skil" className="px-36 snap-start my-60">
      <h2 className="font-abel text-[#272727] text-5xl font-bold">Skils</h2>
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
