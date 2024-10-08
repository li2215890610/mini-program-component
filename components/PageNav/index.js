Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 是否固定导航栏
    fixed: {
      type: Boolean,
      value: false,
    },
    // 导航栏与页面内容的间隙
    gap: {
      type: Number,
      value: 12,
    },
    // 是否隐藏返回按钮图标
    hideIcon: {
      type: Boolean,
      value: false,
    },
    // 是否自定义返回
    customBack: {
      type: Boolean,
      value: false,
    },
    // 导航栏标题
    navigationBarTitleText: {
      type: String,
      value: '首页'
    },
    // 导航栏文字颜色
    navigationBarTextStyle: {
      type: String,
      value: '#FFFFFF',
    },
    // 导航栏背景颜色
    navigationBarBackgroundColor: {
      type: String,
      value: '#000000',
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    // 导航栏的坐标和尺寸
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    width: 0,
    height: 0,
    // 屏幕的宽度和高度
    screenWidth: 0,
    screenHeight: 0,
    // 返回按钮的状态
    backStatus: 0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 处理返回按钮的点击事件
    handleBack() {
      const {
        customBack
      } = this.properties;

      if (customBack) {
        // 如果自定义了返回按钮，触发自定义事件
        this.triggerEvent('handleCustomBack')
        return
      }
      // 根据backStatus的值，决定是跳转到首页还是返回上一页
      const {
        backStatus
      } = this.data
      if (backStatus === 1) {
        // 跳转到首页
        wx.switchTab({
          url: '/pages/home/home'
        })
      }
      if (backStatus === 2) {
        // 返回上一页
        wx.navigateBack({})
      }
    }
  },
  // 组件的生命周期函数
  lifetimes: {
    // 组件被挂载时调用
    attached() {
      // 获取屏幕宽高
      const {
        screenHeight,
        screenWidth
      } = wx.getWindowInfo()
      // 获取菜单按钮的坐标和尺寸
      const rect = wx.getMenuButtonBoundingClientRect()
      // 获取当前页面栈
      const pages = getCurrentPages()

      const {
        left,
        top,
        width,
        height,
        right,
        bottom
      } = rect
      // 设置组件的初始数据
      this.setData({
        left,
        top,
        right,
        bottom,
        width,
        height,
        screenHeight,
        screenWidth,
        // 如果页面栈长度大于1，说明不是首页，返回上一页；否则跳转到首页
        backStatus: pages.length > 1 ? 2 : 1,
      })
    }
  }
})
