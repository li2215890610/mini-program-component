Component({
  /**
   * 组件的属性列表
   */
  properties: {
    productAttributes: {
      type: Array,
      value: [],
      observer: function (newVal) {
        //   let str = ''
        //   newVal.map((group)=>{
        //     if (group.values) {
        //       str += `${group._id}`
        //       const { _id} = group.values[0];
        //       str += `_${_id},`
        //     }
        //   })

        //   str = str.substr(0,str.length-1)

        //   const { sku } = this.data;
        //   if (sku) {

        //     const selectValue = Array.from(sku).find(e => e.attr_value_str === str)
        //     console.log(selectValue);

        //     this.setData({
        //       selectValue
        //     })
        //   }

      }
    },
    productSku: {
      type: Array,
      value: []
    }
  },
  observers: {
    'selectIndexArr': function (params) {
      const { selectValue, selectIndexArr} = this.data;
      const includeIndex = selectIndexArr.includes(-1)
      //监听选中的 selectIndexArr
      if (selectValue && includeIndex) {
        this.setData({
          selectValue: null
        })
      }
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    isShow: false,
    selectValue: null,
    selectIndexArr:[]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleTouch: function (e) {
      e.stopPropagation();
    },
    handleClickInner: function (e) {

    },
    handleClickConfirm: function (params) {
      const { selectValue, selectIndexArr, productAttributes} = this.data;
      console.log(selectIndexArr.length,'_______selectIndexArr______');
      // console.log(productAttributes,'_________productAttributes_______');
      
      // let messageList = []
      // productAttributes.map((e)=>{
      //   messageList.push(e.name)
      // })

      // if (!selectIndexArr.length) {
      //   wx.showToast({
      //     title: `请选择 ${messageList[0]}:  ${messageList[1]} ${messageList[2]}`,
      //     icon:"none"
      //   })
      //   return
      // }
      
      // for (const key in selectIndexArr) {
      //   console.log(selectIndexArr[key],'______selectIndexArr[key]_____');
        
      //  if (selectIndexArr[key] > 0) {
       
      //   wx.showToast({
      //     title: `请选择 ${messageList[key]}`,
      //     icon:"none",
      //   })
      //  }
      // }






      this.triggerEvent('handleClickConfirm',{
        selectValue
      })
    },
    handleChange: function ({
      detail
    }) {
      //选择sku面板
      console.log(detail, 'handleChange,_______handleChange');
      const { selectValue,selectIndexArr} = detail;
      
      this.setData({
        selectIndexArr
      })

      if (selectValue && selectValue._id) {
        this.setData({
          selectValue,
        })
      }

    },
    handleClickShow: function (params) {
      this.setData({
        isShow: true
      },()=>{
        this.triggerEvent('handleShowSkuPanel')
      })
    },
    handleClickHide: function (params) {
      this.setData({
        isShow: false
      },()=>{
        this.triggerEvent('handleHideSkuPanel')
      })
    },
  }
})