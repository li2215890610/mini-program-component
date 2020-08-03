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
    // direction: 'horizontal',
    direction: 'vertical',
    activeColor: '#EA493B'
  },

  onLoad: function(query) {
    if (query && query.type === 'timeline') {
      console.log(query);
      app.testShow()
    }
  },
  
  onShareAppMessage: function () {
    return {
      title: "分享",
      path: '/pages/steps/steps?type=AppMessage'
    }
  },
  onShareTimeline: function () {
    // &product_id=5f1f98d63d265f6eb5f122a1&activity_type=111&fxid=5f1f98d63d265f6eb5f122a1&tuan_id=5f1f98d63d265f6eb5f122a1&activity_id=5f1f98d63d265f6eb5f122a1&seckill_id=5f1f98d63d265f6eb5f122a1
    return {
      query: "type=timeline&store_id=5f1f98d63d265f6eb5f122a1",
      title: "我的",
      path:"/pages/steps/steps"
    }
  }
})
