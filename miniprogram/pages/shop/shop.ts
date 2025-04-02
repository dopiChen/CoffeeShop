// pages/shop/shop.js

import {ProductItem} from '../../interfaces/product'
Page({
  data: {
    loading: true,
    activeCategory: 0,
    productList: [] as ProductItem[],
    categories: [
      { id: 0, name: '全部' },
      { id: 1, name: '咖啡' },
      { id: 2, name: '茶饮' },
      { id: 3, name: '杯子' }
    ]
  },

  onLoad() {
    this.loadProducts()
  },

  async loadProducts() {
    this.setData({ loading: true })
    
    // 模拟API请求
    const mockData = [...Array(10)].map((_,i) => ({
      id: i,
      name: `精品咖啡豆 ${i+1}号`,
      price: 68.00 + i*10,
      image: '../../assets/images/example-product.jpg',
      stock: 10 - i,
      sales: Math.floor(Math.random()*100)
    }))

    this.setData({
      productList: mockData as ProductItem[],
      loading: false
    })
  },

  switchCategory(e: { currentTarget: { dataset: { id: any } } }) {
    const id = e.currentTarget.dataset.id
    this.setData({ activeCategory: id })
    // 执行分类筛选逻辑
  },
//添加到购物车
  addToCart(e: WechatMiniprogram.CustomEvent) {
    const item = e.detail as ProductItem
    const app = getApp()
    
    // 更新全局数据
    app.globalData.cartItems.push(item)
    // 触发购物车更新
    if (app.watchCartChange) {
      app.watchCartChange(app.globalData.cartItems.length)
    }
    
    // 显示动画效果
    wx.showToast({ title: `已添加${item.name}` })
  }
})