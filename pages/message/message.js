// pages/message/message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type:"",//info，success，error，warning
    btnList:[
      {
        type: 'info',
        btnText:"普通"
      },
      {
        type: 'success',
        btnText:"成功"
      },
      {
        type: 'error',
        btnText:"失败"
      },
      {
        type: 'warning',
        btnText:"警告"
      },
    ]
  },
  onMessage: function ({currentTarget}) {    
    this.setData({
      type: currentTarget.dataset.type,
      message:"消息提示了"
    },()=>{
      this.selectComponent('#message').show()
    })
  },
})