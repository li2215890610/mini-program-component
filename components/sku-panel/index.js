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
  },
  /**
   * 组件的初始数据
   */
  data: {
    isShow: false,
    selectValue: {},
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
      const { selectValue} = this.data;

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
      
      if (selectValue && selectValue._id) {
        this.setData({
          selectValue,
          selectIndexArr
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