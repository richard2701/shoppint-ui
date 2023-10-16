'use client'
import React, { useState, useEffect } from 'react'
import { ThemeProvider } from 'next-themes'

type Props = {
  children: string | React.JSX.Element | React.JSX.Element[];
}

const Providers = ({ children }: Props) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }
  return (
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
      {children}
    </ThemeProvider>
  )
}

export default Providers
