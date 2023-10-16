import CardList from './components/CardList'
export default function Home() {
  return (
    <section className='px-5 py-10 bg-white dark:bg-slate-700'>
      <div className='container mx-auto'>
        <h1 className='text-5xl text-slate-900 dark:text-white font-bold mb-3'>Card</h1>
        <CardList />
      </div>
    </section>
  )
}
