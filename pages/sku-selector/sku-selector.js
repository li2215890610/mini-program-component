import { product_sku, product_attributes} from "sku1.js";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    productSku: product_sku,
    productAttributes: product_attributes,
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
  handleClickConfirm: function ({ detail}) {
    console.log(detail.selectValue,'当前选择sku');
  }
})