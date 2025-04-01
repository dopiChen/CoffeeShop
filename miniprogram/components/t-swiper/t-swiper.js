// t-swiper.js
Component({
  properties: {
    list: {
      type: Array,
      value: []
    },
    autoplay: {
      type: Boolean,
      value: true
    },
    interval: {
      type: Number,
      value: 3000
    },
    duration: {
      type: Number,
      value: 500
    },
    loop: {
      type: Boolean,
      value: true
    },
    indicatorDots: {
      type: Boolean,
      value: true
    },
    indicatorColor: {
      type: String,
      value: '#fff'
    },
    indicatorActiveColor: {
      type: String,
      value: '#ff5000'
    }
  },
  data: {
    currentIndex: 0
  },
  methods: {
    onChange(e) {
      this.setData({
        currentIndex: e.detail.current
      });
      this.triggerEvent('change', { current: e.detail.current });
    },
    onTap(e) {
      const { index } = e.currentTarget.dataset;
      this.triggerEvent('click', { index });
    }
  }
});
