'use client'

import ProjectSkeleton from '@/components/ui/cards/projectSkeleton'
import { projects } from '@/constants/projects'
import dynamic from 'next/dynamic'
import React, { useState } from 'react'

const ProjectCard = dynamic(() => import('@/components/ui/cards/project'), {
  ssr: false,
  loading: () => <ProjectSkeleton />,
})

export const Project = () => {
  const [cardCount, setCardCount] = useState(3)

  return (
    <section id="projects" className="px-4 lg:px-36 min-h-screen snap-start">
      <h2 className="text-center font-abel text-[#272727] text-4xl lg:text-5xl font-bold">
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
            key={index}
          />
        ))}
      </div>
      {cardCount < projects.length && (
        <div className="flex justify-center items-center mt-16 lg:mt-28">
          <button
            onClick={() => setCardCount((v) => v + 3)}
            className="font-abel px-9 py-3 text-xl lg:text-3xl font-medium border-2 border-black"
          >
            Load More
          </button>
        </div>
      )}
    </section>
  )
}
