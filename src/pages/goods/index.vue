<template>
  <scroll-view enable-back-to-top scroll-y class="viewport">
    <view class="goods">
      <view class="preview">
        <swiper @change="onChange" circular>
          <swiper-item v-for="item in goodDetail?.mainPictures" :key="item">
            <image class="image" @tap="onTapImage(item)" mode="aspectFill" :src="item" />
          </swiper-item>
        </swiper>
        <view class="indicator">
          <text class="current">{{ currentIndex + 1 }}</text>
          <text class="split">/</text>
          <text class="total">{{ totalPic }}</text>
        </view>
      </view>
      <view class="meta">
        <view class="price">
          <text class="symbol">¥</text>
          <text class="number">{{ goodDetail?.price }}</text>
        </view>
        <view class="name ellipsis">{{ goodDetail?.name }}</view>
        <view class="desc"> {{ goodDetail?.desc }} </view>
      </view>
      <!-- 操作面板 -->
      <view class="action">
        <view class="item arrow">
          <text class="label">选择</text>
          <text class="text ellipsis"> 1 </text>
        </view>
        <view @tap="openPopup('address')" class="item arrow">
          <text class="label">送至</text>
          <view class="text ellipsis">
            <text v-if="!receiverValue">请选择收获地址</text>
            <view v-else>
              <text>{{ receiverValue }}</text>
              <text style="margin: 0 20rpx">{{ fullLocationValue }}</text>
              <text>{{ addressValue }}</text>
            </view>
          </view>
        </view>
        <view @tap="openPopup('service')" class="item arrow">
          <text class="label">服务</text>
          <text class="text ellipsis"> 无忧退 快速退款 免费包邮 </text>
        </view>
      </view>
    </view>
  </scroll-view>

  <!-- 用户操作 -->
  <view v-if="goodDetail" class="toolbar" :style="{ paddingBottom: safeAreaInsets?.bottom + 'px' }">
    <view class="icons">
      <button class="icons-button"><text class="icon-heart"></text>收藏</button>
      <!-- #ifdef MP-WEIXIN -->
      <button class="icons-button" open-type="contact">
        <text class="icon-handset"></text>客服
      </button>
      <!-- #endif -->
      <navigator class="icons-button" url="/pages/cart/cart2" open-type="navigate">
        <text class="icon-cart"></text>购物车
      </navigator>
    </view>
    <view class="buttons">
      <view class="addcart"> 加入购物车 </view>
      <view class="payment"> 立即购买 </view>
    </view>
  </view>

  <uni-popup ref="popup" type="bottom" background-color="#ffffff">
    <AddressPanel
      :addressList="addressList"
      @handleConfirm="handleConfirm"
      v-if="popupName === 'address'"
    />
    <ServicePanel v-if="popupName === 'service'" />
  </uni-popup>
</template>

<script lang="ts" setup>
import { getGoodDetailApi } from '@/api/goodDetail'
import type { GoodsResult } from '@/types/goods'
import { onLoad } from '@dcloudio/uni-app'
import { ref, type PropType, computed } from 'vue'
import AddressPanel from './components/AddressPanel.vue'
import ServicePanel from './components/ServicePanel.vue'
import type { AddressResult } from '@/types/menber'
import { getAddressApi } from '@/api/profile'

const good = defineProps({
  id: {
    type: Number as PropType<number>,
    default: 0,
  },
})

const goodDetail = ref(<GoodsResult>{})
const currentIndex = ref(0)
// 弹出框组件实例
const popup = ref<{
  open: (type?: UniHelper.UniPopupType) => void
  close: () => void
}>()
const popupName = ref<'address' | 'service'>()
const addressList = ref<Array<AddressResult>>([])
const receiverValue = ref('')
const fullLocationValue = ref('')
const addressValue = ref('')

onLoad(async () => {
  await Promise.all([getGoodDetail(), getAddressList()])
})
// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()

async function getGoodDetail() {
  const res = await getGoodDetailApi(good.id)
  goodDetail.value = res.result
}

const onChange: UniHelper.SwiperOnChange = (ev) => {
  currentIndex.value = ev.detail.current
}

