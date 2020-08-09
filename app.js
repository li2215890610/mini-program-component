App({
  onLaunch: function () {
    // 展示本地存储能力
   
  },
  globalData: {
    userInfo: null
  },
  onLaunch: function(qurey){
    console.log(qurey,"onLaunchonLaunch");
  },
  onShow: function (qurey) {
    console.log(qurey,"onLoadonLoadonLoad");
  },
  testShow: function (params) {

    wx.showToast({
      title: '出来了',
      duration: 6 * 1000
    })
  }
})