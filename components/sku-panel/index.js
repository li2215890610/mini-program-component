Component({
  /**
   * 组件的属性列表
   */
  properties: {
    attributes: {
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

        //     const defaultSelect = Array.from(sku).find(e => e.attr_value_str === str)
        //     console.log(defaultSelect);

        //     this.setData({
        //       defaultSelect
        //     })
        //   }

      }
    },
    sku: {
      type: Array,
      value: []
    }
  },
  observers: {
    'btnDisabled': function(numberA, numberB) {
      const { btnDisabled } = this.data;
      // 如果发生改变就清空 所选sku
      if (!btnDisabled) {
        this.setData({
          defaultSelect: null
        })
      }

    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    isShow: false,
    defaultSelect: {},
    btnDisabled: false
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

    },
    handleChange: function ({
      detail
    }) {
      //选择sku面板
      console.log(detail, 'handleChange,_______handleChange');
      // console.log(this.data);
      const { str} = detail;

      const {
        attributes,
        sku
      } = this.data;
      
      if (sku) {

        const defaultSelect = Array.from(sku).find(e => e.attr_value_str === str)
        console.log(defaultSelect);

        this.setData({
          defaultSelect,
          btnDisabled: detail.str.split(',').length === attributes.length
        })
      }

    },
    handleClickShow: function (params) {
      this.setData({
        isShow: true
      })
      this.triggerEvent('handleShowSkuPanel')
    },
    handleClickHide: function (params) {
      this.setData({
        isShow: false
      })
      this.triggerEvent('handleHideSkuPanel')
    },
  }
})