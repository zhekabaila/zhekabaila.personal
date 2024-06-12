import React, { HTMLAttributes } from 'react'

interface SkillCard extends HTMLAttributes<HTMLDivElement> {
  icon: React.ReactNode
  name: string
}

const SkillCard: React.FC<SkillCard> = ({ name, icon, ...props }) => {
  return (
    <div
      {...props}
      className="flex flex-col items-center justify-center gap-2 min-w-36 lg:min-w-52 p-10 ml-12 border-none"
      style={{
        background: 'linear-gradient(145deg, #ffffff, #e6dfd8)',
        boxShadow: '5px 5px 10px #c7c7c7, -5px -5px 10px #f9f9f9',
      }}
    >
      <div className="size-[45px]">{icon}</div>
      <h3 className="font-abel text-xl lg:text-2xl font-semibold">{name}</h3>
    </div>
  )
}

export default SkillCard
