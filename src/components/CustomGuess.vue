<template>
  <view class="guess-container">
    <view class="caption">
      <view class="text">猜你喜欢</view>
    </view>
    <view class="guess">
      <navigator url="/pages/" v-for="item in guessList.items" :key="item.id" class="item">
        <image :src="item.picture" class="image" />
        <view class="title ellipsis">{{ item.name }}</view>
        <view class="price">
          <text class="small">¥</text>
          <text>{{ item.price }}</text>
        </view>
      </navigator>
      <view class="load"> {{ loadText }} </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import type { GuessList } from '@/types/home'
import type { PropType } from 'vue'

defineProps({
  guessList: {
    type: Object as PropType<GuessList>,
    default: () => {},
  },
  loadText: {
    type: String as PropType<String>,
    default: '正在加载中...',
  },
})
</script>

<style lang="scss" scoped>
.guess-container {
  .caption {
    display: flex;
    justify-content: center;
    margin: 32rpx 0;

    .text {
      font-size: 32rpx;
      color: #262626;

      &::before,
      &::after {
        content: '12';
        color: transparent;
        width: 20rpx;
        height: 20rpx;
        background: url('@/static/images/bubble.png') no-repeat;
        margin: 0 10rpx;
      }
    }
  }

  .guess {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .item {
      width: 345rpx;
      padding: 24rpx 20rpx 20rpx;
      margin-bottom: 20rpx;
      border-radius: 10rpx;
      overflow: hidden;
      background-color: #fff;
      .image {
        width: 300rpx;
        height: 300rpx;
      }

      .title {
        height: 75rpx;
        margin: 10rpx 0;
        font-size: 26rpx;
        color: #262626;
      }

      .price {
        line-height: 1;
        padding-top: 4rpx;
        color: #cf4444;
        font-size: 26rpx;
      }
    }
  }

  .load {
    margin: 20rpx 0;
    font-size: 28rpx;
    color: #666;
  }
}
</style>
