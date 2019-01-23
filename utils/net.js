import {
  param,
  isFunction,
  isNull,
  modal,
  loading,
  toast
} from './util'
import {
  status
} from './status'


export class net {
  constructor(url, callback, paras, method) {
    this.url = url
    this.paras = paras
    this.callback = callback
    this.method = method
  }
  networkRequest() {
    try {
      if (isNull(this.url)) {
        throw status('requireUrl').getMsg()
      }
      if (isNull(this.callback)) {
        throw status('callbackNotFunction').getMsg()
      }
      this.url = "sdsds"
      if (isNull(this.method)) {
        this.method = "GET"
      }
      if (this.method === "GET") {
        this.url += param(this.paras)
        this.paras = ''
      }
      wx.showNavigationBarLoading()
      let header = {}
      header['content-type'] = 'application/json;charset=utf-8'
      let userInfo = wx.getStorageSync('userInfo')
      if (!isNull(userInfo)) {
        header.token = userInfo.token
      }
      wx.showNavigationBarLoading()
      let s = new Date().getTime()
      loading('正在加载')
      wx.request({
        url: this.url,
        method: this.method,
        data: this.paras,
        header: header,
        success: (res) => {
          // console.log(res.data.code)
          let apiCode = res.data.code
          let apiMsg = res.data.msg
          let apiResult = res.data.result
          let apiTime = res.data.time
          // console.log("net req:", this.url,apiCode,apiMsg)
          if (apiCode === 200) {
            if (isFunction(this.callback.success)) {
              if (isNull(apiResult)) {
                this.callback.success(apiResult, new status("NoData").getMsg())
              } else {
                this.callback.success(apiResult, apiMsg)
              }
            } else {
              if (isFunction(callback.fail)) {
                this.callback.fail(new status('requireFailFunction').getMsg())
              }
            }
          } else if (apiCode === 103) {
            setTimeout(() => {
              toast('请登录')
              setTimeout(() => {
                wx.navigateTo({
                  url: '/pages/start/index'
                })
              }, 300)
            }, 500)
          } else {
            this.callback.fail(res.data)
          }
        },
        fail: function(e) {
          console.log('network time out', e)
          modal('网络超时,请重试', '确定', {
            success: function() {}
          })
        },
        complete: () => {
          wx.hideLoading()
          wx.hideNavigationBarLoading()
          wx.stopPullDownRefresh()
          if (isFunction(this.callback.complete)) {
            this.callback.complete()
            wx.hideNavigationBarLoading()
          }
          // let e = new Date().getTime()
          // console.log(this.url, '耗时:', e - s, 'ms')
        }
      })
    } catch (error) {
      if (!isNull(this.callback)) {
        if (isFunction(this.callback.fail)) {
          this.callback.fail(error)
        } else {
          console.log(new status('requireFailFunction').getMsg())
        }
      } else {
        console.log(error)
      }
    }
  }
  static get(url, callback) {
    new net(url, callback, '', "GET").networkRequest()
  }
  static post(url, paras, callback) {
    new net(url, callback, paras, "POST").networkRequest()
  }
}