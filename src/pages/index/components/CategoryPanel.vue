<template>
  <view class="category-container">
    <navigator
      v-for="item in categoryList"
      :key="item.id"
      class="category-container__item"
      :url="`/pages/category/category`"
      open-type="switchTab"
    >
      <image class="category-container__item__icon" :src="item.icon" />
      <text class="category-container__item__text">
        {{ item.name }}
      </text>
    </navigator>
  </view>
</template>

<script setup lang="ts">
import type { CategoryItem } from '@/types/home'
import type { PropType } from 'vue'

defineProps({
  categoryList: {
    type: Array as PropType<Array<CategoryItem>>,
    default: () => [],
  },
})
</script>

<style lang="scss" scoped>
.category-container {
  margin: 20rpx 0 0;
  padding: 10rpx 0;
  display: flex;
  flex-wrap: wrap;
  min-height: 328rpx;

  &__item {
    width: 150rpx;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;

    &__icon {
      width: 100rpx;
      height: 100rpx;
    }

    &__text {
      font-size: 26rpx;
      color: #666;
    }
  }
}
</style>
