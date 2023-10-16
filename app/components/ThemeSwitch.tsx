import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import Sun from '../icons/Sun'
import Moon from '../icons/Moon'
const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [setTheme, theme])

  if (!mounted) {
    return null
  }

  const toggleTheme = () => {
    if (theme === 'dark' || theme === 'system') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
    console.log('theme', theme)
  }
  return (
    <>
      <button onClick={toggleTheme}>
        {theme === 'dark' || theme === 'system' ? <Sun color='#db9b04' /> : <Moon color='text-blue-600 hover:text-amber-700' />}
      </button>
    </>
  )
}

export default ThemeSwitch
