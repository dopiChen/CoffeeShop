// components/points-record/index.ts
Component({
  properties: {
    product: {
      type: String,
      value: '默认商品'
    },
    points: {
      type: Number,
      value: 0
    },
    time: {
      type: String,
      value: '2024-03-15'
    },
    type: {
      type: String, // add/reduce
      value: 'add'
    },
    icon: {
      type: String,
      value: '/assets/icons/default-product.png'
    }
  },
  observers: {
    'type': function(type) {
      this.setData({ symbol: type === 'add' ? '+' : '-' })
    }
  },
  data: {
    symbol: '+'
  }
})