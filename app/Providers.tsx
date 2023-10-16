'use client'
import { ThemeProvider } from 'next-themes'
import React, { useEffect, useState } from 'react'

const Providers = ({ children }: { children: React.ReactNode }) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <>{children}</>
  }

  return (
    <ThemeProvider enableSystem attribute='class'>
      {children}
    </ThemeProvider>
  )
}

export default Providers
