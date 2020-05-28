var app = getApp()
Page({
  data: {
    list: [],
    startX: 0, //开始坐标
    startY: 0
  },
  onLoad: function () {
    for (var i = 0; i < 10; i++) {
      this.data.list.push({
        content: i + " 向左滑动删除哦,向左滑动删除哦,向左滑动删除哦,向左滑动删除哦,向左滑动删除哦",
        isTouchMove: false //默认全隐藏删除
      })
    }
    this.setData({
      list: this.data.list
    })
  },
  //手指触摸动作开始 记录起点X坐标
  handleTouchstart: function (e) {
    //开始触摸时 重置所有删除
    this.data.list.forEach(function (v, i) {
      if (v.isTouchMove) //只操作为true的
        v.isTouchMove = false;
    })
    this.setData({
      startX: e.changedTouches[0].clientX,
      startY: e.changedTouches[0].clientY,
      list: this.data.list
    })
  },
  //滑动事件处理
  handleTouchmove: function (e) {
      const index = e.currentTarget.dataset.index //当前索引
      const startX = this.data.startX //开始X坐标
      const startY = this.data.startY //开始Y坐标
      const touchMoveX = e.changedTouches[0].clientX //滑动变化坐标
      const touchMoveY = e.changedTouches[0].clientY //滑动变化坐标
      //获取滑动角度
      let angle = this.angle({
        X: startX,
        Y: startY
      }, {
        X: touchMoveX,
        Y: touchMoveY
      });

    this.data.list.forEach( (v, i)=> {
      v.isTouchMove = false
      //滑动超过30度角 return
      if (Math.abs(angle) > 30) return;
      if (i == index) {
        if (touchMoveX > startX){
           //右滑
           v.isTouchMove = false
        }
        else {
          //左滑
          v.isTouchMove = true
        }
      }
    })
    //更新数据
    this.setData({
      list: this.data.list
    })
  },
  /**
   * 计算滑动角度
   * @param {Object} start 起点坐标
   * @param {Object} end 终点坐标
   */
  angle: function (start, end) {
    let _X = end.X - start.X,
      _Y = end.Y - start.Y
    //返回角度 /Math.atan()返回数字的反正切值
    return 360 * Math.atan(_Y / _X) / (2 * Math.PI);
  },
  //删除事件
  handleDelect: function (e) {
    this.data.list.splice(e.currentTarget.dataset.index, 1)
    this.setData({
      list: this.data.list
    })
  }
})