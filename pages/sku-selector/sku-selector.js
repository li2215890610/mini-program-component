import { product_sku, product_attributes} from "sku1.js";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    productSku: product_sku,
    productAttributes: product_attributes,
    defaultValue: {
      "_id": "5f2e44d297bc022dbac2d289",
      "price": 240,
      "stock": 0,
      "difference": "绿色,44,秋天",
  
      "name": "绿色 44 秋天",
      "pic": "http://s.jinjuxiaodian.com/jinju_resource/593b78b8f8f9d516ca03a8cb/398fddc0-a3d6-11ea-aac3-f777df03dbf6.png",
      "detail_pics": [],
      "state": 1,
      "count_sold": 0,
      "origin_price": 299,
      "attr_value_str": "11_6,16_10,88_4",
      "product_code": "48"
    }
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
  },
  clearDefaultValue: function (params) {
    this.setData({
      defaultValue: null
    })
  }
})