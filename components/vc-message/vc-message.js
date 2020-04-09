Component({
  /**
   * 组件的属性列表
   */
  properties: {
    message: {
      type: String,
      value: "消息提示" // 
    },
    duration: {
      type: Number,
      value: 2
    },
    type:{
      type: String,
      value:"info", // info，success，error，warning
    }
  },


  /**
   * 组件的初始数据
   */
  data: {
    showMessgae: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    show:function(e){

      if (!this.data.showMessgae) {
        this.setData({
          showMessgae: true
        },()=>{
          this.hide()
        })
      }

    },
    hide: function () {
      setTimeout(()=> {
        this.setData({
          showMessgae: false
        })
      }, parseInt(this.data.duration) * 1000) 
    }
  }
})
