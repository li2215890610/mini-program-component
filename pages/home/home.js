// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  navigateToForm: function (options) {
    wx.navigateTo({
      url: '/pages/form/form',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  navigateToPhone: function (options) {
    wx.navigateTo({
      url: '/pages/get-phone/get-phone',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  navigateToSearch: function (options) {
    wx.navigateTo({
      url: '/pages/search/search',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  navigateToCurtain: function (options) {
    wx.navigateTo({
      url: '/pages/curtain/curtain',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  }
})