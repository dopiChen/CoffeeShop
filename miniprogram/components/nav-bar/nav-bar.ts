// components/nav-bar/index.ts
Component({
  properties: {
    title: {
      type: String,
      value: '标题'
    }
  },

  methods: {
    handleBack() {
      this.triggerEvent('back')
      wx.navigateBack()
    }
  }
})