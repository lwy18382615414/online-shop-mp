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

// 提交订单需要的参数
export type SubmitOrderParams = {
  goods: Array<{
    skuId: string
    count: number
  }>
  addressId: string
  deliveryTimeType: string
  buyerMessage: string
  payType: number
  payChannel: number
}

export type SkuItem = {
  id: string
  spuId: string
  attrsText: string
  name: string
  quantity: string
  image: string
  totalMoney: number
  realPay: number
  curPrice: number
  properties: Array<{
    propertyMainName: string
    propertyValueName: string
  }>
}

// 获取订单详情
export type OrderDetailResult = {
  id: string
  createTime: string
  payType: number // 支付方式
  orderState: number // 订单状态
  payLatestTime: number // 付款截止时间
  countdown: number //倒计时
  postFee: string // 邮费
  payMoney: string //实付金额
  payChannel: number //支付渠道
  totalMoney: string //金额合计
  totalNum: string
  deliveryTimeType: number
  receiverContact: string
  receiverMobile: string
  receiverAddress: string
  payTime: string
  consignTime: string
  arrivalEstimatedTime: string
  endTime: string
  closeTime: string
  evaluationTime: string // 完成评价时间
  skus: Array<SkuItem>
}

// 订单物流信息
export type Logistics = {
  picture: string
  count: number
  company: {
    name: string
    number: string
    tel: string
  }
  list: Array<{
    id: string
    text: string
    time: string
  }>
}

/** 订单列表项 */
export type OrderItem = OrderDetailResult & {
  /** 总件数 */
  totalNum: number
}

/** 订单列表 */
export type OrderListResult = {
  /** 总记录数 */
  counts: number
  /** 数据集合    [ 订单信息 ] */
  items: OrderItem[]
  /** 当前页码 */
  page: number
  /** 总页数 */
  pages: number
  /** 页尺寸 */
  pageSize: number
}
