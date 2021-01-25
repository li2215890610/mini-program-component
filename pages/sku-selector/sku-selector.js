import skuData from "sku.js";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    sku: skuData.sku,
    attributes: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    const value = skuData.product_attributes.map((group)=>{
      // console.log(group);
      return {
        ...group,
        values: group.values.map((item)=>{
          return {
            ...item,
            str_id: `${group._id}_${item._id}`
          }
        })
      }
    })
    // console.log(value);
    
    this.setData({
      attributes:value
    },()=>{
      // console.log(this.data.attributes);
      
    })

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
    this.selectComponent('#sku-paenl').handleClickShow();
  },
  onClick: function () {
   this.selectComponent('#sku-paenl').handleClickShow();
  },
  handleShowSkuPanel: function () {
    console.log('显示')
  },
  handleHideSkuPanel: function () {
    console.log('隐藏')
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