import type { AccountLoginResult, LoginResult } from '@/types/menber'
import { http } from './index'

type LoginParam = {
  code: string
  encryptedData: string
  iv: string
}
/**
 * 微信小程序登录
 * @param data 请求参数
 * @returns
 */
export function wxLogin(data: LoginParam) {
  return http<LoginResult>({
    method: 'POST',
    url: '/login/wxMin',
    data,
  })
}

// 模拟手机号码登录
export function wxLoginSimple(phoneNumber: string) {
  return http<LoginResult>({
    method: 'POST',
    url: '/login/wxMin/simple',
    data: {
      phoneNumber,
    },
  })
}

// 传统登录
export function accountLogin(data: { account: string; password: string }) {
  return http<LoginResult>({
    method: 'POST',
    url: '/login',
    data,
  })
}
