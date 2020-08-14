App({
  onLaunch: function () {
    // 展示本地存储能力

  },
  globalData: {
    userInfo: null
  },
  onLaunch: function (qurey) {
    console.log(qurey, "onLaunchonLaunch");
    //判断api 是否可用
    if (wx.canIUse("getUpdateManager")) {
      const updateManager = wx.getUpdateManager();
      updateManager.onCheckForUpdate(function (res) {
        // 请求完新版本信息的回调
      });
      updateManager.onUpdateReady(function () {
        wx.showModal({
          title: "更新提示",
          content: "新版本已经准备好，是否重启应用？",
          success: function (res) {
            if (res.confirm) {
              // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
              updateManager.applyUpdate();
            } else if (res.cancel) {
              updateManager.applyUpdate();
            }
          }
        });
      });
      updateManager.onUpdateFailed(function () {
        // 新版本下载失败
        console.log("onUpdateFailed");
      });
    } else {
      wx.showModal({
        title: "提示",
        content: "您的微信版本过低，建议升级到最新版本。"
      });
    }
  },
  onShow: function (qurey) {
    console.log(qurey, "onLoadonLoadonLoad");
  },
  testShow: function (params) {

    wx.showToast({
      title: '出来了',
      duration: 6 * 1000
    })
  }
})