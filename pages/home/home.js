// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goPage: [{
      url: '/pages/form/form',
      btnText: '动态表单',
    }, {
      url: '/pages/get-phone/get-phone',
      btnText: '手机号组件',
    }, {
      url: '/pages/search/search',
      btnText: '搜索组件',
    },{
      url:'/pages/curtain/curtain',
      btnText:'窗帘'
    },{
      url:'/pages/modal/modal',
      btnText: '弹窗组件'
    }]
  },

  navigateTo: function(e) {
    console.log(e.currentTarget.dataset.url)
    wx.navigateTo({
      url: `${e.currentTarget.dataset.url}`,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
})