import type { CartListResult } from '@/types/cart'
import { http } from './index'

// 加入购物车
export function addCartApi(skuId: string, count: number) {
  return http({
    url: '/member/cart',
    method: 'POST',
    data: {
      skuId,
      count,
    },
  })
}

// 获取购物车列表
export function getCartListApi() {
  return http<CartListResult[]>({
    url: '/member/cart',
    method: 'GET',
  })
}

// 修改购物车单品数量
export function changeCartItemNum(
  skuId: string,
  data: {
    count?: number
    selected?: boolean
  },
) {
  return http({
    method: 'PUT',
    url: `/member/cart/${skuId}`,
    data,
  })
}

// 删除/清空购物车
export function deleteCartItem(data: { ids: string[] }) {
  return http({
    method: 'DELETE',
    url: '/member/cart',
    data,
  })
}

// 购物车全选/取消全选
export function isSelectedAllApi(data: { selected: boolean }) {
  return http({
    method: 'PUT',
    url: '/member/cart/selected',
    data,
  })
}
