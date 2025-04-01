Page({
  data: {
    userInfo: {
      avatar: "/assets/images/default_avatar.jpeg",
      nickName: "",
      gender: 0,
      phone: "",
      birthday: "",
      joinDate: "2023-01-01",
      id: "32398",
    },
    genderOptions: ["未知", "男", "女"],
  },

  goBack() {
    wx.navigateBack(); // 返回上一页（即profile页面）
  },

  changeAvatar() {
    wx.chooseMedia({
      count: 1,
      mediaType: ["image"],
      sourceType: ["album", "camera"],
      success: (res) => {
        this.setData({
          "userInfo.avatar": res.tempFiles[0].tempFilePath,
        });
      },
    });
  },

  updateNickname(e:WechatMiniprogram.Input) {
    this.setData({
      "userInfo.nickName": e.detail.value,
    });
  },

  updateGender(e:WechatMiniprogram.Input) {
    this.setData({
      "userInfo.gender": e.detail.value,
    });
  },

  updatePhone(e:WechatMiniprogram.Input) {
    this.setData({
      "userInfo.phone": e.detail.value,
    });
  },

  updateBirthday(e:WechatMiniprogram.Input) {
    this.setData({
      "userInfo.birthday": e.detail.value,
    });
  },

  saveProfile() {
    wx.showToast({
      title: "保存成功",
      icon: "success",
    });
    // 这里可以调用后端接口保存数据
  },
});
