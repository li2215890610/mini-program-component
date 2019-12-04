
var app = getApp();

Page({
  data: {
    phone: "",
    password: "",
    loading: false,
    userInfo: null
  },
  onLoad: function onLoad() {

    wx.getSetting({
      success: (res)=> {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: (res)=> {
              this.setData({
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
      url: "/pages/reset-password/reset-password"
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

          //发起网络请求 http Request

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

    const { data, phone, password} = this.data;

    if(!phone) {
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
      success: ()=> {
        this.setData({
          loading: true
        });
      }
    });


    // app.login({
    //   phone: this.data.phone,
    //   password: this.data.password
    // }).then( (ticket)=> {
    //   // return app.getSession(ticket);
    // }).then( (jinju_session)=> {

    // }).catch( (err)=> {
    //   wx.hideLoading();
    //   wx.showToast({
    //     title: err.message,
    //     icon: 'none',
    //     success: function success() {
    //       this.setData({
    //         loading: false
    //       });
    //     }
    //   });
    // });
  }

});