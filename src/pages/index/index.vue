<template>
  <view class="index">
    <CustomNavbar />
    <CustomSwiper :swiperList="swiperList" />
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CustomNavbar from './components/CustomNavbar.vue'
import { getHomeBannerApi } from '@/api/index'
import { onLoad } from '@dcloudio/uni-app'
import type { BannerItem } from '@/types/home'

const distributionSite = 1
const swiperList = ref<BannerItem[]>([])

onLoad(async () => {
  await getSwiperList()
})

async function getSwiperList() {
  const swiperRes = await getHomeBannerApi(distributionSite)
  if (swiperRes.code === '1') {
    swiperList.value = swiperRes.result
  }
}
</script>

<style lang="scss">
//
</style>
