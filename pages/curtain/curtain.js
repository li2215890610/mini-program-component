const shareType = "shareType";

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
  },

  onShareTimeline: function () {
    // &product_id=5f1f98d63d265f6eb5f122a1&activity_type=111&fxid=5f1f98d63d265f6eb5f122a1&tuan_id=5f1f98d63d265f6eb5f122a1&activity_id=5f1f98d63d265f6eb5f122a1&seckill_id=5f1f98d63d265f6eb5f122a1
    return {
      query: `type=timeline&store_id=5f1f98d63d265f6eb5f122a1&${shareType}`,
      title: "我的",
      path:"/pages/steps/steps"
    }
  }
})