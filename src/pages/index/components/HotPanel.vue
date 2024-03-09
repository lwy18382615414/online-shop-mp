<template>
  <view class="hotPanel-container">
    <view class="hotPanel-container__item" v-for="item in hotPanelList" :key="item.id">
      <view class="hotPanel-container__item__title">
        <text class="hotPanel-container__item__title__main">
          {{ item.title }}
        </text>
        <text class="hotPanel-container__item__title__sub">
          {{ item.alt }}
        </text>
      </view>
      <navigator url="/pages" class="card">
        <image
          v-for="img in item.pictures"
          :key="img"
          :src="img"
          mode="scaleToFill"
          class="image"
        />
      </navigator>
    </view>
  </view>
</template>

<script setup lang="ts">
import type { HotPanelItem } from '@/types/home'
import type { PropType } from 'vue'

defineProps({
  hotPanelList: {
    type: Array as PropType<Array<HotPanelItem>>,
    default: () => [],
  },
})
</script>

<style lang="scss" scoped>
.hotPanel-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  &__item {
    margin: 16rpx 0;
    padding: 16rpx;
    border-radius: 16rpx;
    background-color: #fff;

    &__title {
      margin-bottom: 16rpx;
      &__main {
        font-size: 32rpx;
        color: #262626;
        margin-right: 18rpx;
      }

      &__sub {
        font-size: 24rpx;
        color: #7f7f7f;
      }
    }

    .card {
      .image {
        width: 150rpx;
        height: 150rpx;
        margin-right: 10rpx;
      }
    }
  }
}
</style>
