// 轮播图
export type BannerItem = {
  hrefUrl: string
  id: string
  imgUrl: string
  type: number
}

// 分类说明
export type CategoryItem = {
  id: string
  name: string
  icon: string
}

// 热门推荐
export type HotPanelItem = {
  id: string
  alt: string
  pictures: Array[]
  target: string
  title: string
  type: string
}

// 猜你喜欢
export type GuessList = {
  counts: number
  pageSize: number
  pages: number
  page: number
  items: Array<{
    id: string
    name: string
    desc: string
    price: number
    picture: string
    discount: number
    orderNum: number
  }>
}
