// pages/order-details/order-details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabIndex: 0
  },

  tabClick: function({ currentTarget}){
    this.setData({
      tabIndex: parseInt(currentTarget.dataset.index)
    })
  },

  handlePhoneCall: function (params) {
    wx.makePhoneCall({
      phoneNumber: '1340000' //仅为示例，并非真实的电话号码
    })
  }
})