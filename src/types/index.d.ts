//

// 分页类型
export type PageParams = {
  page?: number
  pageSize?: number
}

// 通用商品类型
export type GoodsItem = {
  id: string
  name: string
  orderNum: string // 下单数量
  picture: string
  desc: string
  discount: string // 商品折扣
  price: number
}
