// components/balance-record/index.ts
Component({
  properties: {

    id:{
      type:String,
      value:''
    },
    /**
     * 账单类型
     * @enum ['income', 'expense']
     */
    type: {
      type: String,
      value: 'income',

    },

    /**
     * 金额（需格式化的字符串）
     */
    amount: {
      type: String,
      value: '0.00'
    },

    /**
     * 交易时间
     * @example "2024-03-15 14:30"
     */
    time: {
      type: String,
      value: ''
    },

    /**
     * 交易渠道（可选）
     * @example "微信支付"
     */
    channel: {
      type: String,
      value: '',

    }
  },

  observers: {
    '**': function(allFields) {
      console.log('[组件数据监控]', allFields)
    }
  },

  lifetimes: {
    attached() {
      console.log('[组件初始化数据]', this.data)
    }
  }
 

})