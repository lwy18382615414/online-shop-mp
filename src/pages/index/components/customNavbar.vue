<template>
  <view class="navbar-container" :style="{ paddingTop: safeAreaInsets?.top + 'px' }">
    <view class="navbar-container__logo">
      <image class="navbar-container__logo__image" src="@/static/images/logo.png" />
      <text class="navbar-container__logo__title">新鲜 · 亲民 · 快捷</text>
    </view>
    <view class="navbar-container__search">
      <uni-easyinput
        v-model="value"
        type="text"
        placeholder="搜索商品"
        prefixIcon="search"
        suffixIcon="scan"
      />
    </view>
  </view>
</template>
<script lang="ts">
export default {
  options: {
    styleIsolation: 'shared', // 解除样式隔离
  },
}
</script>
<script setup lang="ts">
import { ref } from 'vue'
const value = ref('')

// 获取屏幕边界到安全区域的距离
const { safeAreaInsets } = uni.getSystemInfoSync()
</script>

<style scoped lang="scss">
.navbar-container {
  background: url('@/static/images/navigator_bg.png') no-repeat;
  background-size: cover;
  &__logo {
    height: 64rpx;
    display: flex;
    align-items: center;
    padding-left: 30rpx;
    &__image {
      width: 166rpx;
      height: 40rpx;
    }
    &__title {
      flex: 1;
      font-size: 26rpx;
      color: #ffffff;
      line-height: 28rpx;
      margin: 2rpx 0 0 20rpx;
      padding-left: 20rpx;
      border-left: 1px solid #ffffff;
    }
  }

  &__search {
    padding: 20rpx 30rpx;

    :deep(.uni-easyinput) {
      .uni-easyinput__content {
        border: none;
        border-radius: 50rpx;
        padding: 0 20rpx;
      }
    }
  }
}
</style>
