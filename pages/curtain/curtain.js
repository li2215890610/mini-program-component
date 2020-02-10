Page({

  /**
   * 页面的初始数据
   */
  data: {
    isOpened: true
  },

  handleCloseBtn: function(data){
    this.setData({
      isOpened: !this.data.isOpened
    })
  }
})