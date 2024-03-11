<template>
  <view v-if="isFinish" class="viewport">
    <view class="search">
      <uni-easyinput v-model="value" type="text" placeholder="搜索商品" prefixIcon="search" />
    </view>
    <view class="category-container">
      <scroll-view scroll-y class="primary">
        <view
          v-for="(item, index) in categoryList"
          :key="item.id"
          class="item"
          @tap="activeIndex = index"
          :class="{ active: index === activeIndex }"
        >
          {{ item.name }}
        </view>
      </scroll-view>
      <scroll-view enable-back-to-top scroll-y class="secondary">
        <CustomSwiper :swiperList="swiperList" class="banner" />
        <view class="panel" v-for="item in subCategoryList" :key="item.id">
          <view class="title">
            <text class="name">{{ item.name }}</text>
            <navigator class="more" hover-class="none">全部</navigator>
          </view>
          <view class="section">
            <navigator
              v-for="goods in item.goods"
              :key="goods.id"
              class="goods"
              hover-class="none"
              :url="`/pages/goods/goods?id=${goods.id}`"
            >
              <image class="image" :src="goods.picture"></image>
              <view class="name ellipsis">{{ goods.name }}</view>
              <view class="price">
                <text class="symbol">¥</text>
                <text class="number">{{ goods.price }}</text>
              </view>
            </navigator>
          </view>
        </view>
      </scroll-view>
    </view>
  </view>
  <CategorySkeleton v-else />
</template>

<script setup lang="ts">
import { getHomeBannerApi } from '@/api'
import { getCategoryApi } from '@/api/category'
import type { CategoryResult } from '@/types/category'
import type { BannerItem } from '@/types/home'
import { onLoad } from '@dcloudio/uni-app'
import { computed, ref } from 'vue'
import CategorySkeleton from './CategorySkeleton.vue'

const value = ref('')
const distributionSite = 2
const categoryList = ref<CategoryResult[]>([])
const activeIndex = ref(0)
const swiperList = ref<BannerItem[]>([])
const isFinish = ref(false)

onLoad(async () => {
  await Promise.all([getSwiperList(), getCategoryList()])
  isFinish.value = true
})

async function getCategoryList() {
  const categoryRes = await getCategoryApi()
  if (categoryRes.code === '1') {
    categoryList.value = categoryRes.result
  }
}

const subCategoryList = computed(() => categoryList.value[activeIndex.value]?.children || [])

async function getSwiperList() {
  const swiperRes = await getHomeBannerApi(distributionSite)
  if (swiperRes.code === '1') {
    swiperList.value = swiperRes.result
  }
}
</script>

<style lang="scss" scoped>
.viewport {
  height: 100%;
  display: flex;
  flex-direction: column;
  .search {
    padding: 20rpx 20rpx;

    :deep(.uni-easyinput) {
      .uni-easyinput__content {
        border: none;
        border-radius: 50rpx;
        padding: 0 20rpx;
      }
    }
  }
}
.category-container {
  display: flex;
  background: #ffffff;
  flex: 1;
  min-height: 400rpx;

  .primary {
    flex: none;
    width: 18%;
    background: #f7f7f7;
    .item {
      font-size: 26rpx;
      color: #595c63;
      text-align: center;
      padding: 20rpx 24rpx;
      box-sizing: border-box;
    }

    .active {
      border-left: 3px solid #00aeec;
      background: #ffffff;
    }
  }

  .secondary {
    padding: 0 20rpx;

    .banner {
      :deep(.carousel) {
        height: 200rpx;
        margin: 20rpx 0;
        border-radius: 4rpx;
        overflow: hidden;
      }
    }

    .panel {
      .title {
        color: #333;
        font-size: 28rpx;
        .more {
          float: right;
          padding-left: 20rpx;
          font-size: 24rpx;
          color: #999;
        }
      }
      .section {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        padding: 20rpx 0;
        .goods {
          width: 150rpx;
          margin: 0rpx 20rpx 20rpx 0;
          &:nth-child(3n) {
            margin-right: 0;
          }
          .image {
            width: 150rpx;
            height: 150rpx;
          }
          .name {
            padding: 5rpx;
            font-size: 22rpx;
            color: #333;
          }
          .price {
            padding: 5rpx;
            font-size: 18rpx;
            color: #cf4444;
          }
          .number {
            font-size: 24rpx;
            margin-left: 2rpx;
          }
        }
      }
    }
  }
}
</style>
./CategorySkeleton.vue
