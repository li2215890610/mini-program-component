/**
 * url: https://developers.weixin.qq.com/miniprogram/dev/reference/api/App.html#onLaunch-Object-object
 */
import {
  setStorage
} from "@utils/storage";

App({
  globalData: {
    userInfo: null
  },
  //生命周期回调——监听小程序初始化。
  onLaunch: function (qurey) {
    console.log(qurey, "onLaunchonLaunch");

    this.getSystemInfo()

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
  getSystemInfo() {

    const windowInfo = wx.getWindowInfo()

    let screenHeight = windowInfo.screenHeight
    let screenWidth = windowInfo.screenWidth
    console.log("设备屏幕：", screenWidth, '*', screenHeight)

    setStorage("screenHeight", screenHeight)
    setStorage("screenWidth", screenWidth)

    // 2
    console.log("状态栏高度：" + windowInfo.statusBarHeight) // 状态栏的高度

    // 3 胶囊数据：
    const pill = wx.getMenuButtonBoundingClientRect()
    console.log("胶囊数据：" + JSON.stringify(pill))

    // 4 开始计算
    let navHeight = (pill.top - windowInfo.statusBarHeight) * 2 + pill.height // 导航栏高度
    console.log("导航栏高度：" + navHeight)

    // 5 设置自定义导航数据储存
    let myHomeNav = {
      statusBarHeight: windowInfo.statusBarHeight,
      navHeight,
    }

    setStorage('NavHeadHeight', myHomeNav)

    const deviceInfo = wx.getDeviceInfo()
    
    // 6 
    // 适配iphoneX以上的底部，给tabbar一定高度的padding-bottom
    const model = ['X', 'XR', 'XS', '11', '12', '13', '14', '15'];

    let needPaddingBottom = false

    model.forEach(item => {
      if (deviceInfo.model.indexOf(item) != -1 && deviceInfo.model.indexOf('iPhone') != -1) {
        needPaddingBottom = true
      }
    })

    if (needPaddingBottom) {
      const customBottom = {
        paddingBottom: 20
      }
      setStorage('customBottom', customBottom)
    }

  },
  //小程序启动，或从后台进入前台显示时触发
  onShow: function (qurey) {
    console.log(qurey, "onShowonShowonShow");
  },
  //小程序从前台进入后台时触发
  onHide() {
    // Do something when hide.
  },
  //小程序发生脚本错误或 API 调用报错时触发
  onError(msg) {
    console.log(msg)
  },
  //小程序要打开的页面不存在时触发
  onPageNotFound(res) {
    wx.redirectTo({
      url: 'pages/index/index'
    })
  },
  //系统切换主题时触发。也可以使用 
  onThemeChange: function () {

  }
})