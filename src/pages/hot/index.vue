<template>
  <view class="viewport">
    <!-- 推荐封面图 -->
    <view class="cover">
      <image class="image" mode="widthFix" :src="bannerPicture"></image>
    </view>
    <!-- 推荐选项 -->
    <view class="tabs">
      <text
        v-for="(item, index) in subTypes"
        :key="item.id"
        class="text"
        :class="{ active: index === activeIndex }"
        @tap="activeIndex = index"
        >{{ item.title }}</text
      >
    </view>
    <!-- 推荐列表 -->
    <scroll-view
      enable-back-to-top
      v-for="(item, index) in subTypes"
      :key="item.id"
      v-show="activeIndex === index"
      scroll-y
      class="scroll-view"
      @scrolltolower="onScrolltolower"
    >
      <view class="goods">
        <navigator
          hover-class="none"
          class="navigator"
          v-for="goods in item.goodsItems.items"
          :key="goods.id"
          :url="`/pages/goods/goods?id=${goods.id}`"
        >
          <image class="thumb" :src="goods.picture"></image>
          <view class="name ellipsis">{{ goods.name }}</view>
          <view class="price">
            <text class="symbol">¥</text>
            <text class="number">{{ goods.price }}</text>
          </view>
        </navigator>
      </view>
      <view class="loading-text">
        {{ loadText }}
      </view>
    </scroll-view>
  </view>
</template>

<script lang="ts" setup>
import { URL_MAPPING } from './constance'
import type { PropType } from 'vue'
import { ref } from 'vue'
import { getHotRecommendApi } from '../../api/hot.ts'
import { onLoad } from '@dcloudio/uni-app'
import type { SubTypeItem } from '../../types/hot'

// uniapp 获取页面参数
const query = defineProps({
  type: {
    type: String as PropType<string>,
    default: '1',
  },
})

const currentPage = URL_MAPPING.find((item) => item.type === query.type)
const page = ref(1)
const pageSize = ref(10)
const total = ref(0)
const bannerPicture = ref('')
const subTypes = ref<Array<SubTypeItem>>([])
// 高亮的下标
const activeIndex = ref(0)
const loadText = ref('加载中...')
onLoad(async () => {
  await getHotRecommend()
})

// 获取热门推荐数据
async function getHotRecommend() {
  const res = await getHotRecommendApi(currentPage!.url, {
    page: page.value,
    pageSize: pageSize.value,
  })

  if (res.code === '1') {
    // 动态设置标题
    uni.setNavigationBarTitle({ title: res.result.title })
    bannerPicture.value = res.result.bannerPicture
    total.value = res.result.subTypes[activeIndex.value].goodsItems.pages
    subTypes.value = res.result.subTypes
  }
}

async function onScrolltolower() {
  if (page.value < total.value) {
    page.value++
    const res = await getHotRecommendApi(currentPage!.url, {
      page: page.value,
      pageSize: pageSize.value,
    })

    if (res.code === '1') {
      subTypes.value[activeIndex.value].goodsItems.items = [
        ...subTypes.value[activeIndex.value].goodsItems.items,
        ...res.result.subTypes[activeIndex.value].goodsItems.items,
      ]
    }
  } else {
    loadText.value = '没有更多了~'
  }
}
</script>

<style lang="scss" scoped>
.viewport {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 180rpx 0 0;
  position: relative;
}
.cover {
  width: 750rpx;
  height: 225rpx;
  border-radius: 0 0 40rpx 40rpx;
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 0;
  .image {
    width: 750rpx;
  }
}

.tabs {
  display: flex;
  justify-content: space-evenly;
  height: 100rpx;
  line-height: 90rpx;
  margin: 0 20rpx;
  font-size: 28rpx;
  border-radius: 10rpx;
  box-shadow: 0 4rpx 5rpx rgba(200, 200, 200, 0.3);
  color: #333;
  background-color: #fff;
  position: relative;
  z-index: 9;
  .text {
    margin: 0 20rpx;
    position: relative;
  }
  .active {
    &::after {
      content: '';
      width: 40rpx;
      height: 4rpx;
      transform: translate(-50%);
      background-color: #27ba9b;
      position: absolute;
      left: 50%;
      bottom: 24rpx;
    }
  }
}

.scroll-view {
  flex: 1;
}

.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 20rpx 20rpx;
  .navigator {
    width: 342rpx;
    padding: 20rpx;
    margin-top: 20rpx;
    border-radius: 10rpx;
    background-color: #fff;
  }
  .thumb {
    width: 305rpx;
    height: 305rpx;
  }
  .name {
    height: 88rpx;
    font-size: 26rpx;
  }
  .price {
    line-height: 1;
    color: #cf4444;
    font-size: 30rpx;
  }
  .symbol {
    font-size: 70%;
  }
  .decimal {
    font-size: 70%;
  }
}

.loading-text {
  text-align: center;
  font-size: 28rpx;
  color: #666;
  padding: 20rpx 0 50rpx;
}
</style>
