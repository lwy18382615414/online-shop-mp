import { useMemberStore } from '@/stores'
import type { ApiBannerData } from './type'

const baseUrl = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'

const httpInterceptor = {
  // 请求拦截器触发
  invoke(options: UniApp.RequestOptions) {
    if (!options.url.startsWith('http')) {
      options.url = baseUrl + options.url
    }

    // 设置超时请求时间
    options.timeout = 10000

    console.log(options)

    // 添加小程序端请求头标识
    options.header = {
      ...options.header,
      'source-client': 'miniapp',
    }

    // 添加token
    const memberStroe = useMemberStore()
    const token = memberStroe.profile?.token
    if (token) {
      options.header.Authorization = token
    }
  },
}

uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('uploadFile', httpInterceptor)

export function getHomeBanner<T>(options?: UniApp.RequestOptions) {
  return new Promise<ApiBannerData<T>>((resolve, reject) => {
    uni.request({
      method: 'GET',
      url: '/home/banner',
      ...options,
      success(res) {
        resolve(res.data as ApiBannerData<T>)
      },
    })
  })
}
