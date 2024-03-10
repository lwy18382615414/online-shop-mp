import { useMemberStore } from '@/stores'
import type { Data } from './type'
import type { BannerItem, CategoryItem, GuessList, HotPanelItem } from '@/types/home'

const baseUrl = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'

const httpInterceptor = {
  // 请求拦截器触发
  invoke(options: UniApp.RequestOptions) {
    if (!options.url.startsWith('http')) {
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

uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('uploadFile', httpInterceptor)

export function http<T>(options: UniApp.RequestOptions) {
  return new Promise<Data<T>>((resolve, reject) => {
    uni.request({
      ...options,
      success(res) {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(res.data as Data<T>)
        } else if (res.statusCode === 401) {
          const memberStroe = useMemberStore()
          memberStroe.clearProfile()
          uni.navigateTo({
            url: '/pages/login/login',
          })
          reject(res)
        } else {
          uni.showToast({
            icon: 'error',
            title: (res.data as Data<T>).msg || '请求失败',
          })
          reject(res)
        }
      },
      fail(err) {
        uni.showToast({
          icon: 'error',
          title: '网络错误',
        })
        reject(err)
      },
    })
  })
}

// 获取首页轮播图
export function getHomeBannerApi(distributionSite: number) {
  return http<BannerItem[]>({
    method: 'GET',
    url: '/home/banner',
    data: {
      distributionSite,
    },
  })
}

// 获取首页分类
export function getHomeCategoryApi() {
  return http<CategoryItem[]>({
    method: 'GET',
    url: '/home/category/mutli',
  })
}

// 获取首页推荐
export function getHotPanelApi() {
  return http<HotPanelItem[]>({
    method: 'GET',
    url: '/home/hot/mutli',
  })
}

// 猜你喜欢
export function getGuessApi(page: number, pageSize: number) {
  return http<GuessList>({
    method: 'GET',
    url: '/home/goods/guessLike',
    data: {
      page,
      pageSize,
    },
  })
}
