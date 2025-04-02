// pages/profile/profile.ts
Page({
  data: {
      userInfo: {},
      isLoggedIn: false,
      points: 80,
      balance: 100,
      coupons: 3,
      showModal: false
  },
  

  onLoad() {
      this.checkLoginStatus();
  },
  openLoginModal() {
    this.setData({ showModal: true });
  },

  checkLoginStatus() {
      const userInfo = wx.getStorageSync('userInfo');
      if (userInfo) {
          this.setData({
              userInfo,
              isLoggedIn: true,
              points: 100, // 模拟积分
              balance: 50, // 模拟余额
              coupons: 3   // 模拟优惠券
          });
      }
  },

  login() {
      wx.getUserProfile({
          desc: '用于完善用户资料',
          success: (res) => {
              wx.setStorageSync('userInfo', res.userInfo);
              this.setData({
                  userInfo: res.userInfo,
                  isLoggedIn: true
              });
          }
      });
  },
  navigateToPoints() {
    wx.navigateTo({
      url: '/pages/points-detail/points-detail'
    });
  },
  
  goToBalance() {
    wx.navigateTo({
      url: '/pages/balance/balance'
    });
  },
  
  goToCoupons() {
    wx.navigateTo({
      url: '/pages/coupons/coupons'
    });
  },


  navigateToOrder() {
      wx.navigateTo({
          url: '/pages/orders/orders'
      });
  },

  navigateToCoupons() {
      wx.navigateTo({
          url: '/pages/coupons/coupons'
      });
  },

  navigateToProfile() {
      wx.navigateTo({
          url: '/pages/profile-edit/profile-edit'
      });
  },
  navigateToAddress() {
    wx.navigateTo({
        url: '/pages/address/address'
    });
},
  navigateToSupport() {
      wx.navigateTo({
          url: '/pages/support/support'
      });
  },

  navigateToLanguage() {
      wx.navigateTo({
          url: '/pages/language/language'
      });
  }
});
