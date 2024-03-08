import CustomSwiper from './components/CustomSwiper.vue'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    CustomSwiper: typeof CustomSwiper
  }
}
