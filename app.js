/**
 * url: https://developers.weixin.qq.com/miniprogram/dev/reference/api/App.html#onLaunch-Object-object
 */
App({
  globalData: {
    userInfo: null
  },
  //生命周期回调——监听小程序初始化。
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
  //小程序启动，或从后台进入前台显示时触发
  onShow: function (qurey) {
    console.log(qurey, "onShowonShowonShow");
  },
  //小程序从前台进入后台时触发
  onHide () {
    // Do something when hide.
  },
  //小程序发生脚本错误或 API 调用报错时触发
  onError (msg) {
    console.log(msg)
  },
  //小程序要打开的页面不存在时触发
  onPageNotFound(res) {
    wx.redirectTo({
      url: 'pages/index/index'
    })
  },
  //系统切换主题时触发。也可以使用 
  onThemeChange: function(){

  }
})
