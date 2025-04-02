// pages/balance/index.ts
import {BalanceRecord} from '../../interfaces/balance'
Page({

  data:{
      balance:"3580.50",
      records: [] as BalanceRecord[],
      headerInteger:0
      // 添加整数部分数值转换
    
  },

  onLoad() {
    this.setData({
      loading: false,
      balance: "3580.50",  // 保持字符串显示
      // 添加整数部分数值转换
      headerInteger: parseInt(this.data.balance.split('.')[0])
    })
  },
  goBack() {
    wx.navigateBack(); // 返回上一页（即profile页面）
  },
  handleRecharge() {
    wx.navigateTo({
      url: '/pages/recharge/index'
    })
  }
})