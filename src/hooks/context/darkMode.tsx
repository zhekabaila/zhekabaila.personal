'use client'

import React, { createContext, useContext, useState } from 'react'

interface DarkModeContextType {
  isDarkMode: boolean
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

interface DarkModeProviderProps {
  children: React.ReactNode
}

const darkModeContext = createContext<DarkModeContextType | undefined>(
  undefined
)

const DarkModeProvider: React.FC<DarkModeProviderProps> = ({ children }) => {
  const [isDarkMode, setDarkMode] = useState(false)

  return (
    <darkModeContext.Provider
      value={{
        isDarkMode,
        setDarkMode,
      }}
    >
      {children}
    </darkModeContext.Provider>
  )
}

const useDarkMode = () => {
  const context = useContext(darkModeContext)
  if (context === undefined) {
    throw new Error('useDarkMode must be used within a DarkModeProvider')
  }
  return context
}

export { DarkModeProvider, useDarkMode }
