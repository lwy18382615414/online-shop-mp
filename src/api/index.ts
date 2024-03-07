import { useMemberStore } from '@/stores'

const baseUrl = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'

const httpInterceptor = {
  // 拦截器触发
  invoke(options: UniApp.RequestOptions) {
    if (options.url.startsWith('http')) {
      options.url = baseUrl + options.url
    }

    // 设置超时请求时间
    options.timeout = 10000

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
