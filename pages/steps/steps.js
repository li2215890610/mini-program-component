//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    icon: "",
    steps: [
      {
        text: '步骤一',
        desc: '描述信息'
      },
      {
        text: '步骤二',
        desc: '描述信息'
      },
      {
        text: '步骤三',
        desc: '描述信息'
      },
      {
        text: '步骤四',
        desc: '描述信息'
      }
    ],
    active: 2,
    direction: 'horizontal',
    // direction: 'vertical',
    activeColor: '#EA493B'
  },
  
})
