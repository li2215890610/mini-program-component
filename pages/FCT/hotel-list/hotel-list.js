Page({
  data: {
    show: false
  },
  onLoad: function () {
  },
  handleOpen:function(){
    this.setData({
      show:true
    })
  },
  handleClose:function (params) {
    this.setData({
      show: false
    }) 
  }
})