import { useEffect, useState } from 'react'
import Sun from '../icons/Sun'
import Moon from '../icons/Moon'
import darkMode from '../js/darkMode'

const getTheme = darkMode()
const initialTheme = getTheme?.getItem('theme') === 'dark' ? 'dark' : 'light'
const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const [theme, setTheme] = useState(initialTheme)

  useEffect(() => {
    setMounted(true)
  }, [setTheme, theme])

  if (!mounted) {
    return null
  }

  const toggleTheme = () => {
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
