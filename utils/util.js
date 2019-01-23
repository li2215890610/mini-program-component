/**
 * 格式化时间 年:月:日 时:分:秒
 */
export const formatTime = date => {
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()
  let hour = date.getHours()
  let minute = date.getMinutes()
  let second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

/**
 * 格式化数字 0n
 */
export const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

/**
 * 格式化时间 月:日 时:分
 */
export const recordTime = date => {
  let month = date.getMonth() + 1
  let day = date.getDate()

  let hour = date.getHours()
  let minute = date.getMinutes()

  return [month, day].map(formatNumber).join('/') + ' ' + [hour, minute].map(formatNumber).join(':')
}

/**
 * 是否成年
 */
export const isAdult = date => {
  let now = new Date()
  let dateNow = new Date(now)
  let dateBirth = new Date(date)
  let yearNow = dateNow.getFullYear()
  let yearBirth = dateBirth.getFullYear()
  if (yearNow - 18 > yearBirth && yearNow - yearBirth < 80) {
    return true
  } else if (yearNow - 18 == yearBirth || yearNow - yearBirth == 80) {
    let monthNow = dateNow.getMonth()
    let monthBirth = dateBirth.getMonth()
    if (monthNow > monthBirth) {
      return true
    } else if (monthNow == monthBirth) {
      let dayNow = dateNow.getDate()
      let dayBirth = dateBirth.getDate()
      if (dayNow > dayBirth) {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  } else {
    return false
  }
}

/**
 * 是否大于一岁
 */
export const isOne = date => {
  let now = new Date()
  let dateNow = new Date(now)
  let dateBirth = new Date(date)
  let yearNow = dateNow.getFullYear()
  let yearBirth = dateBirth.getFullYear()
  if (yearNow - 1 > yearBirth && yearNow - yearBirth < 80) {
    return true
  } else if (yearNow - 1 == yearBirth || yearNow - yearBirth == 80) {
    let monthNow = dateNow.getMonth()
    let monthBirth = dateBirth.getMonth()
    if (monthNow > monthBirth) {
      return true
    } else if (monthNow == monthBirth) {
      let dayNow = dateNow.getDate()
      let dayBirth = dateBirth.getDate()
      if (dayNow > dayBirth) {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  } else {
    return false
  }
}


/**
 * 类型判断
 * @param {Any} value 任意需要判断的参数
 * @return {String} 返回的类型
 */
export const type = value => {
  let str = Object.prototype.toString.call(value).split(' ')[1]
  str = str.substr(0, str.length - 1)
  return str
}

/**
 * 将对象解析成url字符串
 * @param  {Object} obj 参数对象
 * @param  {Boolean} unEncodeURI 不使用编码
 * @return {String} 转换之后的url参数
 */
export const param = (obj = {}, unEncodeURI) => {
  let result = []
  for (let name of Object.keys(obj)) {
    let value = obj[name]
    result.push(name + '=' + (unEncodeURI ? value : encodeURIComponent(value)))
  }
  if (result.length) {
    return '?' + result.join('&')
  } else {
    return ''
  }
}

/**
 * 将url字符串解析成对象
 * @param  {String} str 带url参数的地址
 * @param  {Boolean} unDecodeURI 不使用解码
 * @return {Object} 转换之后的url参数
 */
export const unparam = (str = '', unDecodeURI) => {
  let result = {}
  let query = str.split('?')[1]

  if (!query) return result

  let arr = query.split('&')

  arr.forEach((item, idx) => {
    let param = item.split('=')
    let name = param[0]
    let value = param[1] || ''

    if (name) {
      result[name] = unDecodeURI ? value : decodeURIComponent(value)
    }
  })

  return result
}

/**
 * 转发分享
 * @param  {String} title 标题
 * @param  {String} url 页面地址，默认就是当前页面地址
 * @return {Function} 转发函数
 */
export const share = (title = '小程序名称!', url) => {
  return () => {
    let pages = getCurrentPages()
    let currPage = pages[pages.length - 1]
    let path = '/' + currPage.route
    let params = common.param(currPage.options, true)

    return {
      title: title,
      path: (url || path) + params
    }
  }
}

/**
 * 保留当前页面，跳转到应用内的某个页面
 * @param {String} url 页面路径
 * @param {Object} params 页面参数
 */
export const navigateTo = (url, params) => {
  this._openInterceptor('navigateTo', url, params)
}

/**
 * 关闭当前页面，跳转到应用内的某个页面
 * @param {String} url 页面路径
 * @param {Object} params 页面参数
 */
export const redirectTo = (url, params) => {
  this._openInterceptor('redirectTo', url, params)
}

/**
 * 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
 * @param {String} url 页面路径
 * @param {Object} params 页面参数
 */
export const switchTab = (url, params) => {
  this._openInterceptor('switchTab', url, params)
}

/**
 * 关闭所有页面，打开到应用内的某个页面
 * @param {String} url 页面路径
 * @param {Object} params 页面参数
 */
export const reLaunch = (url, params) => {
  this._openInterceptor('reLaunch', url, params)
}

/**
 * 页面跳转封装
 * @param {String} method 微信JS方法
 * @param {String} url 页面路径
 * @param {Object} params 页面参数
 */
export const _openInterceptor = (method, url, params) => {
  if (this.IsPageNavigating) return
  this.IsPageNavigating = true
  params = this.param(params)
  wx[method]({
    url: url + params,
    complete: () => {
      this.IsPageNavigating = false
    }
  })
}

/**
 * 是否为空
 */
export const isNull = (value) => {
  if (value == undefined || value == null || value == '' || value == 'null' || value == '[]' || value == '{}') {
    return true
  }
  return false
}

/**
 * 是否是函数
 */
export const isFunction = (value) => {
  if (typeof(value) == "function") {
    return true
  } else {
    return false
  }
}

/**
 * 格式化日期 YY-MM-DD
 */
export const nowDate = (date) => {
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()
  if (month < 10) {
    month = "0" + month
  }
  if (day < 10) {
    day = "0" + day
  }
  let nowDate = year + "-" + month + "-" + day
  return nowDate
}

/**
 * 格式化时间 HH:MM
 */
export const nowTime = (date) => {
  let hour = date.getHours()
  let minute = date.getMinutes()
  if (hour < 10) {
    hour = "0" + hour
  }
  if (minute < 10) {
    minute = "0" + minute
  }
  let nowTime = hour + ":" + minute
  return nowTime
}

/**
 * 获取6个月后的日期
 */
export const sixMonth = (date) => {
  let year = date.getFullYear()
  //月 +6个月  因为js里month从0开始，所以要加1
  let month = date.getMonth() + 6
  if (month > 12) {
    year++
    month -= 12
  }
  if (month < 10) {
    month = "0" + month
  }
  //新的年月
  let date2 = new Date(year, month, 0)
  let day1 = date.getDate()
  let day2 = date2.getDate()
  //防止+6月后没有31天
  if (day1 > day2) {
    day1 = day2
  }
  if (day1 < 10) {
    day1 = "0" + day1
  }
  let str = year + '-' + month + '-' + day1
  return str
}

/**
 * 弹框
 */
export const modal = (msg, btnText, callback) => {
  wx.showModal({
    title: '提示',
    content: msg,
    showCancel: false,
    confirmText: btnText,
    confirmColor: '#000000',
    success: function(res) {
      callback.success(res)
    },
    fail: function(res) {}
  })
}

/**
 * 吐司
 */
export const toast = (msg) => {
  wx.showToast({
    title: msg,
    duration: 2000,
    icon: 'none',
    mask: true
  })
}

/**
 * loading
 */
export const loading = (msg) => {
  wx.showLoading({
    title: msg,
    mask: true
  })
}

export const validate = {
  /**
   * 验证firstName
   */
  isFirstName(val) {
    return new RegExp(/^[a-zA-Z]{1,8}$/).test(val.replace(/\s+/g, ""))
  },

  /**
   * 验证lastName
   */
  isLastName(val) {
    return new RegExp(/^[a-zA-Z]{1,15}$/).test(val)
  },

  /**
   * 验证passport
   */
  isPassport(val) {
    return new RegExp(/^[a-zA-Z0-9]{8,18}$/).test(val)
  },

  /**
   * 验证phoneNumber
   */
  isPhoneNumber(val) {
    return new RegExp(/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/).test(val)
  },

  /**
   * 验证email
   */
  isEmail(val) {
    return new RegExp(/^([A-Za-z0-9_\-\.\u4e00-\u9fa5])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,8})$/).test(val)
  }
}