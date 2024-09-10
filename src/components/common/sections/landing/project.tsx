'use client'

import ProjectSkeleton from '@/components/ui/cards/projectSkeleton'
import { projects } from '@/constants/projects'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { RiCloseLargeLine } from 'react-icons/ri'
import Image from 'next/image'

const ProjectCard = dynamic(() => import('@/components/ui/cards/project'), {
  ssr: false,
  loading: () => <ProjectSkeleton />,
})

export const Project = () => {
  const [cardCount, setCardCount] = useState<number>(3)
  const [selectedId, setSelectedId] = useState<string | null>(null)

  return (
    <section id="projects" className="px-4 lg:px-36 min-h-screen snap-start">
      <h2 className="text-center text-[#272727] text-4xl lg:text-5xl font-bold">
        Projects
      </h2>
      <div className="grid grid-cols-1 gap-28 mt-20 lg:mt-36">
        {projects.slice(0, cardCount).map((item, index) => (
          <ProjectCard
            demo={item.demo}
            title={item.title}
            description={item.description}
            img={item.img}
            code={item.code}
            technology={item.technology}
            layoutId={index.toString()}
            onClickHandler={() => setSelectedId(index.toString())}
            key={index}
          />
        ))}
      </div>
      <AnimatePresence mode="wait">
        {selectedId && (
          <motion.div
            layoutId={selectedId}
            className="fixed inset-0 z-50 bg-black/20"
          >
            <motion.div className="relative flex flex-col items-center justify-center max-w-5xl m-auto size-full">
              <div className="flex flex-col items-end h-fit bg-white p-3 rounded-[3px] gap-y-6">
                <motion.button onClick={() => setSelectedId(null)} className="">
                  <RiCloseLargeLine size={24} />
                </motion.button>
                <Image
                  src={projects[parseInt(selectedId)].img}
                  width={1000}
                  height={1000}
                  alt="vwd"
                  className="rounded-[3px] w-full h-auto aspec-video"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {cardCount < projects.length && (
        <div className="flex justify-center items-center mt-16 lg:mt-28">
          <button
            onClick={() => setCardCount((v) => v + 3)}
            className="px-9 py-3 text-xl lg:text-3xl font-medium border-2 border-black"
          >
            Load More
          </button>
        </div>
      )}
    </section>
  )
}
