// pages/home/components/main/index.js
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

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleClick(){
      debugger
      wx.navigateTo({
        url: '/pages/login/login',
      })
    }
  }
})