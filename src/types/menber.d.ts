type BaseProfile = {
  id: string
  avatar: string
  account: string
  nickname: string
}

export type LoginResult = BaseProfile & {
  mobile: string
  token: string
}

export type ProfileDetail = BaseProfile & {
  gender?: string
  birthday?: string
  fullLocation?: string
  profession?: string
}

/** 性别 */
export type Gender = '女' | '男'

// 个人信息 修改请求体参数
export type ProfileParams = Pick<
  ProfileDetail,
  'nickname' | 'gender' | 'birthday' | 'profession'
> & {
  // 省份编码
  provinceCode?: string
  // 城市编码
  cityCode?: string
  // 区县编码
  countyCode?: string
}

// 收获地址
export type AddressResult = {
  id: string
  receiver: string
  contact: string
  provinceCode: string
  cityCode: string
  countyCode: string
  fullLocation: string
  address: string
  isDefault: number
}

// 新增收获地址请求体参数
export type AddressParams = {
  receiver: string
  contact: string
  provinceCode: string
  cityCode: string
  countyCode: string
  address: string
  isDefault: number
  postalCode?: string
  addressTags?: string
}
