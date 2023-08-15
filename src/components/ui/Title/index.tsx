import React from 'react'

const Title = ({ text }: { text: string }) => {
  return (
    <div className="flex items-center mt-14 mb-24 gap-x-4">
      <h1 className="text-4xl font-lobster font-semibold text-black">{text}</h1>
      <div className="flex-1 h-[3px] bg-black" />
    </div>
  )
}

export default Title
