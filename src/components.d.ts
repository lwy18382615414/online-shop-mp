import CustomSwiper from '@/components/CustomSwiper.vue'
import CustomGuess from '@/components/CustomGuess.vue'

declare module 'vue' {
  export interface GlobalComponents {
    CustomSwiper: typeof CustomSwiper
    CustomGuess: typeof CustomGuess
  }
}

// 组件实例类型
export type CustomSwiper = InstanceType<typeof CustomSwiper>
export type CustomGuess = InstanceType<typeof CustomGuess>
