import React from 'react'

const Container = ({
  children,
  margin,
}: {
  children: React.ReactNode
  margin: boolean
}) => {
  return <main className={`${margin ? 'mt-1' : 'mt-0'} px-36`}>{children}</main>
}

export default Container
