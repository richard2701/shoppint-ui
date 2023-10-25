export default function Glass({ color, width, height }: { color: string, width: string, height: string }) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' className={`icon icon-tabler icon-tabler-glass ${color}`} width={width} height={height} viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M8 21l8 0' />
      <path d='M12 15l0 6' />
      <path d='M17 3l1 7c0 3.012 -2.686 5 -6 5s-6 -1.988 -6 -5l1 -7h10z' />
    </svg>
  )
}
