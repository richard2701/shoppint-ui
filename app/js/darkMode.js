export default function getUserfromLocalStorage() {
  if (typeof window !== 'undefined') {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia(('(prefers-color-scheme: dark)')).matches)) {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
    }
    return localStorage
  }
  return null
}
