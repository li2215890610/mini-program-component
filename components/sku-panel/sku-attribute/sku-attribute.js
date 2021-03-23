// components/sku-panel/sku-attribute/sku-attribute.js
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

  /**
   * 组件的初始数据
   */
  data: {
    /**
     * 
     *  selectValueArr:{
          11: 4
          16: 7
          88: 0
        }

        key: 规格组id 
        value: 规格组下规格id
     */
    selectValueArr:{},         //存放被选中的值
    saveCompareValue: {},      //存放要和选中的值进行匹配的数据
  },

  lifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行 
      // 初始化数据
      this.initData(()=>{
        
        const { defaultValue} = this.data;

        //如果默认选中数据存在
        if (defaultValue) {
          
          const value = this.handleDefaultSkuKey(defaultValue)
          this.setData({
            selectValueArr: value
          },()=>{
            this.checkItem()
          })
        }

      })

    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleChange: function ({ currentTarget}) {

      let { item, groupid:groupId} = currentTarget.dataset
      
      if (!item.isShow) { //如果不可选 就不执行
        return
      }

      let { _id: attributeId } = item

      /**
       *  selectValueArr      存放被选中的值
       */
      let { selectValueArr, defaultValue} = this.data
      
      //如果有默认选中sku，在更改的时候必须清空
      if (defaultValue) {
        this.triggerEvent('clearDefaultValue')  
      }

      // console.log('___start__');
      // console.log(selectValueArr,'_____selectValueArr_____');
      // console.log('_____');

      //selectValueArr中存放被选中的值，选中的值与当前(item)不一样就说明是新值，修改selectValueArr
      if (selectValueArr[groupId] !== attributeId) {
        selectValueArr[groupId] = attributeId;
      }else{
        //selectValueArr中存放被选中的值，与当前选中的值一样 说明是取消选中
        selectValueArr[groupId] = "";
      }

      // console.log('___end__');
      // console.log(selectValueArr,'_____selectValueArr_____');
      // console.log('_____');
  
      this.checkItem()

      this.setData({
        selectValueArr,
      },()=>{
        this.handlePropsChange(selectValueArr)
      })
      
    },
    handlePropsChange: function (selectValueArr) {

      if (Object.keys(selectValueArr).length === 3) {

        this.triggerEvent('handleChange', {
          value: this.integrationSkuId(selectValueArr)
        })  
      }else{
        this.triggerEvent('handleChange', {
          value: null,
        })  
      }
    },
    initData: function (cb) {

      let { productSku , productAttributes, saveCompareValue} = this.data

      let newProductAttributes = [...productAttributes]
  
      for (let i in productSku) {
        //修改sku数据结构格式，改成键值对的方式，以方便和选中之后的值进行匹配
        saveCompareValue[productSku[i].attr_value_str] = productSku[i];
      }
            
      for (let i = 0; i < newProductAttributes.length; i++) {
  
        for (let j = 0; j < newProductAttributes[i].item.length; j++) {
  
          //初始化所有数据均可选
          newProductAttributes[i].item[j].isShow = true 
        }
      }
  
      this.setData({
        productAttributes: newProductAttributes,
        saveCompareValue
      },cb)
  
    },
    checkItem:function () {
    
      let { productAttributes, selectValueArr} = this.data
  
      let option = [...productAttributes]
  
      let result = {};

      for (let index = 0; index < option.length; index++) {
        const element = option[index];
        result[element._id] = selectValueArr[element._id]
      }

      for (let i in option) {
        const last = result[option[i]._id]; //把选中的值存放到字符串last去
  
        for (let k in option[i].item) {
  
          result[option[i]._id] = option[i].item[k]._id; //赋值，存在直接覆盖，不存在往里面添加值

          option[i].item[k].isShow = this.newIsMay(result); //在数据里面添加字段isShow来判断是否可以选择
        }
        
        result[option[i]._id] = last; //还原，目的是记录点下去那个值，避免下一次执行循环时避免被覆盖
      }
      
      this.setData({
        productAttributes: option
      })
    },
    newIsMay(result) {
  
      let { saveCompareValue} = this.data;

      let attrKey = [];

      for (let i in result) {
        attrKey.push(`${i}_${result[i]}`)
        if (!result[i]) {
  
          return true; //如果数组里有为空的值，那直接返回true
        }
      }

      let attrIdStr = attrKey.join(',');

      if (!saveCompareValue[attrIdStr]) {
        return false
      }

      // 匹配选中的数据的库存，若不为空返回true反之返回false
      return saveCompareValue[attrIdStr].stock === 0 ? false : true
    },
    handleDefaultSkuKey: function ({attr_value_str }) {
      /**
       * attr_value_str = "11_6,16_10,88_3"
       */
      let value = {};
  
      attr_value_str.split(',').forEach(e => {
        if (!e) {
          return
        }
     
        const arr = e.split("_")
        const key = arr[0];
        const val = arr[1];
        value[key] = +val;
      });

      return value
    },
    integrationSkuId: function (selectValueArr) {
       /**
       *  saveCompareValue    和选中的值进行匹配的数据
       */

      let { saveCompareValue} = this.data;
      let valueArr = []
      Object.keys(selectValueArr).forEach(key => {
        valueArr.push(`${key}_${selectValueArr[key]}`)
      })

      return saveCompareValue[valueArr.join()]
    }
  }
})