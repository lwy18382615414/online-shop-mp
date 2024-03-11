import type { GoodsResult } from '@/types/goods'
import { http } from './index'

export function getGoodDetailApi(id: number) {
  return http<GoodsResult>({
    method: 'GET',
    url: '/goods',
    data: {
      id,
    },
  })
}
