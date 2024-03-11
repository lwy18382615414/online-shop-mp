<template name="skeleton">
  <view class="sk-container">
    <view class="viewport viewport data-v-4046d630 data-v-4046d630">
      <view class="search search data-v-4046d630 data-v-4046d630">
        <view class="uni-easyinput easyinput--uni-easyinput" style="color: #333">
          <view
            class="uni-easyinput__content easyinput--uni-easyinput__content is-input-border easyinput--is-input-border"
            style="border-color: #e5e5e5; background-color: #fff"
          >
            <view
              is="node-modules/@dcloudio/uni-ui/lib/uni-icons/uni-icons"
              class="content-clear-icon easyinput--content-clear-icon"
            >
              <text
                class="uni-icons icons--uni-icons uniui-search icons--uniui-search sk-pseudo sk-pseudo-circle"
                style="color: #c0c4cc; font-size: 22px"
              ></text>
            </view>
            <view
              class="uni-easyinput__content-input easyinput--uni-easyinput__content-input sk-image"
              maxlength="140"
              name="true"
              placeholder="搜索商品"
              placeholder-class="uni-easyinput__placeholder-class"
              placeholder-style="true"
              type="text"
              value="true"
            ></view>
          </view>
        </view>
      </view>
      <view class="category-container category-container data-v-4046d630 data-v-4046d630">
        <scroll-view :scroll-y="true" class="primary primary data-v-4046d630 data-v-4046d630">
          <view
            class="item data-v-4046d630 sk-transparent sk-text-14-2857-391 sk-text"
            style="background-position-x: 50%"
            >居家</view
          >
          <view
            class="item data-v-4046d630 active sk-transparent sk-text-14-2857-796 sk-text"
            style="background-position-x: 50%"
            >美食</view
          >
          <view
            class="item data-v-4046d630 sk-transparent sk-text-14-2857-906 sk-text"
            style="background-position-x: 50%"
            >服饰</view
          >
          <view
            class="item data-v-4046d630 sk-transparent sk-text-14-2857-65 sk-text"
            style="background-position-x: 50%"
            >母婴</view
          >
          <view
            class="item data-v-4046d630 sk-transparent sk-text-14-2857-584 sk-text"
            style="background-position-x: 50%"
            >个护</view
          >
          <view
            class="item data-v-4046d630 sk-transparent sk-text-14-2857-982 sk-text"
            style="background-position-x: 50%"
            >严选</view
          >
          <view
            class="item data-v-4046d630 sk-transparent sk-text-14-2857-585 sk-text"
            style="background-position-x: 50%"
            >数码</view
          >
          <view
            class="item data-v-4046d630 sk-transparent sk-text-14-2857-920 sk-text"
            style="background-position-x: 50%"
            >运动</view
          >
          <view
            class="item data-v-4046d630 sk-transparent sk-text-14-2857-173 sk-text"
            style="background-position-x: 50%"
            >杂项</view
          >
        </scroll-view>
        <scroll-view
          :enable-back-to-top="true"
          :scroll-y="true"
          class="secondary secondary data-v-4046d630 data-v-4046d630"
        >
          <view is="components/CustomSwiper" class="banner banner data-v-4046d630 data-v-4046d630">
            <view
              class="carousel CustomSwiper--carousel data-v-98925bff CustomSwiper--data-v-98925bff"
            >
              <swiper
                :autoplay="false"
                :circular="true"
                class="data-v-98925bff CustomSwiper--data-v-98925bff"
                :interval="3000"
                :current="0"
              ></swiper>
              <view
                class="indicator CustomSwiper--indicator data-v-98925bff CustomSwiper--data-v-98925bff"
              >
                <text
                  class="dot CustomSwiper--dot data-v-98925bff CustomSwiper--data-v-98925bff"
                ></text>
                <text
                  class="dot CustomSwiper--dot data-v-98925bff CustomSwiper--data-v-98925bff"
                ></text>
                <text
                  class="dot CustomSwiper--dot data-v-98925bff CustomSwiper--data-v-98925bff"
                ></text>
                <text
                  class="dot CustomSwiper--dot data-v-98925bff CustomSwiper--data-v-98925bff active CustomSwiper--active"
                ></text>
                <text
                  class="dot CustomSwiper--dot data-v-98925bff CustomSwiper--data-v-98925bff"
                ></text>
              </view>
            </view>
          </view>
          <view class="panel panel data-v-4046d630 data-v-4046d630">
            <view class="title title data-v-4046d630 data-v-4046d630">
              <text class="name data-v-4046d630 sk-transparent sk-text-14-2857-903 sk-text"
                >南北干货</text
              >
              <navigator
                class="more data-v-4046d630 sk-transparent sk-text-14-2857-412 sk-text"
                hover-class="none"
                >全部</navigator
              >
            </view>
            <view class="section section data-v-4046d630 data-v-4046d630">
              <navigator class="goods goods data-v-4046d630 data-v-4046d630" hover-class="none">
                <image class="image data-v-4046d630 sk-image"></image>
                <view
                  class="name ellipsis data-v-4046d630 sk-transparent sk-text-14-2857-554 sk-text"
                  >古田糯耳150克</view
                >
                <view class="price price data-v-4046d630 data-v-4046d630">
                  <text class="symbol data-v-4046d630 sk-transparent sk-opacity">¥</text>
                  <text class="number data-v-4046d630 sk-transparent sk-text-14-2857-82 sk-text"
                    >26.00</text
                  >
                </view>
              </navigator>
              <navigator class="goods goods data-v-4046d630 data-v-4046d630" hover-class="none">
                <image class="image data-v-4046d630 sk-image"></image>
                <view
                  class="name ellipsis data-v-4046d630 sk-transparent sk-text-14-2857-636 sk-text"
                  >原产兰州，气清味美，甜百合干168克</view
                >
                <view class="price price data-v-4046d630 data-v-4046d630">
                  <text class="symbol data-v-4046d630 sk-transparent sk-opacity">¥</text>
                  <text class="number data-v-4046d630 sk-transparent sk-text-14-2857-528 sk-text"
                    >42.80</text
                  >
                </view>
              </navigator>
              <navigator class="goods goods data-v-4046d630 data-v-4046d630" hover-class="none">
                <image class="image data-v-4046d630 sk-image"></image>
                <view
                  class="name ellipsis data-v-4046d630 sk-transparent sk-text-14-2857-727 sk-text"
                  >竹荪25克</view
                >
                <view class="price price data-v-4046d630 data-v-4046d630">
                  <text class="symbol data-v-4046d630 sk-transparent sk-opacity">¥</text>
                  <text class="number data-v-4046d630 sk-transparent sk-text-14-2857-142 sk-text"
                    >28.00</text
                  >
                </view>
              </navigator>
              <navigator class="goods goods data-v-4046d630 data-v-4046d630" hover-class="none">
                <image class="image data-v-4046d630 sk-image"></image>
                <view
                  class="name ellipsis data-v-4046d630 sk-transparent sk-text-14-2857-381 sk-text"
                  >无芯软糯的萌妹子，建宁莲子228克</view
                >
                <view class="price price data-v-4046d630 data-v-4046d630">
                  <text class="symbol data-v-4046d630 sk-transparent sk-opacity">¥</text>
                  <text class="number data-v-4046d630 sk-transparent sk-text-14-2857-375 sk-text"
                    >45.00</text
                  >
                </view>
              </navigator>
              <navigator class="goods goods data-v-4046d630 data-v-4046d630" hover-class="none">
                <image class="image data-v-4046d630 sk-image"></image>
                <view
                  class="name ellipsis data-v-4046d630 sk-transparent sk-text-14-2857-33 sk-text"
                  >产自核心产区宁夏中宁，枸杞258克</view
                >
                <view class="price price data-v-4046d630 data-v-4046d630">
                  <text class="symbol data-v-4046d630 sk-transparent sk-opacity">¥</text>
                  <text class="number data-v-4046d630 sk-transparent sk-text-14-2857-995 sk-text"
                    >36.00</text
                  >
                </view>
              </navigator>
              <navigator class="goods goods data-v-4046d630 data-v-4046d630" hover-class="none">
                <image class="image data-v-4046d630 sk-image"></image>
                <view
                  class="name ellipsis data-v-4046d630 sk-transparent sk-text-14-2857-461 sk-text"
                  >楼兰灰枣328克</view
                >
                <view class="price price data-v-4046d630 data-v-4046d630">
                  <text class="symbol data-v-4046d630 sk-transparent sk-opacity">¥</text>
                  <text class="number data-v-4046d630 sk-transparent sk-text-14-2857-101 sk-text"
                    >26.00</text
                  >
                </view>
              </navigator>
              <navigator class="goods goods data-v-4046d630 data-v-4046d630" hover-class="none">
                <image class="image data-v-4046d630 sk-image"></image>
              </navigator>
              <navigator class="goods goods data-v-4046d630 data-v-4046d630" hover-class="none">
                <image class="image data-v-4046d630 sk-image"></image>
              </navigator>
            </view>
          </view>
        </scroll-view>
      </view>
    </view>
  </view>
