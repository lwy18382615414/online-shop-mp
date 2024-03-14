import type {
  Logistics,
  OrderDetailResult,
  OrderListResult,
  PreOrderResult,
  SubmitOrderParams,
} from '@/types/order'
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

// 再次购买订单
export function getOrderAgainApi(id: string) {
  return http<PreOrderResult>({
    method: 'GET',
    url: `/member/order/repurchase/${id}`,
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

// 获取订单详情
export function getOrderDetailApi(id: string) {
  return http<OrderDetailResult>({
    method: 'GET',
    url: `/member/order/${id}`,
  })
}

/**
 * 模拟发货-内测版
 * @description 在DEV环境下使用，仅在订单状态为待发货时，可模拟发货，调用后订单状态修改为待收货，包含模拟物流。
 * @param id 订单id
 */
export const getMemberOrderConsignmentByIdAPI = (id: string) => {
  return http({
    method: 'GET',
    url: `/member/order/consignment/${id}`,
  })
}

/**
 * 确认收货
 * @description 仅在订单状态为待收货时，可确认收货。
 * @param id 订单id
 */
export const putMemberOrderReceiptByIdAPI = (id: string) => {
  return http<OrderDetailResult>({
    method: 'PUT',
    url: `/member/order/${id}/receipt`,
  })
}

// 获取订单物流信息
export function getOrderLogisticsApi(id: string) {
  return http<Logistics>({
    method: 'GET',
    url: `/member/order/${id}/logistics`,
  })
}

// 删除订单
export function deleteOrderApi(data: { ids: string[] }) {
  return http({
    method: 'DELETE',
    url: `/member/order`,
    data,
  })
}

// 取消订单
export function cancelOrderApi(id: string, data: { cancelReason: string }) {
  return http<OrderDetailResult>({
    method: 'PUT',
    url: `/member/order/${id}/cancel`,
    data,
  })
}

// 获取订单列表信息
export function getOrderListApi(data: { page?: number; pageSize?: number; orderState?: number }) {
  return http<OrderListResult>({
    method: 'GET',
    url: `/member/order`,
    data,
  })
}
