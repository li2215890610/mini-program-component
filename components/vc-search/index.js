Component({
  options: {
    addGlobalClass: true,
  },
  /**
   * 组件的属性列表
   */
  properties: {
    value: {
      type: String,
      value: ''
    },
    placeholder: {
      type: String,
      value: "搜索"
    },
    maxlength: {
      type: Number,
      value: 140
    },
    disabled: {
      type: Boolean,
      value: false
    },
    focus: {
      type: Boolean,
      value: false
    },
  },
  
  /**
   * 组件的方法列表
   */
  methods: {
    handleBlur: function () {
      
      this.setData({
        focus: false,
        value: ""
      })
    },

    handleChange: function (e) {
      this.setData({
        value: e.detail.value
      },()=>{
        this.triggerEvent('handleChange', e.detail.value) 
      })
    },

    handleFocus: function () {
      const { disabled} = this.data;
      if (disabled) {
        
        return false
      }
      this.setData({
        focus: true
      })
    },

    handleClear: function () {
      this.setData({
        focus: false,
        value: ''
      })
    },

    handleConfirm : function (e) {
      console.log(e.detail.value)
      this.setData({
        focus: false,
        value: e.detail.value
      },()=>{
        this.triggerEvent('handleChange', `${e.detail.value}`) 
      })
    },
  }
})
