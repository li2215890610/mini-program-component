// pages/tab/tab.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [{
      title: '选项一',
      content: '内容一'
    }, {
      title: '选项二',
      content: '内容二'
    }, {
      title: '选项三',
      content: '内容三'
    }],
    tabs1: [{
      title: '选项一',
      content: '内容一'
    }, {
      title: '选项二',
      content: '内容二'
    }, {
      title: '选项三',
      content: '内容三'
    }],
    tabs2: [{
      title: '选项一',
      content: '内容一'
    }, {
      title: '选项二',
      content: '内容二'
    }, {
      title: '选项三',
      content: '内容三'
    }, {
      title: '选项四',
      content: '内容四'
    }, {
      title: '选项五',
      content: '内容五'
    }, {
      title: '选项六',
      content: '内容六'
    }],
    tabs3: [{
      title: '选项一',
      content: '内容一',
      id: 0
    }, {
      title: '选项二',
      content: '内容二',
      id: 1
    }, {
      title: '选项三',
      content: '内容三',
      id: 2
    }],
    activeKey: 0
  },
  onClick: function (e) {
    console.log(`ComponentId:${e.detail.componentId},you selected:${e.detail.key}`);
  },
  onAnimateClick: function (e) {
    console.log(`ComponentId:${e.detail.componentId},you selected:${e.detail.key}`);
  },
  onIconClick: function (e) {
    console.log(`ComponentId:${e.detail.componentId},you selected:${e.detail.key}`);
    const idx = e.detail.key;
    this.setData({
      activeKey: idx
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})