export type UserAddressesItem = {
  id: string
  provinceCode: string
  cityCode: string
  countyCode: string
  address: string
  isDefault: number
  receiver: string
  contact: string
  fullLocation: string
  postalCode: string
}

export type GoodsItem = {
  id: string
  name: string
  picture: string
  count: number
  skuId: string
  attrsText: string
  price: number
  payPrice: number
  totalPrice: number
  totalPayPrice: number
}

export type Summary = {
  goodsCount: number
  totalPrice: number
  totalPayPrice: number
  postFee: number
  discountPrice: number
}

export type PreOrderResult = {
  userAddresses: UserAddressesItem[] // 用户地址列表
  goods: GoodsItem[] // 商品集合
  summary: Summary // 结算信息
}
