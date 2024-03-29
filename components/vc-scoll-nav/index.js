Component({
  properties: {
    tabs: {
      type: Array,
      value: []
    },
    current: {
      type: Number,
      value: '',
      observer(newVal) {
        // 监听当前index值，切换
        this.updated(newVal)
      }
    }
  },
  data: {
    showNavDrap: false,
    activeIndex: 0,
    navScrollLeft: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 显示下拉框
     */
    showAllNav() {
      this.setData({
        showNavDrap: !this.data.showNavDrap
      })
    },
    /**
     * 触发 点击事件
     */
    onClick({ currentTarget}) {
      const {
        index,
        pop
      } = currentTarget.dataset
      this.updated(index, pop)
    },
    /**
     * 切换
     */
    updated(index, pop) {
      // 点击弹出的选项
      if (pop) {
        this.setData({
          showNavDrap: !this.data.showNavDrap
        })
      }
      // 设置当前位置
      const query = wx.createSelectorQuery().in(this)
      query
        .selectAll('.label-item')
        .boundingClientRect((rect)=> {
          let width = 0
          for (let i = 0; i < index; i++) {
            width += rect[i].width
          }
          //大于屏幕一半的宽度则滚动
          let clientWidth = wx.getSystemInfoSync().windowWidth / 2

          if (width > clientWidth) {
            this.setData({
              navScrollLeft: width + rect[index].width / 2 - clientWidth
            })
          } else {
            this.setData({
              navScrollLeft: 0
            })
          }
        })
        .exec()
      //设置当前样式
      this.setData({
        activeIndex: index
      },()=>{
        this.triggerEvent('change', {
          index: index
        })
      })
    }
  }
})
