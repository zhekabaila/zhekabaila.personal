import React from 'react'

const SkillSkeleton = () => {
  return (
    <div
      className="flex flex-col items-center justify-center gap-2 min-w-52 p-10 ml-12 border-none animate-pulse"
      style={{
        background: 'linear-gradient(145deg, #ffffff, #e6dfd8)',
        boxShadow: '5px 5px 10px #c7c7c7, -5px -5px 10px #f9f9f9',
      }}
    >
      <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
      <div className="w-24 h-6 bg-gray-300 rounded"></div>
    </div>
  )
}

export default SkillSkeleton
