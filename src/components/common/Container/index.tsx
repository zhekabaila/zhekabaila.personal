import React from 'react'

const Container = ({
  children,
  margin = true,
  id,
  className
}: {
  children: React.ReactNode
  margin?: boolean
  id?: string
  className?: string
}) => {
  return (
    <section id={id} className={`${margin ? 'px-36' : 'px-0'} ${className}`}>
      {children}
    </section>
  )
}

export default Container
