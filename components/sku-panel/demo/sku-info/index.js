// components/sku-panel/sku-info/sku-info.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    addGlobalClass: true,
  },
  properties: {
    skuInfo: {
      type: Object,
      value: null | {
        stock: {
          type: Number,
          value: 0
        },
        price: {
          type: Number | String,
          value: 0
        },
        originPrice: {
          type: Number,
          value: 0
        },
        name: {
          type: String,
          value: ''
        },
        img:  {
          type: String,
          value: ''
        },
      }
    },
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleClose: function () {
      console.log('handleClose',this.data)
      
      this.triggerEvent('handleClose')
    }
  }
})
