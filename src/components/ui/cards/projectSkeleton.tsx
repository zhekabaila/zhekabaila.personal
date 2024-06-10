import React from 'react'

const ProjectSkeleton = (): React.ReactNode => {
  return (
    <div
      className="flex flex-col lg:flex-row-reverse lg:odd:flex-row gap-x-10 p-5 rounded-md"
      style={{
        background: 'linear-gradient(145deg, #ffffff, #e6dfd8)',
      }}
    >
      <div className="basis-1/2 aspect-video w-full h-auto drop-shadow-lg rounded-2xl bg-gray-300 animate-pulse"></div>
      <div className="relative flex flex-col justify-between gap-y-5 basis-1/2 py-4 lg:py-0 lg:p-4">
        <div>
          <div className="h-[48px] bg-gray-300 animate-pulse rounded-md w-3/4"></div>
          <div className="h-6 bg-gray-300 animate-pulse rounded-md mt-8"></div>
          <div className="h-6 bg-gray-300 animate-pulse rounded-md mt-3"></div>
          <div className="h-6 bg-gray-300 animate-pulse rounded-md mt-3 w-3/6"></div>
          <ul className="flex items-center flex-wrap mt-4 gap-3">
            <li className="h-8 w-20 bg-gray-300 animate-pulse rounded-full"></li>
            <li className="h-8 w-20 bg-gray-300 animate-pulse rounded-full"></li>
            <li className="h-8 w-20 bg-gray-300 animate-pulse rounded-full"></li>
          </ul>
        </div>
        <div className="flex justify-end items-center gap-x-7">
          <div className="h-6 w-24 bg-gray-300 animate-pulse rounded-md"></div>
          <div className="h-6 w-24 bg-gray-300 animate-pulse rounded-md"></div>
        </div>
      </div>
    </div>
  )
}

export default ProjectSkeleton
