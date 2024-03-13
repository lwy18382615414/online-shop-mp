import type { AddressResult } from '@/types/menber'
import { defineStore } from 'pinia'
import { ref } from 'vue'

// 定义 Store
export const useAddressStore = defineStore('address', () => {
  const selectedAddress = ref(<AddressResult>{})

  const changeSelectedAddress = (val: AddressResult) => {
    selectedAddress.value = val
  }

  return {
    selectedAddress,
    changeSelectedAddress,
  }
})
