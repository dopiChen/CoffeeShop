// pages/cart/cart.ts

import {ProductItem} from '../../interfaces/product'
Page({
  data: {
    cartItems: [] as CartItem[],

    allChecked: false,
    checkedCount: 0,
    totalPrice: 0,
    isEditMode: false
  },

  onLoad() {
    const app = getApp()
   // 类型转换初始化
   const initializedItems = app.globalData.cartItems.map((item: { checked: any; count: any }) => ({
    ...item,
    checked: item.checked || false, // 兼容已有数据
    count: item.count || 1 // 默认数量为1
  })) as CartItem[]

  this.setData({ cartItems: initializedItems }, () => {
    this.calculateTotal()
  })
  },
//  返回

 goBack(){
    wx.navigateBack();
 },
  // 单选切换
  toggleCheck(e: any) {
    const index = e.currentTarget.dataset.index
    const items = this.data.cartItems
    items[index].checked = !items[index].checked
    this.updateCart(items)
  },

  // 全选切换
  toggleAllCheck() {
    const allChecked = !this.data.allChecked
    const items = this.data.cartItems.map(item => ({
      ...item,
      checked: allChecked
    }))
    this.updateCart(items)
  },

  // 修改数量
  changeCount(e: any) {
    const { index, type } = e.currentTarget.dataset
    const items = [...this.data.cartItems]
    
    if (type === 'plus') {
      items[index].count += 1
    } else if (type === 'minus' && items[index].count > 1) {
      items[index].count -= 1
    }
    
    this.updateCart(items)
  },

  // 删除单个商品
  deleteItem(e: any) {
    const index = e.currentTarget.dataset.index
    const app = getApp()
    app.globalData.cartItems.splice(index, 1)
    this.updateCart([...app.globalData.cartItems])
  },

  // 切换编辑模式
  toggleEditMode() {
    this.setData({ isEditMode: !this.data.isEditMode })
  },

  // 更新购物车数据
  updateCart(items: CartItem[]) {
    const app = getApp()
    app.globalData.cartItems = items
    this.setData({ cartItems: items }, () => {
      this.calculateTotal()
    })
  },

  // 删除选中
deleteCheckedItems() {
  const app = getApp()
  
  // 过滤出未选中的商品
  const remainingItems = app.globalData.cartItems.filter((item: { checked: any }) => !item.checked)
  
  if (remainingItems.length === app.globalData.cartItems.length) {
    wx.showToast({
      title: '请先选择要删除的商品',
      icon: 'none'
    })
    return
  }

  // 更新全局数据
  app.globalData.cartItems = remainingItems
  
  // 更新页面数据并重新计算
  this.setData({
    cartItems: remainingItems,
    isEditMode: remainingItems.length === 0 ? false : this.data.isEditMode
  }, () => {
    this.calculateTotal()
    wx.showToast({
      title: `已删除${app.globalData.cartItems.length - remainingItems.length}件商品`,
      icon: 'success'
    })
  })
},

  // 计算总价和选中状态
  calculateTotal() {
    const checkedItems = this.data.cartItems.filter(item => item.checked)
    const total = checkedItems.reduce((sum, item) => sum + item.price * item.count, 0)
    const allChecked = this.data.cartItems.length > 0 && 
      this.data.cartItems.every(item => item.checked)
    
    this.setData({
      totalPrice: total,
      checkedCount: checkedItems.length,
      allChecked
    })
  },

  // 结算跳转
  handleCheckout() {
    if (this.data.checkedCount === 0) {
      wx.showToast({ title: '请选择商品', icon: 'none' })
      return
    }
    wx.navigateTo({ url: '/pages/order/order' })
  }
})

interface CartItem extends ProductItem {
  checked: boolean
  count: number
}