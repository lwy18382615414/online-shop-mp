import { http } from './index'
import type { PageParams } from '../types/index'
import type { HotResult } from '@/types/hot'

export function getHotRecommendApi(url: string, data?: PageParams & { subType?: string }) {
  return http<HotResult>({
    method: 'GET',
    url,
    data,
  })
}
