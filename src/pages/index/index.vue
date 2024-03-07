<template>
  <view class="index">
    <text @click="getData">123</text>
  </view>
</template>

<script setup lang="ts">
import '@/api/index'
import { getHomeBanner } from '@/api'

const getData = async () => {
  const res = await getHomeBanner<[]>()
  console.log(res)
}
</script>

<style lang="scss">
//
</style>
