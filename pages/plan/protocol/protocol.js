// pages/plan/protocol/protocol.js
import {
  loading
} from '../../../utils/util'

import {
  config
} from '../../../config'

Page({
  data: {
    loaded: false,
    protocolType: '',
    pageBaseUrl: '',
    provisionUrl: ''
  },
  onLoad(options) {
    loading('正在加载')
    let provisionUrl = ''
    let title = ''
    if (options.protocolType == 'protocol') {
      title = '服务协议'
      wx.setNavigationBarTitle({
        title: title
      })
    }

    // if (options.protocolType == 'notice') {
    //   title = '投保须知和声明'
    // } else if (options.protocolType == 'protocol') {
    //   title = '服务协议'
    // } else {
    //   title = '特别约定'
    // }
    // wx.setNavigationBarTitle({
    //   title: title
    // })
    if (options.provisionUrl) {
      provisionUrl = options.provisionUrl
    }
    this.setData({
      loaded: true,
      protocolType: options.protocolType,
      pageBaseUrl: config.pageBaseUrl,
      provisionUrl: provisionUrl
    }, () => {
      wx.hideLoading()
    })
  },
  onShow() {}
})