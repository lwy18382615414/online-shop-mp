import { GoodsItem } from './index'

export type CategoryChildItem = {
  id: string
  name: string
  picture: string
  goods: Array<GoodsItem>
  parentId: null
  parentName: null
  categories: null
  brands: null
  saleProperties: null
}

export type CategoryResult = {
  id: string
  name: string
  picture: string
  imageBanners: string
  children: Array<CategoryChildItem>
}
