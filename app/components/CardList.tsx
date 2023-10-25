import { Card } from './Card'
import { LoadMoreButton } from './LoadMoreButton'
import { CardData } from '../types'

const FetchData = (page: number = 1) => {
  return fetch(`https://api-demo-strapi.onrender.com/api/products?pagination[page]=${page}&populate=*`)
    .then((res) => res.json())
}

export default async function CardList() {
  const res = await FetchData(1)
  const data: CardData[] = res.data
  const page = res.meta.pagination.page

  return (
    <>
      <h2 className='text-5xl text-white font-bold mb-10'>Our Products</h2>
      <div className='grid sm:grid-cols-2 md:auto-cols-max lg:grid-cols-3  xl:grid-cols-4 gap-4 justify-center'>
        {data.map((item) => (
          <Card key={item.id} id={item.id} attributes={item.attributes} />
        ))}
      </div>
      <div>
        <LoadMoreButton page={page} />
      </div>
    </>
  )
}
