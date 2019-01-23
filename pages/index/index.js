Page({
  data: {
    listInputForm: [0],
    array: ['A', 'B', 'C'],
    isReview: false,
    isVerify: false,
    value:[]
  },

  insertListInputForm: function () {
    let listInputForm = [...this.data.listInputForm];

    listInputForm.push(listInputForm.length);

    this.setData({
      listInputForm: listInputForm
    });

  },
  changeCurriculumName:function(e){
    let data = this.data.listInputForm[e.currentTarget.dataset.index];
    this.setData({
      [`listInputForm[${e.currentTarget.dataset.index}]`]:{
        ...data,
        curriculumName:e.detail.value
      }
    })
  },
  changeTeacherName: function (e) {
    console.log(e)
    console.log(e.detail.value)
    let data = this.data.listInputForm[e.currentTarget.dataset.index];
    this.setData({
      [`listInputForm[${e.currentTarget.dataset.index}]`]:{
        ...data,
        teacherName: e.detail.value
      }
    })
    
  },
  deleteBind: function () {


    let listInputForm = [...this.data.listInputForm];
    if(listInputForm.length > 1){
      listInputForm.pop(listInputForm.length);

      this.setData({
        listInputForm: listInputForm
      });
    }else{
      wx.showToast({
        title: '至少保留一个',
        icon:'none'
      })
    }

  },
  savaClick: function(){
    console.log(this.data.listInputForm)
  }
})