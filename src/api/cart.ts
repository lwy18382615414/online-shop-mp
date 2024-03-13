import { http } from '.'

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
