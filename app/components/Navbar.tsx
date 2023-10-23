/* eslint-disable react/jsx-closing-tag-location */
'use client'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Links } from '../interface'
import ShoppingCart from '../icons/ShoppingCart'
import ThemeSwitch from './ThemeSwitch'

const links: Links[] = [
  {
    label: 'Home',
    route: '/'
  },
  {
    label: 'About',
    route: '/about'
  },
  {
    label: 'shopping-cart',
    route: '/shopping-cart'
  }
]

export function Navbar() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setIsScrolled(window.scrollY > 0)
    })
  }, [])
  const handleCollapseToggle = () => {
    document.body.classList.toggle('overflow-hidden')
    setIsCollapsed(!isCollapsed)
  }

  return (
    <nav className={`w-full flex p-4 items-center dark:border-gray-200 z-10 navbar-scroll shadow-md ${isCollapsed && 'dark:bg-gray-900 bg-white'} ${isScrolled ? 'bg-white dark:border-gray-200 dark:bg-gray-900 fixed w-full' : 'bg-transparent absolute'}`}>
      <div className='container mx-auto'>
        <div className='flex flex-wrap items-center mx-auto relative'>
          <div>
            <h2 className='dark:text-white text-black'>
              Logo
            </h2>

          </div>
          <div className='flex lg:hidden items-center justify-end lg:justify-center gap-1 flex-1'>
            <ThemeSwitch />
            <button
              type='button'
              className='menu-button inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
              onClick={handleCollapseToggle}
              aria-controls='navbar-default'
              aria-expanded={isCollapsed}
            >
              <span className='sr-only'>Open main menu</span>

              {
                isCollapsed
                  ? <svg xmlns='http://www.w3.org/2000/svg' className='icon icon-tabler icon-tabler-x' width='24' height='24' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
                    <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                    <path d='M18 6l-12 12' />
                    <path d='M6 6l12 12' />
                  </svg>
                  : <svg className='w-5 h-5' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 17 14'>
                    <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M1 1h15M1 7h15M1 13h15' />
                  </svg>
              }
            </button>
          </div>
          <div className='lg:flex flex-1 hidden left-0 top-[72px] lg:top-0 h-[calc(91vh-20px)] lg:h-auto'>
            <div className='flex flex-1 gap-4 items-center justify-center'>
              {links.map(({ label, route }) => {
                const isActive = pathname === route
                if (route !== '/shopping-cart') {
                  return (
                    <div key={route}>
                      <Link href={route} className={`block text-lg lg:bg-transparent font-bold lg:p-0 ${isActive ? 'text-blue-600 ' : 'dark:text-white hover:text-blue-600 dark:hover:text-blue-600 text-slate-400'}`}>{label}</Link>
                    </div>
                  )
                } else {
                  return null
                }
              })}
            </div>
            <div className='flex gap-4 items-center w-auto'>
              {links.map(({ label, route }) => {
                const isActive = pathname === route
                if (route === '/shopping-cart') {
                  return (
                    <div key={label} className='flex items-center'>
                      <Link href={route} className={`flex py-2 pl-3 pr-4 rounded lg:bg-transparent lg:p-0 ${isActive ? 'dark:text-blue-600' : 'dark:text-white text-slate-900'}`}>
                        <ShoppingCart color={isActive ? ' text-blue-600' : 'text-slate-900 dark:text-white hover:text-blue-600'} />
                      </Link>
                    </div>
                  )
                } else {
                  return null
                }
              })}
              <div className='hidden lg:flex items-center justify-items-center pr-0'>
                <ThemeSwitch />
              </div>
            </div>
            {/*             <ul className='font-medium h-[100%] flex flex-col p-4 lg:p-0 border lg:items-center border-gray-100 lg:rounded-lg lg:flex-row gap-4 lg:mt-0 lg:border-0 bg-w dark:bg-gray-900 bg-white dark:border-gray-700 '>
              {links.map(({ label, route }) => {
                const isActive = pathname === route
                return (
                  route === '/shopping-cart'
                    ? <li key={label} className='flex items-center'>
                      <Link href={route} className={`flex py-2 pl-3 pr-4 rounded lg:bg-transparent lg:p-0 ${isActive ? 'dark:text-blue-600' : 'text-white'}`}>
                        <ShoppingCart color={isActive ? ' text-blue-600' : 'text-slate-900 dark:text-white hover:text-blue-600'} />
                      </Link>
                    </li>
                    : <li key={route} className={`hover:bg-blue-600 hover:text-white text-slate-900 rounded ${isActive ? 'bg-blue-600 dark:text-white py-2 pl-3 pr-4 rounded' : 'py-2 pl-3 pr-4'}`}>
                      <Link href={route} className={`block rounded lg:bg-transparent hover:text-white lg:p-0 ${isActive ? 'text-white' : ' dark:text-white hover:text-white'}`}>{label}</Link>
                    </li>
                )
              })}
              <li className='hidden lg:flex items-center justify-items-center py-2 pl-3 pr-4'>
                <ThemeSwitch />
              </li>
            </ul> */}
          </div>
        </div>
      </div>
      <div className={`lg:hidden w-full p-4 flex-1 justify-between absolute dark:bg-gray-900 bg-white left-0 top-[72px] lg:top-0 h-[calc(93vh-20px)] transition-display-05 z-10 ease-in-out lg:h-auto lg:relative ${!isCollapsed && 'hidden'}`} id='navbar-default'>
        <div className='flex flex-1 gap-4 flex-col justify-center'>
          {links.map(({ label, route }) => {
            const isActive = pathname === route
            if (route !== '/shopping-cart') {
              return (
                <div key={route}>
                  <Link href={route} className={`block text-lg lg:bg-transparent font-bold lg:p-0 ${isActive ? 'text-blue-600' : 'dark:text-white hover:text-blue-600 text-slate-400'}`}>{label}</Link>
                </div>
              )
            } else {
              return null
            }
          })}
        </div>
        <div className='flex gap-4 items-center w-auto mt-4'>
          {links.map(({ label, route }) => {
            const isActive = pathname === route
            if (route === '/shopping-cart') {
              return (
                <div key={label} className='flex items-center'>
                  <Link href={route} className={`flex rounded lg:bg-transparent lg:p-0 ${isActive ? 'dark:text-blue-600' : 'dark:text-white text-slate-900'}`}>
                    <ShoppingCart color={isActive ? ' text-blue-600' : 'text-slate-900 dark:text-white hover:text-blue-600'} />
                  </Link>
                </div>
              )
            } else {
              return null
            }
          })}
          <div className='hidden lg:flex items-center justify-items-center pr-0'>
            <ThemeSwitch />
          </div>
        </div>
        {/*             <ul className='font-medium h-[100%] flex flex-col p-4 lg:p-0 border lg:items-center border-gray-100 lg:rounded-lg lg:flex-row gap-4 lg:mt-0 lg:border-0 bg-w dark:bg-gray-900 bg-white dark:border-gray-700 '>
              {links.map(({ label, route }) => {
                const isActive = pathname === route
                return (
                  route === '/shopping-cart'
                    ? <li key={label} className='flex items-center'>
                      <Link href={route} className={`flex py-2 pl-3 pr-4 rounded lg:bg-transparent lg:p-0 ${isActive ? 'dark:text-blue-600' : 'text-white'}`}>
                        <ShoppingCart color={isActive ? ' text-blue-600' : 'text-slate-900 dark:text-white hover:text-blue-600'} />
                      </Link>
                    </li>
                    : <li key={route} className={`hover:bg-blue-600 hover:text-white text-slate-900 rounded ${isActive ? 'bg-blue-600 dark:text-white py-2 pl-3 pr-4 rounded' : 'py-2 pl-3 pr-4'}`}>
                      <Link href={route} className={`block rounded lg:bg-transparent hover:text-white lg:p-0 ${isActive ? 'text-white' : ' dark:text-white hover:text-white'}`}>{label}</Link>
                    </li>
                )
              })}
              <li className='hidden lg:flex items-center justify-items-center py-2 pl-3 pr-4'>
                <ThemeSwitch />
              </li>
            </ul> */}
      </div>
    </nav>
  )
}
