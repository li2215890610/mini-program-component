Page({
  /**
   * 页面的初始数据
   */
  data: {
      list: [{
              num: 20,
              title: '全部',
              id: '097b0651ca000031b193e2bca6be792d'
          },
          {
              num: 7,
              title: '爆款',
              id: '905cf8edf1dd45fcb821eeaba6485b07'
          },
          {
              num: 3,
              title: '预告',
              id: '087b0651ca000031b193e2bca6be792d'
          },
          {
              num: 1,
              title: '数码家电',
              id: 'c559a4fa5a174771867205af397d6414'
          },
          {
              num: 1,
              title: '运动',
              id: 'a08476468ef144a99a4c7228c8909bb6'
          },
          {
              num: 2,
              title: '大牌运动惠',
              id: 'ff1067b74999458c85ae234f046f06a7'
          },
          {
              num: 1,
              title: '自营',
              id: 'da6aea26551a476dbbc0511182ef6b45'
          },
          {
              num: 4,
              title: '日化品',
              id: '00bb0651caab4731b193e2bca6be792d'
          }
      ],
      lists: [2, 3, 4, 5, 6, 7, 8, 9, 0],
      index: 0
  },
  onTabsChange: function ({detail}) {
      const {
          index,
      } = detail;

      const { list} = this.data
      // 当前项
      const item = list[index]
      console.log('item', item)
      this.setData({
          index
      })
  },
  // 滑动
  onSwitchTab({ detail}) {
      const {
          current: index
      } = detail
      this.setData({
          index
      })
  },
  /* 转发*/
  onShareAppMessage: function () {
      return {
          title: 'SOL-滚动导航条',
          path: '/pages/scoll-nav/index'
      }
  }
})
