// components/modal/modal.js
Component({
  options: {
    addGlobalClass: true,
  },
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value:"温馨提示"
    },
    width:{
      type: String,
      value: "80%"
    }
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
    handleClickClose: function(){
      this.triggerEvent('handleClose', false) 
    }
  }
})