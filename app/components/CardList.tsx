import { Card } from './Card'
import { LoadMoreButton } from './LoadMoreButton.tsx'
type CardData = {
  id: number,
  attributes: {
    product: string,
    price: number,
    available: number
  }
}

const FetchData = (page: number = 2) => {
  return fetch(`https://api-demo-strapi.onrender.com/api/products?pagination[page]=${page}`)
    .then((res) => res.json())
}

export default async function CardList() {
  const res = await FetchData(2)
  const data: CardData[] = res.data
  const page = res.meta.pagination.page

  return (
    <>
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
