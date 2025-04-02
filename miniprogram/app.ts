// app.ts
import {ProductItem} from '../miniprogram/interfaces/product'

import {AddressItem} from '../miniprogram/interfaces/address'


App<IAppOption>({
  globalData: {
    cartItems: [] as ProductItem[],
    addressList:[] as AddressItem[]
  } as unknown as IAppOption["globalData"], 
  /**
   * 小程序启动时执行的函数
   * - 展示本地存储能力：获取本地存储的日志数组，将当前时间戳添加到数组开头，然后重新设置本地存储的日志。
   * - 登录：调用微信登录接口，获取登录凭证 code，并在控制台输出。然后将 code 发送到后台以换取 openId、sessionKey 和 unionId。
   */
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        console.log(res.code)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      },
    })
  },
})