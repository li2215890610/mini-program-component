// pages/button/button.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    types: ['beauty', 'selection', 'disabled', 'danger', 'success', 'secondary', 'primary', 'info', 'dark', 'warning'],
    style: 'width: 222rpx;background: #ff9300;border-radius: 66rpx;color: #fff;'
  },

  onSubmit: function (event) {
    console.log(event.detail);
    
  }
})