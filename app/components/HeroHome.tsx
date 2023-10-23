import styles from './HeroHome.module.css'

export default function HeaderHome() {
  return (
    <div className='relative max-w-full z-[1] md:h-[470px] h-[480px]'>
      <div className='bg-black to-white text-transparent h-full w-full opacity-70 absolute z-[1]'>
        here
      </div>
      <div className='bg-cover bg-fixed bg-center bg-no-repeat shadow-lg h-full' style={{ backgroundImage: 'url(/bg-01.png)' }} />
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
