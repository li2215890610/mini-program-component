/**
 * @description 存储数据  同步版本
 * @param {string} key 本地缓存中指定的 key
 * @param {Object} data 需要存储的内容。只支持原生类型、Date、及能够通过JSON.stringify序列化的对象。
 */
export const setStorage = (key, data) => {
  try {
    wx.setStorageSync(key, data)
  } catch (error) {
    console.log(`存储指定 ${key} 数据发生异常 `, error)
  }
}

/**
 * @description 获取本地数据 
 * @param {*} key 本地缓存中指定的 key
 */
export const getStorage = (key) => {
  try {
    const value = wx.getStorageSync(key)
    if (value) {
      // Do something with return value
      return value
    }
  } catch (error) {
    console.log(`读取指定 ${key} 数据发生异常 `, error)
  }
}


/**
 * @description 移除本地数据 
 * @param {*} key 本地缓存中指定的 key
 */
export const removeStorage = (key) => {
  try {
    wx.removeStorageSync(key)
  } catch (error) {
    console.log(`移除指定 ${key} 数据发生异常 `, error)
  }
}
/**
 * @description 移除本地所有数据 
 */
export const clearStorage = () => {
  try {
    wx.clearStorageSync()
  } catch (error) {
    console.log(`清除 数据发生异常 `, error)
  }
}

/**
 * @description 将数据存储在本地缓存中 指定的 key 中。异步api
 * 会覆盖掉原来该 key 对应的内容。
 * 除非用户主动删除或因存储空间原因被系统清理，否则数据都一直可用。单个 key 允许存储的最大数据长度为 1MB，所有数据存储上限为 10MB。
 * @param {string} key 
 * @param {Object} data  需要存储的内容。只支持原生类型、Date、及能够通过JSON.stringify序列化的对象。
 */
export const asyncSetStorage = (key, data) => {
  return new Promise((reslove) => {
    wx.setStorage({
      key,
      data,
      complete(res) {
        reslove(res)
      }
    })
  })
}

/**
 * @description 从本地缓存中异步获取指定 key 的内容  
 * @param {*} key 
 */
export const asyncGetStorage = (key) => {

  return new Promise((reslove) => {
    wx.getStorage({
      key,
      complete(res) {
        reslove(res)
      }
    })
  })
}

/**
 * @description 从本地缓存中异步移除指定 key 的内容  
 * @param {*} key 
 */
export const asyncRemoveStorage = (key) => {

  return new Promise((reslove) => {
    wx.removeStorage({
      key,
      complete(res) {
        reslove(res)
      }
    })
  })
}


/**
 *  @description 异步移除 本地缓存数据
 */
export const asyncClearStorage = () => {
  return new Promise((reslove) => {
    wx.clearStorage({
      complete(res) {
        reslove(res)
      }
    })
  })
}