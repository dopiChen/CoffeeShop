// pages/home/home.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgSrcs: [
      "/assets/images/banner1.jpg",
      "/assets/images/banner2.jpg",
      "/assets/images/banner3.png",
    ],
    current: 0,
    autoplay: true,
    duration: 500,
    interval: 3000,
    navigation: { type: "dots" },
    swiperImageProps: { mode: "aspectFit" },

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})