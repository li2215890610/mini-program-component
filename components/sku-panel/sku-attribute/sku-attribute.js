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

    },
    handleChange: function ({ 
      currentTarget
    }) {

      const { attributes, defaultSelect} = this.data;
      console.log(attributes);
      const {
        attribute: attribute_id,
        value: selectValues
      } = currentTarget.dataset;
      
      const newAttributes = [...attributes]
      for (let i = 0; i < newAttributes.length; i++) {
        const { _id, values} = newAttributes[i];
        
        if (_id === attribute_id) {
          console.log(values);
          
          for (let j = 0; j < values.length; j++) {
            const element = values[j];
            console.log(element);

            if (element.isSelect === -1) {
              // 如果是不可选就直接 跳出循环
              break
            }else if (element.isSelect === 1) {
              // 同一组数据库 已经是选中状态 修改为未选中
              element.isSelect = 0
            }else{

              if (element._id === selectValues._id && element.isSelect === 0) {
                element.isSelect = 1
              } else if (element._id === selectValues._id && element.isSelect === 1){
                element.isSelect = 0
              }else{
                
              }


            }


          }
          break
        }

      }

      this.setData({
        attributes: newAttributes
      })

    }
  }
})