export type Brand = {
  id: string
  name: string
  nameEn: string
  picture: string
  logo: string
  type: null
  desc: null
  place: null
}

export type SpecsItem = {
  id: string
  name: string
  values: Array<{
    name: string
    picture: string
    available: boolean
    desc: string
  }>
}

export type SkuItem = {
  id: string
  skuCode: string
  price: string
  oldPrice: string
  inventory: number
  picture: string
  specs: Array<{
    name: string
    valueName: string
  }>
}

export type CategoryItem = {
  id: string
  name: string
  layer: number
  parent: {
    id: string
    name: string
    layer: number
    parent: null
  }
}

export type SimilarProductItem = {
  id: string
  picture: string
  name: string
  price: string
  desc: string
  orderNum: number
  discount: null
}

export type HotByDayItem = {
  id: string
  picture: string
  name: string
  price: string
  desc: string
  orderNum: number
  discount: null
}

export type GoodsResult = {
  id: string
  name: string // 商品名称
  spuCode: string //spu编码
  desc: string
  price: string // 当前价格
  oldPrice: string //原价
  discount: number //折扣
  inventory: number //库存
  brand: Brand // 品牌信息
  salesCount: number // 销量
  commentCount: number //评价数量
  collectCount: number //收藏数量
  videoScale: number // 主图视频比例
  mainPictures: Array<string>
  mainVideos: Array<string> // 主图图片集合
  specs: Array<SpecsItem> //可选规格集合备注
  skus: Array<SkuItem> // sku 集合
  categories: Array<CategoryItem>
  details: {
    properties: Array<{
      name: string
      value: string
    }>
    pictures: Array<string>
  }
  isPreSale: boolean
  isCollect: null
  recommends: null
  userAddresses: null
  evaluationInfo: null
  similarProducts: Array<SimilarProductItem>
  hotByDay: Array<HotByDayItem>
}
