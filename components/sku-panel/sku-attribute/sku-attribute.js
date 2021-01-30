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
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    selectValueArr: [],        //存放被选中的值
    saveCompareValue: {},      //存放要和选中的值进行匹配的数据
    attrSelectIndex: [],       //是否选中 因为不确定是多规格还是但规格，所以这里定义数组来判断
  },

  lifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行 
      // 初始化数据
      this.initData()
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

      let { n, index, item} = currentTarget.dataset
      // console.log(item);
      
      if (!item.isShow) { //如果不可选 就不执行
        return
      }

      let { name: selectName} = item

      /**
       *  selectValueArr      存放被选中的值
       *  attrSelectIndex     是否选中 因为不确定是多规格还是但规格，所以这里定义数组来判断
       *  saveCompareValue    和选中的值进行匹配的数据
       */
      let { selectValueArr, attrSelectIndex, saveCompareValue} = this.data
  
      // console.log('___start__');
      // console.log(selectValueArr,'_____selectValueArr_____');
      // console.log(attrSelectIndex,'_____attrSelectIndex_____');
      // console.log('_____');
  
      //selectValueArr中存放被选中的值，选中的值与当前(item)不一样就说明是新值，修改selectValueArr
      if (selectValueArr[n] != selectName) {
        selectValueArr[n] = selectName;
        attrSelectIndex[n] = index;
      } else {
        //selectValueArr中存放被选中的值，与当前选中的值一样 说明是取消选中
        selectValueArr[n] = "";
        attrSelectIndex[n] = -1; //去掉选中的颜色
      }
  
      // console.log('___end__');
      // console.log(selectValueArr,'_____selectValueArr_____');
      console.log(attrSelectIndex,'_____attrSelectIndex_____');
      // console.log('_____');
  
      this.checkItem()
  
      this.setData({
        selectValueArr,
        attrSelectIndex,
        saveCompareValue,
      },()=>{
        if (attrSelectIndex.length === 3) {
          this.triggerEvent('handleChange', {
            selectValue: saveCompareValue[selectValueArr],
            selectIndexArr: attrSelectIndex,
          })  
        }
      })
      
    },
    initData: function () {

      let { productSku, saveCompareValue , productAttributes} = this.data

      let newProductAttributes = [...productAttributes]
  
      for (let i in productSku) {
        //修改sku数据结构格式，改成键值对的方式，以方便和选中之后的值进行匹配
        saveCompareValue[productSku[i].difference] = productSku[i];
      }
  
      // console.log(saveCompareValue);
      
      for (let i = 0; i < newProductAttributes.length; i++) {
  
        for (let j = 0; j < newProductAttributes[i].item.length; j++) {
  
          //初始化所有数据均可选
          newProductAttributes[i].item[j].isShow = true 
        }
      }
  
      this.setData({
        productAttributes: newProductAttributes,
        saveCompareValue,
        // attrSelectIndex: [0, 0, 0],
        // selectValueArr: []
      })
  
    },
    checkItem: function (params) {
    
      let { selectValueArr, productAttributes} = this.data
  
      let option = [...productAttributes]
  
      let result = []; //定义数组存储被选中的值
  
      for (let i in option) {
        result[i] = selectValueArr[i] ? selectValueArr[i] : "";
      }
  
      for (let i in option) {
  
        const last = result[i]; //把选中的值存放到字符串last去
  
        for (let k in option[i].item) {
  
          result[i] = option[i].item[k].name; //赋值，存在直接覆盖，不存在往里面添加name值
  
          option[i].item[k].isShow = this.isMay(result); //在数据里面添加字段isShow来判断是否可以选择
  
        }
        result[i] = last; //还原，目的是记录点下去那个值，避免下一次执行循环时避免被覆盖
      }
  
      this.setData({
        productAttributes: option
      })
    },
    isMay(result) {
  
      let { saveCompareValue} = this.data;
  
      for (let i in result) {
  
        if (result[i] == "") {
  
          return true; //如果数组里有为空的值，那直接返回true
        }
      }
  
      return !saveCompareValue[result] ? false : saveCompareValue[result].stock == 0 ? false :true; 
      //匹配选中的数据的库存，若不为空返回true反之返回false
    },
  }
})