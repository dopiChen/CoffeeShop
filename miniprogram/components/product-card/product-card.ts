// components/product-card/index.js
Component({
  properties: {
    item: {
      type: Object,
      value: {}
    }
  },

  methods: {
    handleAddCart() {
      if (this.data.item.stock === 0) return
      this.triggerEvent('addcart', this.data.item)
    }
  }
})