const totalPic = computed(() => {
  if (goodDetail.value.mainPictures && goodDetail.value.mainPictures.length > 0) {
    return goodDetail.value.mainPictures.length
  } else {
    return 0
  }
})

// 点击图片时大图预览
function onTapImage(url: string) {
  uni.previewImage({
    current: url,
    urls: goodDetail.value!.mainPictures,
  })
}

function openPopup(name: typeof popupName.value) {
  popupName.value = name
  popup.value?.open()
}

async function getAddressList() {
  const res = await getAddressApi()
  if (res.code === '1') {
    addressList.value = res.result
  }
}

function handleConfirm(address: AddressResult) {
  addressValue.value = address.address
  receiverValue.value = address.receiver
  fullLocationValue.value = address.fullLocation
  popup.value?.close()
}
</script>

<style lang="scss" scoped>
.goods {
  background-color: #fff;
  .preview {
    height: 750rpx;
    position: relative;
    .image {
      width: 750rpx;
      height: 750rpx;
    }

    .indicator {
      height: 40rpx;
      padding: 0 24rpx;
      line-height: 40rpx;
      border-radius: 30rpx;
      color: #fff;
      font-family: Arial, Helvetica, sans-serif;
      background-color: rgba(0, 0, 0, 0.3);
      position: absolute;
      bottom: 30rpx;
      right: 30rpx;
      .current {
        font-size: 26rpx;
      }
      .split {
        font-size: 24rpx;
        margin: 0 1rpx 0 2rpx;
      }
      .total {
        font-size: 24rpx;
      }
    }
  }
  .meta {
    position: relative;
    border-bottom: 1rpx solid #eaeaea;
    .price {
      height: 130rpx;
      padding: 25rpx 30rpx 0;
      color: #fff;
      font-size: 34rpx;
      box-sizing: border-box;
      background-color: #35c8a9;
    }
    .number {
      font-size: 56rpx;
    }
    .brand {
      width: 160rpx;
      height: 80rpx;
      overflow: hidden;
      position: absolute;
      top: 26rpx;
      right: 30rpx;
    }
    .name {
      max-height: 88rpx;
      line-height: 1.4;
      margin: 20rpx;
      font-size: 32rpx;
      color: #333;
    }
    .desc {
      line-height: 1;
      padding: 0 20rpx 30rpx;
      font-size: 24rpx;
      color: #cf4444;
    }
  }

  .action {
    padding-left: 20rpx;
    margin-bottom: 90rpx;
    .item {
      height: 90rpx;
      padding-right: 60rpx;
      border-bottom: 1rpx solid #eaeaea;
      font-size: 26rpx;
      color: #333;
      position: relative;
      display: flex;
      align-items: center;
      &:last-child {
        border-bottom: 0 none;
      }
    }
    .label {
      width: 60rpx;
      color: #898b94;
      margin: 0 16rpx 0 10rpx;
    }
    .text {
      flex: 1;
      -webkit-line-clamp: 1;
    }
  }
}

/* 底部工具栏 */
.toolbar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: calc((var(--window-bottom)));
  z-index: 1;
  background-color: #fff;
  height: 100rpx;
  padding: 0 20rpx;
  border-top: 1rpx solid #eaeaea;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: content-box;
  .buttons {
    display: flex;
    & > view {
      width: 220rpx;
      text-align: center;
      line-height: 72rpx;
      font-size: 26rpx;
      color: #fff;
      border-radius: 72rpx;
    }
    .addcart {
      background-color: #ffa868;
    }
    .payment {
      background-color: #27ba9b;
      margin-left: 20rpx;
    }
  }
  .icons {
    padding-right: 20rpx;
    display: flex;
    align-items: center;
    flex: 1;
    // 兼容 H5 端和 App 端的导航链接样式
    .navigator-wrap,
    .icons-button {
      flex: 1;
      text-align: center;
      line-height: 1.4;
      padding: 0;
      margin: 0;
      border-radius: 0;
      font-size: 20rpx;
      color: #333;
      background-color: #fff;
      &::after {
        border: none;
      }
    }
    text {
      display: block;
      font-size: 34rpx;
    }
  }
}
</style>
