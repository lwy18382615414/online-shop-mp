<template>
  <view class="viewport">
    <view class="logo">
      <image
        src="https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/images/logo_icon.png"
      ></image>
    </view>
    <view class="login">
      <!-- 网页端表单登录 -->
      <!-- #ifdef H5 -->
      <!-- <input v-model="form.account" class="input" type="text" placeholder="请输入用户名/手机号码" />
      <input v-model="form.password" class="input" type="text" password placeholder="请输入密码" />
      <button @tap="onSubmit" class="button phone">登录</button> -->
      <!-- #endif -->

      <!-- 小程序端授权登录 -->
      <!-- #ifdef MP-WEIXIN -->
      <view class="button-privacy-wrap">
        <button
          :hidden="isAgreePrivacy"
          class="button-opacity button phone"
          @tap="checkedAgreePrivacy"
        >
          请先阅读并勾选协议
        </button>
        <button class="button phone" open-type="getPhoneNumber" @getphonenumber="onGetphonenumber">
          <text class="icon icon-phone"></text>
          手机号快捷登录
        </button>
      </view>
      <!-- #endif -->
      <view class="extra">
        <view class="caption">
          <text>其他登录方式</text>
        </view>
        <view class="options">
          <!-- 通用模拟登录 -->
          <button @tap="onGetphonenumberSimple">
            <text class="icon icon-phone">模拟快捷登录</text>
          </button>
        </view>
      </view>
      <view class="tips">
        <label class="label" @tap="isAgreePrivacy = !isAgreePrivacy">
          <radio class="radio" color="#28bb9c" :checked="isAgreePrivacy" />
          <text>登录/注册即视为你同意专属铺子</text>
        </label>
        <navigator class="link" hover-class="none" url="./protocal">《服务条款》</navigator>
        和
        <text class="link">《隐私协议》</text>
      </view>
    </view>
  </view>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import { wxLogin, wxLoginSimple } from '@/api/login'
import { useMemberStore } from '@/stores'
import type { LoginResult } from '@/types/menber'

const isAgreePrivacy = ref(true)
const code = ref('')

onLoad(async () => {
  const res = await wx.login()
  code.value = res.code
})

function checkedAgreePrivacy() {}

// 需要小程序认证
const onGetphonenumber: UniHelper.ButtonOnGetphonenumber = async (ev) => {
  const encryptedData = ev.detail.encryptedData!
  const iv = ev.detail.iv!
  const res = await wxLogin({
    code: code.value,
    encryptedData,
    iv,
  })
  loginSuccess(res.result)
}

// 模拟手机号码快捷登录
async function onGetphonenumberSimple() {
  const res = await wxLoginSimple('18382615414')
  if (res.code === '1') {
    loginSuccess(res.result)
  }
}

// 登录成功的回调函数
function loginSuccess(profile: LoginResult) {
  uni.showToast({
    icon: 'success',
    title: '登录成功',
  })
  const menberStore = useMemberStore()
  menberStore.setProfile(profile)
  setTimeout(() => {
    // 跳转到我的
    // uni.switchTab({ url: '/pages/my/my' })
    uni.navigateBack()
  }, 500)
}
</script>

<style lang="scss">
page {
  height: 100%;
}

.viewport {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 20rpx 40rpx;
}

.logo {
  flex: 1;
  text-align: center;
  image {
    width: 220rpx;
    height: 220rpx;
    margin-top: 15vh;
  }
}

.login {
  display: flex;
  flex-direction: column;
  height: 60vh;
  padding: 40rpx 20rpx 20rpx;

  .input {
    width: 100%;
    height: 80rpx;
    font-size: 28rpx;
    border-radius: 72rpx;
    border: 1px solid #ddd;
    padding-left: 30rpx;
    margin-bottom: 20rpx;
  }

  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 80rpx;
    font-size: 28rpx;
    border-radius: 72rpx;
    color: #fff;
    .icon {
      font-size: 40rpx;
      margin-right: 6rpx;
    }
  }

  .phone {
    background-color: #28bb9c;
  }

  .wechat {
    background-color: #06c05f;
  }

  .extra {
    flex: 1;
    padding: 70rpx 70rpx 0;
    .caption {
      width: 440rpx;
      line-height: 1;
      border-top: 1rpx solid #ddd;
      font-size: 26rpx;
      color: #999;
      position: relative;
      text {
        transform: translate(-40%);
        background-color: #fff;
        position: absolute;
        top: -12rpx;
        left: 50%;
      }
    }

    .options {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 70rpx;
      button {
        padding: 0;
        background-color: transparent;
        &::after {
          border: none;
        }
      }
    }

    .icon {
      font-size: 24rpx;
      color: #444;
      display: flex;
      flex-direction: column;
      align-items: center;

      &::before {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 80rpx;
        height: 80rpx;
        margin-bottom: 6rpx;
        font-size: 40rpx;
        border: 1rpx solid #444;
        border-radius: 50%;
      }
    }
    .icon-weixin::before {
      border-color: #06c05f;
      color: #06c05f;
    }
  }
}

@keyframes animate__shakeY {
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(0, -5rpx);
  }
  100% {
    transform: translate(0, 0);
  }
}

.animate__shakeY {
  animation: animate__shakeY 0.2s ease-in-out 3;
}

.button-privacy-wrap {
  position: relative;
  .button-opacity {
    opacity: 0;
    position: absolute;
    z-index: 1;
  }
}

.tips {
  position: absolute;
  bottom: 80rpx;
  left: 20rpx;
  right: 20rpx;
  font-size: 22rpx;
  color: #999;
  text-align: center;

  .radio {
    transform: scale(0.6);
    margin-right: -4rpx;
    margin-top: -4rpx;
    vertical-align: middle;
  }

  .link {
    display: inline;
    color: #28bb9c;
  }
}
</style>
