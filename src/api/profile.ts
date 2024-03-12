import type { AddressParams, AddressResult, ProfileDetail, ProfileParams } from '@/types/menber'
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

// 获取收获地址列表
export function getAddressApi() {
  return http<AddressResult[]>({
    method: 'GET',
    url: '/member/address',
  })
}

// 新增收获地址
export function addAddressApi(data: AddressParams) {
  return http({
    method: 'POST',
    url: '/member/address',
    data,
  })
}

// 获取收获地址详情
export function getAddressDetailApi(id: string) {
  return http<AddressResult>({
    method: 'GET',
    url: `/member/address/${id}`,
  })
}

// 修改收获地址
export function changeAddressApi(id: string, data: AddressParams) {
  return http({
    method: 'PUT',
    url: `/member/address/${id}`,
    data,
  })
}

// 删除收获地址
export function deleteAddressApi(id: string) {
  return http({
    method: 'DELETE',
    url: `/member/address/${id}`,
  })
}
