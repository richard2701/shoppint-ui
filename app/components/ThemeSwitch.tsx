'use client'

import { useTheme } from 'next-themes'
import Sun from '../icons/Sun'
import Moon from '../icons/Moon'

const ThemeSwitch = () => {
  const { systemTheme, theme, setTheme } = useTheme()

  const renderThemeChanger = () => {
    const currentTheme = theme === 'system' ? systemTheme : theme

    if (currentTheme === 'dark') {
      return (
        <button onClick={() =>
          setTheme('light')}
        >
          <Sun
            color='#db9b04'
          />
        </button>
      )
    } else {
      return (
        <button onClick={() =>
          setTheme('dark')}
        >
          <Moon
            color='text-blue-600 hover:text-amber-700'
          />
        </button>
      )
    }
  }
  return (
    <>
      {renderThemeChanger()}
    </>
  )
}

export default ThemeSwitch
