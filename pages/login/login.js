
var app = getApp();


    // "wxc-input": "../../packages/@minui/wxc-input/dist/index",
    // "wxc-button": "../../packages/@minui/wxc-button/dist/index",
    // "wxc-avatar": "../../packages/@minui/wxc-avatar/dist/index",

Page({
  data: {
    phone: "",
    password: "",
    loading: false,
    userInfo: null
  },
  onLoad: function onLoad() {
    var _this = this;

    wx.getSetting({
      success: function success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function success(res) {
              _this.setData({
                userInfo: res
              });
            }
          });
        }
      }
    });
  },
  handlePhoneChange: function handlePhoneChange(e) {
    this.setData({
      phone: e.detail.value
    });
  },
  handlePasswordChange: function handlePasswordChange(e) {
    this.setData({
      password: e.detail.value
    });
  },
  handleTapResetPassword: function handleTapResetPassword() {
    wx.navigateTo({
      url: "/pages/reset-password/index"
    });
  },
  bindGetUserInfo: function bindGetUserInfo(res) {
    if (res.detail.errMsg === "getUserInfo:ok") {
      this.setData({
        userInfo: res.detail
      });
      this.subAccountLogin();
    } else {
      wx.showToast({
        title: res.detail.errMsg,
        icon: 'none'
      });
    }
  },
  subAccountLogin: function subAccountLogin() {
    var userInfo = this.data.userInfo;
    wx.showLoading({
      title: '正在登录',
      mask: 'true'
    });
    wx.login({
      success: function success(res) {
        if (res.code) {

          var postData = {
            code: res.code,
            encryptedData: userInfo.encryptedData,
            iv: userInfo.iv
          };

          //发起网络请求
          app.subAccountLogin(postData).then(function (ticket) {
            return app.getSession(ticket);
          }).then(function (jinju_session) {
            wx.hideLoading();
            app.saveSession(jinju_session);
            app.saveAccountType("sub");
            app.tryToGoToOrderListUseSession();
          }).catch(function (err) {
            wx.hideLoading();
            wx.showToast({
              title: err.message,
              icon: 'none'
            });
          });
        } else {
          wx.hideLoading();
          wx.showToast({
            title: err.message,
            icon: 'none'
          });
          console.log('登录失败！' + res.errMsg);
        }
      }
    });
  },
  handleTapLogin: function handleTapLogin() {
    var _this2 = this;

    var _data = this.data,
        phone = _data.phone,
        password = _data.password;

    if (!phone) {
      wx.showToast({
        title: '请输入手机号',
        icon: 'none'
      });
      return false;
    }

    if (phone.length !== 11) {
      wx.showToast({
        title: '请输入正确的手机号',
        icon: 'none'
      });
      return false;
    }

    if (!password) {
      wx.showToast({
        title: '请输入密码',
        icon: 'none'
      });
      return false;
    }

    wx.showLoading({
      title: '正在登录',
      mask: 'true',
      success: function success() {
        _this2.setData({
          loading: true
        });
      }
    });
    app.login({
      phone: this.data.phone,
      password: this.data.password
    }).then(function (ticket) {
      return app.getSession(ticket);
    }).then(function (jinju_session) {
      app.saveSession(jinju_session);
      app.saveAccountType("admin");
      app.tryToGoToOrderListUseSession();
      _this2.setData({
        loading: false
      }, function () {
        wx.hideLoading();
      });
    }).catch(function (err) {
      wx.hideLoading();
      wx.showToast({
        title: err.message,
        icon: 'none',
        success: function success() {
          _this2.setData({
            loading: false
          });
        }
      });
    });
  }

});