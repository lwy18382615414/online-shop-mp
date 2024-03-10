import { GoodsItem } from './index'

export type SubTypeItem = {
  id: string
  title: string
  goodsItems: {
    counts: number
    pageSize: number
    pages: number
    page: number
    items: Array<GoodsItem>
  }
}

export type HotResult = {
  id: string
  title: string
  bannerPicture: string
  subTypes: Array<SubTypeItem>
}
