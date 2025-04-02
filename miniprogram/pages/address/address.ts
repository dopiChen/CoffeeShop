// pages/address/address.ts

import {AddressItem} from '../../interfaces/address'
const addressList: AddressItem[] = [
  {
    id: 'addr_001',
    name: '张三',
    phone: '13800138000',
    province: '广东省',
    city: '深圳市',
    district: '南山区',
    detail: '科苑南路1001号华润大厦18层',
    isDefault: true,
    latitude: 22.534996,
    longitude: 113.950526
  },
  {
    id: 'addr_002',
    name: '李四',
    phone: '13912345678',
    province: '北京市',
    city: '北京市',
    district: '朝阳区',
    detail: '建国路87号华贸中心3座2206',
    isDefault: false
  }
] as AddressItem[];

Page({
  data: {
    addressList: addressList
  },

  onLoad() {
    // this.loadAddressList()
  },

  // 加载地址列表
  loadAddressList() {
    const app = getApp()
    this.setData({
      addressList: app.globalData.addressList || []
    })
  },

  // 启动添加流程
  startAddAddress() {
    wx.chooseLocation({
      success: (res) => {
        wx.navigateTo({
          url: `/pages/address/edit?lat=${res.latitude}&lng=${res.longitude}&name=${res.name}`
        })
      },
      fail: () => {
        wx.navigateTo({ url: '/pages/address/edit' })
      }
    })
  },

  // 删除地址
  deleteAddress(e: any) {
    const id = e.currentTarget.dataset.id
    wx.showModal({
      title: '确认删除',
      content: '确定要删除该地址吗？',
      success: (res) => {
        if (res.confirm) {
          const app = getApp()
          app.globalData.addressList = this.data.addressList.filter(item => item.id !== id)
          this.loadAddressList()
        }
      }
    })
  },

  //返回
  goBack(){

    wx.navigateBack();
  },

  // 设置默认地址
  setDefaultAddress(id: string) {
    const app = getApp()
    app.globalData.addressList = app.globalData.addressList.map((item: { id: string; }) => ({
      ...item,
      isDefault: item.id === id
    }))
    this.loadAddressList()
  }
})


