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
    // 'selectIndexArr': function (params) {
    //   const { selectValue, selectIndexArr} = this.data;
    //   const includeIndex = selectIndexArr.includes(-1)
    //   //监听选中的 selectIndexArr
    //   if (selectValue && includeIndex) {
    //     // this.setData({
    //     //   selectValue: null
    //     // })
    //     this.initData()
    //   }
    // }
  },
  lifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行 
      // 初始化数据
      this.setData({
        selectValue: this.initData()
      })
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
    },
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
      const { selectValue } = this.data;
      
      if (selectValue._id) {
        this.triggerEvent('handleClickConfirm',{
          selectValue
        }) 
      }
    },
    handleChange: function ({
      detail
    }) {
      //选择sku面板
      console.log(detail, 'handleChange,_______handleChange');
      const { value} = detail;
      
      if (value && value._id) {
        this.setData({
          selectValue: value,
        })
      }else{
        this.setData({
          selectValue: this.initData()
        })
      }
    },
    initData: function (params) {
      let { productSku } = this.data;

      let priceList = []
      productSku.map((e)=>{
        priceList.push(e.price)
      })

      priceList.sort()

      let sortPriceList = Array.from(new Set(priceList))
      
      const skuDefaultValue = {
        pic: productSku[0].pic
      }
      
      if (sortPriceList.length >= 2) {
        skuDefaultValue['price'] = `${sortPriceList[0]}~${sortPriceList[sortPriceList.length -1]}`
      }else{
        skuDefaultValue['price'] = `${sortPriceList[0]}`
      }

      console.log(skuDefaultValue,'_____________selectValue___________');

      return skuDefaultValue      
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