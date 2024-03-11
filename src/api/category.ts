import type { CategoryResult } from '@/types/category'
import { http } from './index'

export function getCategoryApi() {
  return http<CategoryResult[]>({
    method: 'GET',
    url: '/category/top',
  })
}
