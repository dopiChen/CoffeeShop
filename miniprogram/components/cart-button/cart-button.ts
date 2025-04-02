// components/cart-button/index.js
Component({
  // 新增监听器
  lifetimes: {
    attached() {
      const app = getApp()
      // 监听全局购物车变化
      app.watchCartChange = (count: number) => {
        this.setData({ count })
      }
    }
  },

  // 新增方法
  methods: {
    navigateToCart() {
      wx.navigateTo({ url: '/pages/cart/cart' })
    }
  }
})