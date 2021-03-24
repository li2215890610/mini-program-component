Component({
  /**
   * 组件的属性列表
   */
  properties: {
    productAttributes: {
      type: Array,
      value: [],
    },
    productSku: {
      type: Array,
      value: []
    },
    defaultValue: {
      type: Object,
      value: {}
    }
  },
  lifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行 
      // 初始化数据      
      this.setData({
        selectValue: this.initData()
      })
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    isShow: false,
    selectValue: null,
    counterValue: 1,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleClickConfirm: function () {
      const { selectValue } = this.data;
      
      if (selectValue._id) {
        this.triggerEvent('handleClickConfirm',{
          selectValue
        }) 
      }
    },
    onCounterChange: function ({ detail}) {
      this.setData({
        counterValue: detail
      })
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
          counterValue: 1
        })
      }else{
        this.setData({
          selectValue: this.initData()
        })
      }
    },
    initData: function () {
      const { defaultValue, productSku} = this.data;
      if (defaultValue) {
        return this.handleDefaultValue({
          defaultValue,
          productSku
        })
      }

      let priceList = []
      productSku.map((e)=>{
        priceList.push(e.price)
      })

      priceList.sort()

      let sortPriceList = Array.from(new Set(priceList))
      
      const value = {
        pic: productSku[0].pic
      }
      
      if (sortPriceList.length >= 2) {
        value['price'] = `${sortPriceList[0]}~${sortPriceList[sortPriceList.length -1]}`
      }else{
        value['price'] = `${sortPriceList[0]}`
      }

      return value      
    },
    handleClickShow: function (params) {
      this.setData({
        isShow: true
      },()=>{
        this.triggerEvent('handleShowSkuPanel')
      })
    },
    handleClickHide: function () {
      this.setData({
        isShow: false
      },()=>{
        this.triggerEvent('handleHideSkuPanel')
      })
    },
    handleDefaultValue: function ({
      defaultValue,
      productSku
    }) {

      if (defaultValue) {
        
        let value = {};

        productSku.forEach((e) => {
          if (defaultValue._id === e._id) {
            value = {...e}
          }
        });
        
        return {
          _id: value._id,
          stock: value.stock,
          price: value.price,
          originPrice: value.origin_price,
          name: value.name,
          img: value.pic,
        }
      }
    },
    handleTouch: function (e) {
      e.stopPropagation();
    },
    clearDefaultValue: function () {
      this.triggerEvent("clearDefaultValue")
    },
    handleClickInner: function (e) {

    },
  }
})