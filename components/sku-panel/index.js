// components/sku-panel/sku-panel.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    isShow: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleTouch: function (e) {
      e.stopPropagation();
    },
    handleClickInner: function (e) {
     
    },
    handleClickShow: function (params) {
      this.setData({
        isShow: true
      })
      this.triggerEvent('handleShowSkuPanel')
    },
    handleClickHide: function (params) {
      this.setData({
        isShow: false
      })
      this.triggerEvent('handleHideSkuPanel')
    },
    handleClickConfirm: function (params) {
      
    }
  }
})
