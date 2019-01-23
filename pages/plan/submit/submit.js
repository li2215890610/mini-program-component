// pages/plan/submit/submit.js
import {
  loading,
  toast,
  param,
  isNull,
  nowDate,
  validate,
  isAdult,
  isOne
} from '../../../utils/util'

import {
  net
} from '../../../utils/net'

Page({
  data: {
    loaded: false,
    haself: false, // 是否已有个人信息
    now: '',
    selfInfo: {
      firstName: '',
      lastName: '',
      gender: 'M',
      passport: '',
      dateOfBirth: '',
      phoneNumber: '',
      email: ''
    },
    beneficiaryType: 'self', // 为谁投保
    beneficiary: [], // 被保人
    contact: [], // 联系人
    contactShow: false,
    beneficiaryIndex: '', // 删除被保人的索引
    query: {},
    price: ''
  },
  onLoad(options) {
    // this.setData({
    //   query: JSON.parse(options.query),
    //   price: options.price
    // }, () => {
      
  },

  // 添加受益人
  addBeneficiary() {
    // let isSubmit = this.data.isSubmit
    let beneficiary = this.data.beneficiary
    let beneficiaryType = this.data.beneficiaryType
    if (beneficiaryType == 'self' && beneficiary.indexOf(this.data.selfInfo) > -1) {
      beneficiary.splice(beneficiary.length - 1, 1)
      this.setData({
        isSubmit: false
      })
    }

    // 被保人数上限为10
    let maxLength = 10
    if (beneficiaryType == 'self') {
      maxLength = 9
    }
    if (beneficiary.length < maxLength) {
      let beneficiaryInfo = {}
      beneficiaryInfo.firstName = ''
      beneficiaryInfo.lastName = ''
      beneficiaryInfo.gender = 'M'
      beneficiaryInfo.passport = ''
      beneficiaryInfo.dateOfBirth = ''
      // beneficiaryInfo.
      beneficiaryInfo.type = '法定受益人'
      this.data.beneficiary.push(beneficiaryInfo)
      this.setData({
        beneficiary: beneficiary
      })
    } else {
      toast('被保人最多为10人')
    }
  },
  // 删除受益人
  reduceBeneficiary(e) {
    let isSubmit = this.data.isSubmit
    let index = e.currentTarget.dataset.index
    let beneficiary = this.data.beneficiary
    let beneficiaryType = this.data.beneficiaryType
    // 删除受益人时、如果为自己投保且已提交，删除的时候需要先把提交的时候push进去的信息删除
    if (beneficiaryType == 'self' && beneficiary.indexOf(this.data.selfInfo) > -1) {
      beneficiary.splice(beneficiary.length - 1, 1)
      // this.setData({
      //   isSubmit: false
      // })
    }
    beneficiary.splice(index, 1)
    this.setData({
      beneficiary: beneficiary
    })
  },
  // 资料提交
  planSubmit(e) {
    // let isSubmit = this.data.isSubmit
    let hasAdult = false
    let beneficiaryType = this.data.beneficiaryType
    let query = this.data.query
    query.buyer = this.data.selfInfo
    query.contactList = this.data.beneficiary
    query.formId.push(e.detail.formId)

    if (isNull(query.buyer.firstName) || isNull(query.buyer.lastName) || isNull(query.buyer.passport) || isNull(query.buyer.dateOfBirth) || isNull(query.buyer.phoneNumber) || isNull(query.buyer.email)) {
      toast('请将信息填写完整')
      return
    }

    if (query.contactList.length > 0) {
      for (let i = 0; i < query.contactList.length; i++) {
        let item = query.contactList[i]
        if (i == 0 && beneficiaryType != 'self' && (isNull(item.firstName) || isNull(item.lastName) || isNull(item.passport) || isNull(item.dateOfBirth))) {
          toast('请将被保人信息填写完整')
          return
        }
        if (isNull(item.firstName) && isNull(item.lastName) && isNull(item.passport) && isNull(item.dateOfBirth)) {
          query.contactList.splice(i, 1)
          this.setData({
            beneficiary: query.contactList
          })
        } else if ((isNull(item.firstName) || isNull(item.lastName) || isNull(item.passport) || isNull(item.dateOfBirth)) && (!isNull(item.firstName) || !isNull(item.lastName) || !isNull(item.passport) || !isNull(item.dateOfBirth))) {
          toast('请将被保人信息填写完整')
          return
        }
      }
    }

    if (!isAdult(query.buyer.dateOfBirth)) {
      wx.showToast({
        title: '投保人年龄必须大于18小于80',
        icon: 'none',
        mask: true
      })
      return
    }


    if (this.data.beneficiaryType == 'self' && query.contactList.indexOf(query.buyer) < 0) {
      query.contactList.push(query.buyer)
    }


    for (let item of query.contactList) {
      if (isOne(item.dateOfBirth)) {
        hasAdult = true
        break
      }
    }

    // if (!hasAdult) {
    //   wx.showToast({
    //     title: '被保人年龄必须大于1小于80',
    //     icon: 'none',
    //     mask: true
    //   })
    //   return
    // }

    // net.post('axaApi/queryProductPrice', query, {
    //   success: (res) => {
    //     let query = JSON.stringify(res)
    //     wx.navigateTo({
    //       url: `../confirm/confirm?query=${query}&form=submit`
    //     })
    //   },
    //   fail: (err) => {
    //     setTimeout(() => {
    //       toast(err.msg)
    //     }, 500)
    //   },
    //   complete: () => {}
    // })
  },
  // 受益人类型切换
  changeBeneficiary(e) {
    let type = e.currentTarget.dataset.type
    let beneficiaryType = this.data.beneficiaryType
    let beneficiary = this.data.beneficiary
    if (type != beneficiaryType) {
      if (type == 'who') {
        beneficiary = [{
          firstName: '',
          lastName: '',
          gender: 'M',
          passport: '',
          dateOfBirth: '',
          type: '法定受益人'
        }]
      } else {
        beneficiary = []
      }
    }
    this.setData({
      beneficiaryType: type,
      beneficiary: beneficiary,
      // isSubmit: false
    })
  },
  // 性别切换
  changeGender(e) {
    let index = e.currentTarget.dataset.index
    let gender = e.currentTarget.dataset.gender
    let selfInfo = this.data.selfInfo
    let beneficiary = this.data.beneficiary
    if (index == undefined) {
      selfInfo.gender = gender
      this.setData({
        selfInfo: selfInfo
      })
    } else {
      beneficiary[index].gender = gender
      this.setData({
        beneficiary: beneficiary
      })
    }
  },
  // 选择出生日期
  bindDateChange(e) {
    let val = e.detail.value
    let index = e.currentTarget.dataset.index
    let selfInfo = this.data.selfInfo
    let beneficiary = this.data.beneficiary
    if (index == undefined) {
      selfInfo.dateOfBirth = val
      this.setData({
        selfInfo: selfInfo
      })
    } else {
      beneficiary[index].dateOfBirth = val
      this.setData({
        beneficiary: beneficiary
      })
    }
  },
  // 联系人picker
  contactPicker(e) {
    let beneficiaryIndex = e.currentTarget.dataset.index
    if (this.data.contact.length <= 0) {
      toast('您还没有联系人')
    } else {
      if (beneficiaryIndex == undefined) {
        this.setData({
          contactShow: !this.data.contactShow
        })
      } else {
        this.setData({
          beneficiaryIndex: beneficiaryIndex,
          contactShow: !this.data.contactShow
        })
      }

    }
  },
  // 输入姓
  isFirstName(e) {
    let val = e.detail.value.replace(/\s+/g, "")
    let index = e.currentTarget.dataset.index
    let selfInfo = this.data.selfInfo
    let beneficiary = this.data.beneficiary
    if (!isNull(val)) {
      if (validate.isFirstName(val)) {
        if (index == undefined) {
          // 更改投保人信息
          selfInfo.firstName = val
          this.setData({
            selfInfo: selfInfo
          })
        } else {
          // 更改被保人信息
          beneficiary[index].firstName = val
          this.setData({
            beneficiary: beneficiary
          })
        }
      } else {
        toast('姓格式不正确')
        if (index == undefined) {
          // 更改投保人信息
          selfInfo.firstName = ''
          this.setData({
            selfInfo: selfInfo
          })
        } else {
          // 更改被保人信息
          beneficiary[index].firstName = ''
          this.setData({
            beneficiary: beneficiary
          })
        }
      }
    }
  },
  // 输入名
  isLastName(e) {
    let val = e.detail.value.replace(/\s+/g, "")
    let index = e.currentTarget.dataset.index
    let selfInfo = this.data.selfInfo
    let beneficiary = this.data.beneficiary
    if (!isNull(val)) {
      if (validate.isLastName(val)) {
        if (index == undefined) {
          // 更改投保人信息
          selfInfo.lastName = val
          this.setData({
            selfInfo: selfInfo
          })
        } else {
          // 更改被保人信息
          beneficiary[index].lastName = val
          this.setData({
            beneficiary: beneficiary
          })
        }
      } else {
        toast('名格式不正确')
        if (index == undefined) {
          // 更改投保人信息
          selfInfo.lastName = ''
          this.setData({
            selfInfo: selfInfo
          })
        } else {
          // 更改被保人信息
          beneficiary[index].lastName = ''
          this.setData({
            beneficiary: beneficiary
          })
        }
      }
    }
  },
  // 输入护照号
  isPassport(e) {
    let val = e.detail.value.replace(/\s+/g, "")
    let index = e.currentTarget.dataset.index
    let selfInfo = this.data.selfInfo
    let beneficiary = this.data.beneficiary
    if (!isNull(val)) {
      if (validate.isPassport(val)) {
        if (index == undefined) {
          // 更改投保人信息
          selfInfo.passport = val
          this.setData({
            selfInfo: selfInfo
          })
        } else {
          // 更改被保人信息
          beneficiary[index].passport = val
          this.setData({
            beneficiary: beneficiary
          })
        }
      } else {
        toast('护照号格式不正确')
        if (index == undefined) {
          // 更改投保人信息
          selfInfo.passport = ''
          this.setData({
            selfInfo: selfInfo
          })
        } else {
          // 更改被保人信息
          beneficiary[index].passport = ''
          this.setData({
            beneficiary: beneficiary
          })
        }
      }
    }
  },
  // 联系电话
  isPhoneNumber(e) {
    let val = e.detail.value.replace(/\s+/g, "")
    let selfInfo = this.data.selfInfo
    if (!isNull(val)) {
      if (validate.isPhoneNumber(val)) {
        // 更改投保人信息
        selfInfo.phoneNumber = val
      } else {
        toast('联系电话格式不正确')
        // 更改投保人信息
        selfInfo.phoneNumber = ''
      }
      this.setData({
        selfInfo: selfInfo
      })
    }
  },
  // email
  isEmail(e) {
    let val = e.detail.value.replace(/\s+/g, "")
    let selfInfo = this.data.selfInfo
    if (!isNull(val)) {
      if (validate.isEmail(val)) {
        // 更改投保人信息
        selfInfo.email = val
      } else {
        toast('邮箱格式不正确')
        // 更改投保人信息
        selfInfo.email = ''
      }
      this.setData({
        selfInfo: selfInfo
      })
    }
  },
  // 选择联系人
  selectContact(e) {
    let index = e.currentTarget.dataset.index
    let beneficiaryIndex = this.data.beneficiaryIndex
    let beneficiary = this.data.beneficiary
    let contact = this.data.contact
    for (let item of beneficiary) {
      if (item.contactId == contact[index].contactId) {
        toast('该联系已选择')
        return
      }
    }
    beneficiary[beneficiaryIndex] = contact[index]

    this.setData({
      contactShow: false,
      beneficiary: beneficiary
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