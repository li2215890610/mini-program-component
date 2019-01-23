// pages/plan/complete/complete.js
import {
  loading,
  toast,
  param
} from '../../../utils/util'

import {
  net
} from '../../../utils/net'

const app = getApp()

Page({
  data: {
    loaded: false,
    orderId: '',
    orderDetail: '',
    // userDetail: ''
  },
  onLoad(options) {
    this.setData({
      orderId: options.orderId
    })
  },
  onShow() {
    let query = param({
      orderId: this.data.orderId
    })
    net.get('order/info' + query, {
      success: (res) => {
        // let userDetail = {}
        // userDetail.wxName = app.globalData.userInfo.wxName
        // userDetail.axaId = app.globalData.userInfo.axaId
        // userDetail.avatarUrl = app.globalData.userInfo.avatarUrl
        // level
        // levelName
        // memberBackgroundImg
        this.setData({
          orderDetail: res,
          // userDetail: userDetail
        })
      },
      fail: (err) => {
        setTimeout(() => {
          toast(err.msg)
        }, 500)
      },
      complete: () => {
        this.setData({
          loaded: true
        })
      }
    })
  },
  // 返回首页
  backHome() {
    wx.reLaunch({
      url: '../../home/index'
    })
  },
  // 分享
  onShareAppMessage(options) {
    return {
      title: 'AXA专业旅行保险',
      path: '/pages/home/index'
    }
  }
})