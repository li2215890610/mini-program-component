// pages/countDown/countDown.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    countdown: 10,
    format: 'hh:mm:ss',
    numStyle: 'width: 48rpx; font-size: 28rpx; color: #ffffff; background: #000; text-align: center; border-radius: 8rpx; padding: 5rpx 0;',
    symbolStyle: 'font-size: 28rpx; color: #000; padding: 0 12rpx;',
    computeTime: 5,
    isEnd: false
  },
  onRunCounts: function (e) {
    let detail = e.detail;
    console.log(e);
    this.setData({
      computeTime: detail.computeTime
    });
  },
  onEndCount: function () {
    this.setData({
      isEnd: true
    });
  },
  countAgain: function () {
    let countdown = this.data.countdown + 1;
    if (this.data.isEnd) {
      this.setData({
        countdown: countdown,
        isEnd: false
      });
    }
  }
})