// components/FCT/order-search/order-search.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },
  options: {
    addGlobalClass: true,
  },
  /**
   * 组件的初始数据
   */
  data: {
    index:0,
    array: [{ value:"全部", date: 0}, { value:"最近7天", date: 7}, { value:"最近15天", date: 15}, { value:"最近30天", date: 30}],
    tabIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindPickerChange: function(e){
      this.setData({
        index: e.detail.value
      })
    },
    tabClick: function({ currentTarget}){
      this.setData({
        tabIndex: parseInt(currentTarget.dataset.index)
      })
    }
  }
})
