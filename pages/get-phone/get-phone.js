
Page({

  data: {
    phone: "",
    code:0,
    verifyCode:""
  },

  handleGetPhoneNumber: function (e) {

    if (e.detail) {
        console.log(e.detail);
        // this.setData({phone: })
    }
  },
  timer: null,
  handleInputPhone: function (e) {
    clearInterval(this.timer);
    this.timer = setTimeout(()=>{
      this.setData({
        phone: e.detail.value
      });      
    },800)
  },

  handleVerifyCodeChange: function ({ detail}) {
    if (detail.value && detail.value.length === 6 || detail.value.length === 4) {
      console.log(detail);
      this.setData({
        verifyCode:detail.value
      })
    }
  },

  handleTapGetVerifyCode: function () {
    const { phone} = this.data;



    if (phone.length === 11) {

      this.startCB()

    }else{
      wx.showToast({
        title: '请输入正确的手机号',
        icon:"none"
      })
    }
  },
  clearVerifyCode: null,

  startCB: function () {
    clearInterval(this.clearVerifyCode);

    this.setData({
      code: 60
    },()=>{
      this.resizeVerifyCode()
    })
  },
  resizeVerifyCode: function () {
    this.clearVerifyCode = setInterval(()=>{
      const {code } = this.data;

      if (code === 0) {
        clearInterval(this.clearVerifyCode);
        return false;
      }

      this.setData({
        code: code -1 
      })
    },990)
  },
  onUnload(){
    clearInterval(this.clearVerifyCode)    
  }
})