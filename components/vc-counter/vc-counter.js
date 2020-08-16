Component({
  options: {
    addGlobalClass: true,
  },
  properties: {
    //
  },
  data: {
    // 这里是一些组件内部数据
    // input默认是1 
    num: 1,
    // 使用data数据对象设置样式名 
    minusStatus: 'disabled'
  },
  methods: {
    // 这里放置自定义方法
    /* 点击减号 */
    bindMinus: function () {
      let num = this.data.num;
      // 如果大于1时，才可以减 
      if (num > 1) {
        num--;
      }
      // 只有大于一件的时候，才能normal状态，否则disable状态 
      let minusStatus = num <= 1 ? 'disabled' : 'normal';
      // 将数值与状态写回 
      this.setData({
        num: num,
        minusStatus: minusStatus
      });
    },
    /* 点击加号 */
    bindPlus: function () {
      let num = this.data.num;
      // 不作过多考虑自增1 
      num++;
      // 只有大于一件的时候，才能normal状态，否则disable状态 
      let minusStatus = num < 1 ? 'disabled' : 'normal';
      // 将数值与状态写回 
      this.setData({
        num: num,
        minusStatus: minusStatus
      });
    },
    /* 输入框事件 */
    bindManual: function (e) {
      let num = e.detail.value;
      // 将数值与状态写回 
      this.setData({
        num: num
      });
    }
  }
})