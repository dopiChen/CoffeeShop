Component({
  properties: {
    showModal: {
      type: Boolean,
      value: false
    }
  },

  data: {
    step: 'phone', // phone | verify
    phoneNumber: '',
    verificationCode: '',
    countdown: 60,
    passwd:''
  },

  methods: {
    updatePhone(e:WechatMiniprogram.Input) {
      this.setData({ phoneNumber: e.detail.value });
    },
    
    // 关闭弹窗
  closeLoginModal() {
    this.setData({ showModal: false });
  },

    sendVerificationCode() {
      if (!this.data.phoneNumber) {
        wx.showToast({ title: '请输入手机号', icon: 'none' });
        return;
      }
      this.setData({ step: 'verify', countdown: 60 });
      this.startCountdown();
    },

    updateCode(e:WechatMiniprogram.Input) {
      this.setData({ verificationCode: e.detail.value });
    },

    updatePasswd(e:WechatMiniprogram.Input) {
      this.setData({ passwd: e.detail.value });
    },

    verifyCode() {
      if (this.data.verificationCode.length !== 6) {
        wx.showToast({ title: '请输入正确的验证码', icon: 'none' });
        return;
      }

      // 验证成功后，通知父组件
      this.triggerEvent('onLoginSuccess', { phone: this.data.phoneNumber });

      // 关闭弹窗
      this.setData({ step: 'phone' });
      this.triggerEvent('onClose');
    },

    startCountdown() {
      const timer = setInterval(() => {
        if (this.data.countdown > 0) {
          this.setData({ countdown: this.data.countdown - 1 });
        } else {
          clearInterval(timer);
        }
      }, 1000);
    }
  }
});
