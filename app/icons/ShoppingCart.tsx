interface Props {
  color?: string;
}
function ShoppingCart({ color = '#000' }: Props) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' className={`${color} icon icon-tabler icon-tabler-shopping-cart`} width='24' height='24' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
      <path d='M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
      <path d='M17 17h-11v-14h-2' />
      <path d='M6 5l14 1l-1 7h-13' />
    </svg>
  )
}

export default ShoppingCart