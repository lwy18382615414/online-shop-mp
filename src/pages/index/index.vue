<template>
  <view class="index">
    <CustomNavbar />
    <CustomSwiper :swiperList="swiperList" />
    <CategoryPanel :categoryList="categoryList" />
    <HotPanel :hotPanelList="hotPanelList" />
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CustomNavbar from './components/CustomNavbar.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
import { getHomeBannerApi, getHomeCategoryApi, getHotPanelApi } from '@/api/index'
import { onLoad } from '@dcloudio/uni-app'
import type { BannerItem, CategoryItem, HotPanelItem } from '@/types/home'

const distributionSite = 1
const swiperList = ref<BannerItem[]>([])
const categoryList = ref<CategoryItem[]>([])
const hotPanelList = ref<HotPanelItem[]>([])

onLoad(async () => {
  await getSwiperList()
  await getCategoryList()
  await getHotPanelList()
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

async function getHotPanelList() {
  const hotPanelRes = await getHotPanelApi()
  if (hotPanelRes.code === '1') {
    hotPanelList.value = hotPanelRes.result
  }
}
</script>

<style lang="scss">
//
</style>
