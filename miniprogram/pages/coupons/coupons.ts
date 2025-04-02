
import { mockCoupons } from '../../mock/index'
import { CouponItem } from '../../interfaces/coupon';
Page({
  data: {
    loading: true,
    couponList: [] as CouponItem[],
    isEnd: false
  },
  goBack() {
    wx.navigateBack(); // 返回上一页（即profile页面）
  },
  onLoad() {
    this.loadData()
  },

  async loadData() {
    // 模拟加载延迟
    this.setData({ loading: true })
    
    // 实际应替换为接口请求
    setTimeout(() => {
      this.setData({
        loading: false,
        couponList: mockCoupons as CouponItem[] // 测试空状态时设为空数组
       
      })
    }, 1500)

    console.log(mockCoupons.length);
  },

  // 下拉刷新
  onRefresh() {
    if (this.data.loading) return
    this.loadData()
  },

  // 跳转领券
  goToGetCoupons() {
    wx.navigateTo({ url: '/pages/coupons/get-coupons' })
  }
})