import Glass from '../icons/Glass'
import Discount from '../icons/Discount'
import Shipping from '../icons/Shipping'
const initialData = [
  {
    title: 'Execelent products',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    icon: <Glass color='text-indigo-600' width='60' height='60' />
  },
  {
    title: 'Prices for everyone',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    icon: <Discount color='text-indigo-600' width='60' height='60' />
  },
  {
    title: 'Free shipping',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    icon: <Shipping color='text-indigo-600' width='60' height='60' />
  }
]
export default function IconsColumns() {
  return (
    <>
      <h2 className='text-5xl lg:text-8xl text-center text-black font-bold mb-5'>Our <span className='text-indigo-600'>Services</span></h2>
      <div className='flex gap-4 flex-wrap flex-col lg:flex-row'>
        {
          initialData.map((item, index) => (
            <div key={index} className='card flex-1 p-5'>
              {item.icon}
              <h3 className='text-slate-600 dark:text-white font-semibold text-2xl my-2'>
                {item.title}
              </h3>
              <p className='text-slate-600 font-light text-lg dark:text-white'>{item.description}</p>
            </div>
          ))
        }
      </div>
    </>

  )
}