</template>
<style lang="scss" scoped>
.sk-transparent {
  color: transparent !important;
}
.sk-text-14-2857-391 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}
.sk-text-14-2857-796 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-906 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-65 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-584 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-982 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-585 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-920 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-173 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-903 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 39.2rpx;
  position: relative !important;
}
.sk-text-14-2857-412 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-554 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 30.8rpx;
  position: relative !important;
}
.sk-opacity {
  opacity: 0 !important;
}
.sk-text-14-2857-82 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-636 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 30.8rpx;
  position: relative !important;
}
.sk-text-14-2857-528 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-727 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 30.8rpx;
  position: relative !important;
}
.sk-text-14-2857-142 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-381 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 30.8rpx;
  position: relative !important;
}
.sk-text-14-2857-375 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-33 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 30.8rpx;
  position: relative !important;
}
.sk-text-14-2857-995 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-461 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 30.8rpx;
  position: relative !important;
}
.sk-text-14-2857-101 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-image {
  background: #efefef !important;
}
.sk-pseudo::before,
.sk-pseudo::after {
  background: #efefef !important;
  background-image: none !important;
  color: transparent !important;
  border-color: transparent !important;
}
.sk-pseudo-rect::before,
.sk-pseudo-rect::after {
  border-radius: 0 !important;
}
.sk-pseudo-circle::before,
.sk-pseudo-circle::after {
  border-radius: 50% !important;
}
.sk-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: transparent;
}
</style>
