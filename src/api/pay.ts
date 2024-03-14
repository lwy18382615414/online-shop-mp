import { http } from './index'

// 微信支付
export function wxPayApi(data: { orderId: string }) {
  return http<WechatMiniprogram.RequestPaymentOption>({
    url: '/pay/wxPay/miniPay',
    method: 'GET',
    data,
  })
}

// 模拟支付
export function payMockApi(data: { orderId: string }) {
  return http<WechatMiniprogram.RequestPaymentOption>({
    url: '/pay/mock',
    method: 'GET',
    data,
  })
}
