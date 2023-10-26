import Link from 'next/link'
import Image from 'next/image'
import Heart from '../icons/Heart'
import { CardData, ImageCover } from '../types'

export function Card({ id, attributes }: CardData) {
  const { product, price, image } = attributes
  const { data } = image as ImageCover
  const urlImage = data && data[0].attributes.url ? data[0].attributes.url : 'https://via.placeholder.com/500x500.png?text=No+Image'
  return (

    <article className='card-product max-w-sm relative bg-white rounded-lg shadow dark:bg-gray-800 flex flex-col hover:-translate-y-1 transition-all hover:shadow-lg overflow-hidden'>
      <button className='absolute z-40 right-2 rounded-lg top-2 p-2 h-10 lg:bg-transparent has-tooltip transition-all hover:w-max hover:right-[11px] hover:top-4 flex justify-center items-center hover:bg-rose-300'>
        <span className='tooltip hidden rounded text- p-1 text-white font-semibold whitespace-nowrap'>add wish list</span>
        <Heart color='text-red-600 hover:fill-red-600' width='30' height='30' />
      </button>
      <div className='w-full mx-full overflow-hidden'>
        <Link href={`/${id}`} className='block overflow-hidden rounded-t-lg'>
          <Image
            src={urlImage}
            width={500}
            height={200}
            alt={product}
            blurDataURL='data:image/jpeg...'
            className='object-cover w-full object-center transition-transform'
          />
        </Link>
      </div>

      <div className='p-5 flex flex-1 flex-col justify-between'>
        <Link href={`/${id}`} className='hover:text-blue-700 dark:hover:text-blue-700 text-gray-900 dark:text-white'>
          <h5 className='mb-2 line-clamp-2 h-[35px] text-2xl font-bold tracking-tight '>{product}</h5>
        </Link>
        <div className='flex w-full justify-between'>
          <Link href={`/${id}`} className='flex items-center'>
            <span className='text-gray-600 dark:text-white text-base font-bold'>
              ${price}
            </span>
          </Link>
          <Link href={`/${id}`} className='inline-flex items-center px-3 py-2 text-sm font-medium text-center dark:hover:text-blue-700 text-slate-700 dark:text-white focus:outline-none focus:ring-blue-300 hover:text-blue-700 dark:focus:ring-blue-800'>
            Read more
            <svg className='w-3.5 h-3.5 ml-2' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 14 10'>
              <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M1 5h12m0 0L9 1m4 4L9 9' />
            </svg>
          </Link>
        </div>
      </div>
    </article>

  )
}
