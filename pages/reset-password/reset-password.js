Page({
  data: {
    phone: "",
    password: "",
    codeNum: "",
    code: 0
  },
  handlePhoneChange: function (e) {
    this.setData({
      phone: e.detail.value
    });
  },
  handlePasswordChange: function (e) {
    this.setData({
      password: e.detail.value
    });
  },
  timer: null,
  handleVerifyCodeChange: function (e) {
    this.setData({
      codeNum: e.detail.value
    });
  },
  startCB: function () {

    clearInterval(this.timer);

    this.setData({
      code: 30
    },()=>{
      this.resizeVerifyCode()
    });
  },
  resizeVerifyCode: function (params) {
    this.timer = setInterval(()=> {
      const { code} = this.data;

      if (code === 0) {
        clearInterval(this.timer);
        return false;
      }
      this.setData({
        code: code - 1
      });
    }, 1000);
  },
  handleTapGetVerifyCode: function () {

    const { code, phone, password} = this.data;

    if (code !== 0) {
      return false;
    }

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

    if(!password){
      wx.showToast({
        title: '请输入密码',
        icon: 'none'
      });
      return false
    }
    wx.showLoading({
      title: '正在发送验证码',
      mask: true
    });

    // _userAccount2.default.getVerifyCode({
    //   phone: phone
    // }, function (err, data) {
      wx.hideLoading();
    //   if (err) {
    //     wx.showToast({
    //       title: err.message,
    //       icon: 'none'
    //     });
    //   } else {
    //     wx.showToast({
    //       icon: 'none',
    //       title: '短信验证码已发送到您的手机'
    //     });
        this.startCB();
    //   }
    // });
  },
  handleTapConfirm: function () {

    const { phone, password, code} = this.data;

    if (phone.length !== 11) {
      wx.showToast({
        title: '请输入正确的手机号',
        icon: 'none'
      });
      return false;
    }

    if (!password) {
      wx.showToast({
        title: '请输入新密码',
        icon: 'none'
      });
      return false;
    }

    if (!code) {
      wx.showToast({
        title: '请输入短信验证码',
        icon: 'none'
      });
      return false;
    }

    wx.showLoading({
      title: '正在重置密码',
      mask: 'true'
    });

    // _userAccount2.default.resetPassword({
    //   phone: phone,
    //   password: password,
    //   code: code
    // }, function (err, data) {
    //   wx.hideLoading();
    //   if (err) {
    //     wx.showToast({
    //       title: err.message,
    //       icon: 'none'
    //     });
    //   } else {
    //     wx.showToast({
    //       title: '密码重置成功'
    //     });
    //     setTimeout(function () {
    //       wx.navigateBack();
    //     }, 1500);
    //   }
    // });
  }
});