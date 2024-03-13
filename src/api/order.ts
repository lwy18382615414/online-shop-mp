import type { PreOrderResult } from '@/types/order'
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
