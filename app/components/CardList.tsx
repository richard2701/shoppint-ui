'use client'
import { Card } from './Card'
import { useEffect, useState } from 'react'
import { CardData } from '../types'
import { Loading } from './Loading'

const FetchData = async (page: number = 1) => {
  try {
    const resp = await fetch(`https://api-demo-strapi.onrender.com/api/products?pagination[page]=${page}&populate=*`)
    if (resp.ok) {
      const data = await resp.json()
      return data
    }
  } catch (error) {
    console.log(error)
  }
}

export default function CardList() {
  const [data, setData] = useState<CardData[]>([])
  const [page, setPage] = useState<number>(1)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [totalPages, setTotalPages] = useState<number>(0)

  useEffect(() => {
    setIsLoading(true)
    FetchData(1).then((resp) => {
      setData(resp.data)
      console.log(resp)
      setPage(resp.meta.pagination.page)
      setTotalPages(resp.meta.pagination.pageCount)
      setIsLoading(false)
    })
  }, [])
  function handleLoadMore() {
    setIsLoading(true)
    FetchData(page + 1).then((resp) => {
      setData([...data, ...resp.data])
      setPage(resp.meta.pagination.page)
      setTotalPages(resp.meta.pagination.pageCount)
      setIsLoading(false)
    })
  }

  return (
    <>
      <h2 className='text-5xl lg:text-8xl text-black lg:dark:text-white font-bold mb-5'>Our <span className='lg:dark:text-indigo-600 lg:text-white'>Products</span></h2>
      <div className='grid sm:grid-cols-2 md:auto-cols-max lg:grid-cols-3  xl:grid-cols-4 gap-4 justify-center'>
        {data.map((item) => (
          <Card key={item.id} id={item.id} attributes={item.attributes} />
        ))}
      </div>
      {
        isLoading
          ? <Loading />
          : totalPages > page && <div className='flex justify-center my-2'><button className='button bg-indigo-600 hover:bg-indigo-800 transition-all text-white font-bold p-2 rounded' onClick={handleLoadMore}>Load more</button></div>

      }
    </>
  )
}
