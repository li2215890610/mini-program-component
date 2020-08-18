Page({
  data: {
    phone: "",
    password: "",
    code: "",
    loading: false,
    cd: 0
  },
  timer: null,
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
  handleVerifyCodeChange: function (e) {
    this.setData({
      code: e.detail.value
    });
  },
  startCD: function () {

    clearInterval(this.timer);

    this.setData({
      cd: 30
    });
    
    this.timer = setInterval(()=> {
      if (this.data.cd === 0) {
        clearInterval(this.timer);
        return false;
      }
      this.setData({
        cd: this.data.cd - 1
      });
    }, 1000);
  },
  handleTapGetVerifyCode: function () {

    const { cd, phone} = this.data;

    if (cd !== 0) {
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

    wx.showLoading({
      title: '正在发送验证码',
      mask: true
    });

    // _userAccount2.default.getVerifyCode({
    //   phone: phone
    // }, function (err, data) {
    //   wx.hideLoading();
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
    //     this.startCD();
    //   }
    // });
  },
  handleTapConfirm: function () {

    const { loading, phone, password, code} = this.data;

    if (loading) {
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

    this.setData({
      loading: true
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