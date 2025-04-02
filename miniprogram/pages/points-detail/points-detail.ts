// pages/points-detail/index.ts
import { mockRecords } from '../../mock/index'
import {PointsRecord} from '../../interfaces/points'

Page({
  data: {
    totalPoints: 0,
    records: [] as PointsRecord[],
    loading: true
  },

  onLoad() {
    this.loadData()
  },

  loadData() {
    // 模拟接口请求
    this.setData({ loading: true })
    
    setTimeout(() => {
      this.setData({
        totalPoints: mockRecords.reduce((sum, item) => 
          item.type === 'add' ? sum + item.points : sum - item.points, 0),
        records: mockRecords,
        loading: false
      })
    }, 1500)
  },

  // onPullDownRefresh() {
  //   this.loadData(() => wx.stopPullDownRefresh())
  // },

  goBack() {
    wx.navigateBack()
  }
})