// pages/plan/confirm/confirm.js
import {
  loading,
  toast,
  param
} from '../../../utils/util'

import {
  net
} from '../../../utils/net'

Page({
  data: {
    loaded: false,
    isCheck: true,
    query: {},
    discountList: [],
    discountShow: false,
    discount: -1,
    form: ''
  },
  onLoad(options) {
    loading('正在加载')
    let query = JSON.parse(options.query)
    this.setData({
      query: query,
      form: options.form
    }, () => {
      wx.hideLoading()
      this.setData({
        loaded: true
      })
    })
  },
  // 确认状态
  changeCheck() {
    this.setData({
      isCheck: !this.data.isCheck
    })
  },
  onShow() {},
  planSubmit() {
    let isCheck = this.data.isCheck
    let orderId = this.data.query.orderId
    if (!isCheck) {
      toast('请勾选“我已确认”并查看相关服务协议和条款')
    } else {
      let apiUrl = ''
      if (orderId) {
        let params = param({
          orderId: orderId
        })
        net.get('pay/sign' + params, {
          success: (res) => {
            this.requestPay(res)
          },
          fail: (err) => {
            setTimeout(() => {
              toast(err.msg)
            }, 500)
          },
          complete: () => {}
        })
      } else {
        net.post('order/submit', {}, {
          success: (res) => {
            this.requestPay(res)
          },
          fail: (err) => {
            setTimeout(() => {
              toast(err.msg)
              wx.reLaunch({
                url: '../../home/index',
              })
            }, 500)
          },
          complete: () => {}
        })
      }
    }
  },
  // 支付
  requestPay(res) {
    wx.requestPayment({
      'timeStamp': res.timeStamp,
      'nonceStr': res.nonceStr,
      'package': res.package,
      'signType': res.signType,
      'paySign': res.paySign,
      'success': (data) => {
        wx.redirectTo({
          url: '../complete/complete?orderId=' + res.orderId,
        })
      },
      'fail': (err) => {
        toast('支付失败')
        setTimeout(() => {
          wx.reLaunch({
            url: '../../home/index',
          })
        }, 500)
      }
    })
  },
  // 折扣picker
  discountPicker() {
    if (!this.data.discountShow) {
      loading('正在加载')
      net.get('memberDiscountCoupon/memberDiscountCoupon', {
        success: (res) => {
          this.setData({
            discountList: res
          }, () => {
            if (res.length > 0) {
              this.setData({
                discountShow: !this.data.discountShow
              })
            } else {
              setTimeout(() => {
                wx.showToast({
                  title: '暂无可用优惠',
                  icon: 'none',
                  mask: true
                })
              }, 200)
            }
          })
        },
        fail: (err) => {
          setTimeout(() => {
            wx.showToast({
              title: err.msg
            })
          }, 200)
        }
      })
    } else {
      this.setData({
        discountShow: !this.data.discountShow
      })
    }
  },
  // 选择折扣
  selectdiscount(e) {
    let id = e.currentTarget.dataset.id
    let index = e.currentTarget.dataset.index
    let query = param({
      couponId: id
    })
    net.get('axaApi/queryUseCouponPrice' + query, {
      success: (res) => {
        this.setData({
          query: res
        })
      },
      fail: (err) => {
        setTimeout(() => {
          wx.showToast({
            title: err.msg
          })
        }, 200)
      },
      complete: () => {}
    })
    this.setData({
      discount: index
    }, () => {
      this.setData({
        discountShow: !this.data.discountShow
      })
    })
  },
  // 服务协议
  openPDF() {
    loading('正在加载')
    wx.downloadFile({
      url: this.data.query.provisionUrl,
      success: function(res) {
        const filePath = res.tempFilePath
        wx.openDocument({
          filePath: filePath,
          success: function(res) {
            wx.hideLoading()
          }
        })
      }
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