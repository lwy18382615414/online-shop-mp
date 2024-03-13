export type CartListResult = {
  id: string
  name: string
  picture: string
  price: number
  count: number
  skuId: string
  attrsText: string //属性文字
  selected: boolean // 是否选中
  nowPrice: number
  stock: number //库存
  isCollect: boolean //是否收藏
  discount: number //折扣信息
  isEffective: boolean //是否是有效商品
}
