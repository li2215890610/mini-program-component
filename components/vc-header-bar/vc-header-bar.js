// components/vc-header-bar/vc-header-bar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    nav: {
      type: Object,
      value: {
        'bg': '#323232', //背景色
        'navTitle': "默认标题",
        'opacity': "1",
        'isBackNav': true, //是否显示返回按钮
        'headerBox': true, //是否 header 占位
        'fixed': true, // 是否固定定位
        'color': "#FFFFFF", //标题颜色
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    statusBarHeight: 0,
    titleBarHeight: 0,
    headerBoxHeight: 0,
  },
  lifetimes: {
    attached() {
      wx.getSystemInfo({
        success: (res) => {
          let titleBarHeight = null;
          
          if (res.model.indexOf('iPhone') !== -1) {
            titleBarHeight = 44
          } else {
            titleBarHeight = 48
          }

          this.setData({
            titleBarHeight: titleBarHeight + 'px',
            statusBarHeight: res.statusBarHeight + 'px',
            headerBoxHeight: titleBarHeight + res.statusBarHeight + 'px'
          })
        },
      })
    },
  },
  /**
   * 组件的方法列表
   */
  methods: {
    back: function () {
      console.log('1111')
    }
  }
})