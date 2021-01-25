// components/sku-panel/sku-attribute/sku-attribute.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    attributes: {
      type: Array,
      value: [],
    },
    sku: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    defaultSelect: null
  },

  /**
   * 组件的方法列表
   */
  methods: {
    selectValue: function ({
      currentTarget
    }) {

      const { attributes, defaultSelect} = this.data;
      // console.log(attributes);
      const {
        attribute: attribute_id,
        value
      } = currentTarget.dataset;
      const str = `${attribute_id}_${value._id}`
      
      //保存选择对sku
      const newDefaultSelect = {
        ...defaultSelect,
      }
      
      //如果选择的是同一个 就删除
      if (newDefaultSelect[`${attribute_id}`] && newDefaultSelect[`${attribute_id}`] === str) {
        delete newDefaultSelect[`${attribute_id}`]
      }else{
        newDefaultSelect[`${attribute_id}`] = str
      }

      this.setData({
        defaultSelect: newDefaultSelect
      },()=>{

        const selectAttribute = Object.values(newDefaultSelect)

        // if (selectAttribute.length === 3) {
          //处理 为唯一sku标识
          this.triggerEvent('handleChange', {
            str: selectAttribute.join(),
            newDefaultSelect
          }) 
        // }

      })

    }
  }
})