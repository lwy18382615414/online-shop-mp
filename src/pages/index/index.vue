<template>
  <view class="index">
    <CustomNavbar />
    <CustomSwiper :swiperList="swiperList" />
    <CategoryPanel :categoryList="categoryList" />
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CustomNavbar from './components/CustomNavbar.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import { getHomeBannerApi, getHomeCategoryApi } from '@/api/index'
import { onLoad } from '@dcloudio/uni-app'
import type { BannerItem, CategoryItem } from '@/types/home'

const distributionSite = 1
const swiperList = ref<BannerItem[]>([])
const categoryList = ref<CategoryItem[]>([])

onLoad(async () => {
  await getSwiperList()
  await getCategoryList()
})

async function getSwiperList() {
  const swiperRes = await getHomeBannerApi(distributionSite)
  if (swiperRes.code === '1') {
    swiperList.value = swiperRes.result
  }
}

async function getCategoryList() {
  const categoryRes = await getHomeCategoryApi()
  if (categoryRes.code === '1') {
    categoryList.value = categoryRes.result
  }
}
</script>

<style lang="scss">
//
</style>
