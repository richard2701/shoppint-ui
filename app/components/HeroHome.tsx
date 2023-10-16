'use client'
import styles from './HeroHome.module.css'

export default function HeaderHome() {
  return (
    <div className='relative max-w-full z-[1]'>
      <div className='bg-black to-white text-transparent h-full w-full opacity-70 absolute z-[1]'>
        here
      </div>
      <picture className='z-[1]'>
        <img
          src='/bg-01.png'
          srcSet='
          /bg-01.png 480w,
          /bg-01.png 800w,
          /bg-01.png 1200w'
          height='64'
          alt='Landscape picture'
          sizes='(max-width: 600px) 480px, (max-width: 960px) 800px, 1200px'
          className='object-cover w-full lg:h-96'
        />
      </picture>
      <div className='absolute top-1/2 left-1/2 transform  -translate-x-1/2 -translate-y-1/2 z-[2] w-full'>
        <div className='container mx-auto'>
          <div className={`${styles.slideInLeft} flex justify-center items-center flex-col gap-2 w-full`}>
            <h1 className='text-4xl text-white'>Our Ecomerce</h1>
            <p className='text-white'>Visit our products</p>
          </div>
        </div>
      </div>
    </div>
  )
}
