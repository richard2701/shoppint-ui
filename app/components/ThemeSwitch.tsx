import { useEffect, useState } from 'react'
import Sun from '../icons/Sun'
import Moon from '../icons/Moon'

const getTheme = typeof window !== 'undefined' ? localStorage : null
console.log(getTheme)
const initialTheme = getTheme?.getItem('theme') === 'dark' ? 'dark' : 'light'
const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const [theme, setTheme] = useState(initialTheme)

  useEffect(() => {
    setMounted(true)
    if (theme === 'dark' || theme === 'system') {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [theme])

  if (!mounted) {
    return null
  }

  const toggleTheme = () => {
    console.log(theme)
    if (theme === 'dark' || theme === 'system') {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      setTheme('light')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      setTheme('dark')
    }
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
