export type formats = {
  url: string | null | undefined
  formats: {
    thumbnail: {
      ext: string
      url: string | null | undefined
      hash: string
      mime: string
      name: string
      path: any
      size: number
      width: number | null | undefined
      height: number | null | undefined
    }
  }
}

export type ImageCover = {
  data: [
    attributes: {
      [x: string]: formats
    }
  ]
}

export type CardData = {
  id: number,
  attributes: {
    product: string
    price: number
    status: string
    available: number
    createdAt: string
    updatedAt: string
    publishedAt: string
    locale: string
    slug?: string
    image: ImageCover
  }
}
