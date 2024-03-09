import CustomSwiper from './components/CustomSwiper.vue'
import CustomGuess from './components/CustomGuess.vue'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    CustomSwiper: typeof CustomSwiper
    CustomGuess: typeof CustomGuess
  }
}
