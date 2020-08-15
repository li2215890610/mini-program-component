// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
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
    }, {
      url: '/pages/left-slide/left-slide',
      btnText: "右滑删除"
    },{
      url:'/pages/sku-selector/sku-selector',
      btnText:'sku选择'
    },{
      url: '/pages/row4/row4',
      btnText: "一行四个"
    },{
      url:"/pages/double-row/double-row",
      btnText:"双列商品"
    },{
      url:'/pages/scoll-nav/scoll-nav',
      btnText:"滚动导航"
    }]
  },
  navigateTo: function (e) {
    console.log(e.currentTarget.dataset.url)
    wx.navigateTo({
      url: `${e.currentTarget.dataset.url}`,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  }
})