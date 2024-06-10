import ProjectSkeleton from '@/components/ui/cards/projectSkeleton'
import { projects } from '@/constants/projects'
import dynamic from 'next/dynamic'
import React from 'react'

const ProjectCard = dynamic(() => import('@/components/ui/cards/project'), {
  ssr: false,
  loading: () => <ProjectSkeleton />,
})

export const Project = () => {
  return (
    <section id="project" className="px-36 min-h-screen snap-start">
      <h2 className="text-center font-abel text-[#272727] text-5xl font-bold">
        Projects
      </h2>
      <div className="grid grid-cols-1 gap-28 mt-36">
        {projects.map((item, index) => (
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
    </section>
  )
}
