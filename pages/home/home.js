// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [1, 2],
    setNav: {
      'bg': '#323232', //背景色
      'navTitle': "城市",
      'opacity': "1",
      'isBackNav': true, //是否显示返回按钮
      'headerBox': true,
      'fixed': true,
      'color': "#FFFFFF"
    },
    goPage: [{
      url: '/pages/message/message',
      btnText: '消息通知',
    }, {
      url: '/pages/form/form',
      btnText: '动态表单',
    }, {
      url: '/pages/get-phone/get-phone',
      btnText: '手机号组件',
    }, {
      url: '/pages/search/search',
      btnText: '搜索组件',
    }, {
      url: '/pages/curtain/curtain',
      btnText: '窗帘'
    }, {
      url: '/pages/modal/modal',
      btnText: '弹窗组件'
    }, {
      url: '/pages/button/button',
      btnText: '按钮组件'
    }, {
      url: '/pages/steps/steps',
      btnText: "步骤条"
    }, {
      url: '/pages/notice/notice',
      btnText: "通告栏"
    }, {
      url: '/pages/abnor/abnor',
      btnText: "异常数据"
    },{
      url: '/pages/left-slide/left-slide',
      btnText: "右滑删除"
    }]
  },

  navigateTo: function (e) {
    console.log(e.currentTarget.dataset.url)
    wx.navigateTo({
      url: `${e.currentTarget.dataset.url}`,
      success: function (res) {},
      fail: function (res) {},
      complete: function (res) {},
    })
  },

  handleSpecial: function name(params) {
    this.setData({
      specialShow: !this.data.specialShow
    })
  },

  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindTimeChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      time: e.detail.value
    })
  },
  bindDateMonthChange: function (e) {
    this.setData({
      dateMonth: e.detail.value
    })
  }
})