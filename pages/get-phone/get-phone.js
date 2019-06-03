
Page({

  data: {
    phone: ""
  },

  handleGetPhoneNumber: function (e) {

    if (e.detail.iv && e.detail.encryptedData) {

    }
  },

  handleInputPhone: function (e) {
    this.setData({
      phone: e.detail.value
    });
  },
})