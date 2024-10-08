// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isStoreEmpty: false, 
    refresherTriggered: false,
    record:[1,2,3,4,5,6,7,8,89]
    // record:[]
  },
  handleStoreEmpty(){
    this.setData({
      isStoreEmpty: false,
    })
  },
  handleClick(){
    console.log('111');
  },
  handleBodyReachBottom(){
    console.log('到底了');
  },
  headerPullingDown(){
    console.log('下拉刷新');
    this.setData({
      refresherTriggered: true
    })
  },
})