Component({
  properties: {
    amount: {
      type: Number,
      value: 0
    },
    type: {
      type: String,
      value: 'cash' // cash/discount
    },
    threshold: {
      type: Number,
      value: 0
    },
    title: {
      type: String,
      value: '通用优惠券'
    },
    validDate: {
      type: String,
      value: '2024-12-31'
    },
    statusClass: {
      type: String,
      value: 'active'
    },
    tagText: {
      type: String,
      value: ''
    },
    isExpired: {
      type: Boolean,
      value: false
    },
    showCorner: {
      type: Boolean,
      value: true
    }
  },

  methods: {
    onTap() {
      this.triggerEvent('couponclick', {
        couponId: this.data.couponId
      })
    }
  }
})