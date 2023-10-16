import Image from 'next/image'
import fruit from '../../public/fruit.svg'
function Test() {
  return (
    <Image src={fruit} width={200} height={350} alt='hola' />
  )
}

export default Test
