import type { ProfileDetail, ProfileParams } from '@/types/menber'
import { http } from './index'

export function getProfileApi() {
  return http<ProfileDetail>({
    method: 'GET',
    url: '/member/profile',
  })
}

// 修改个人信息
export function changeProfileApi(data: ProfileParams) {
  return http<ProfileDetail>({
    method: 'PUT',
    url: '/member/profile',
    data,
  })
}
