import type { PreOrderResult, SubmitOrderParams } from '@/types/order'
import { http } from './index'

// 获取预付订单
export function getPreOrderApi() {
  return http<PreOrderResult>({
    method: 'GET',
    url: '/member/order/pre',
  })
}

// 立即购买
export function getNowOrderApi(data: { skuId: string; count: string; addressId?: string }) {
  return http<PreOrderResult>({
    method: 'GET',
    url: '/member/order/pre/now',
    data,
  })
}

// 提交订单
export function submitOrder(data: SubmitOrderParams) {
  return http<{ id: string }>({
    method: 'POST',
    url: '/member/order',
    data,
  })
}

export function getOrderDetail(id: string) {
  return http({
    method: 'GET',
    url: `/member/order/${id}`,
  })
}
