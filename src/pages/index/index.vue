<template>
  <view class="viewport">
    <CustomNavbar />
    <!-- 滚动容器 -->
    <scroll-view
      enable-back-to-top
      refresher-enabled
      @refresherrefresh="onRefresherrefresh"
      :refresher-triggered="isTriggered"
      @scrolltolower="onScrolltolower"
      class="scroll-view"
      scroll-y
    >
      <PageSkeleton v-if="isLoading" />
      <template v-else>
        <CustomSwiper :swiperList="swiperList" />
        <CategoryPanel :categoryList="categoryList" />
        <HotPanel :hotPanelList="hotPanelList" />
        <CustomGuess :guessList="guessList" :loadText="loadText" />
      </template>
    </scroll-view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CustomNavbar from './components/CustomNavbar.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
import { getGuessApi, getHomeBannerApi, getHomeCategoryApi, getHotPanelApi } from '../../api/index'
import { onLoad } from '@dcloudio/uni-app'
import type { BannerItem, CategoryItem, GuessList, HotPanelItem } from '../../types/home'
import PageSkeleton from './components/PageSkeleton.vue'

const distributionSite = 1
const swiperList = ref<BannerItem[]>([])
const categoryList = ref<CategoryItem[]>([])
const hotPanelList = ref<HotPanelItem[]>([])
const guessList = ref(<GuessList>{})
const pageSize = ref(10)
const currentPage = ref(1)
const total = ref(0)
const loadText = ref('')
const isTriggered = ref(false)
const isLoading = ref(false)

onLoad(async () => {
  isLoading.value = true
  await Promise.all([getSwiperList(), getCategoryList(), getHotPanelList(), getGuessList()])
  isLoading.value = false
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

async function getGuessList() {
  const guessRes = await getGuessApi(1, 10)
  if (guessRes.code === '1') {
    guessList.value = guessRes.result
    total.value = guessRes.result.pages
  }
}

// 滚动到底部
async function onScrolltolower() {
  if (currentPage.value < total.value) {
    currentPage.value++
    loadText.value = '正在加载中...'
    const guessRes = await getGuessApi(currentPage.value, pageSize.value)
    if (guessRes.code === '1') {
      guessList.value.page = guessRes.result.page
      guessList.value.items = [...guessList.value.items, ...guessRes.result.items]
    }
  } else {
    loadText.value = '没有更多了~'
  }
}

// 下拉刷新
async function onRefresherrefresh() {
  isTriggered.value = true
  await Promise.all([getSwiperList(), getCategoryList(), getHotPanelList(), getGuessList()])
  isTriggered.value = false
}
</script>

<style lang="scss" scoped>
.viewport {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.scroll-view {
  flex: 1;
  overflow: hidden;
}
</style>
