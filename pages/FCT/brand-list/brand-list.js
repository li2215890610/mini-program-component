// pages/FCT/brand-list/brand-list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {
        name: "安达仕",
        name_en: "Andaz"
      },
      {
        name: "安达仕",
        name_en: "Andaz"
      },
      {
        name: "安达仕",
        name_en: "Andaz"
      },
      {
        name: "安达仕",
        name_en: "Andaz"
      },
      {
        name: "安达仕",
        name_en: "Andaz"
      },
      {
        name: "安达仕",
        name_en: "Andaz"
      },
      {
        name: "安达仕",
        name_en: "Andaz"
      },
      {
        name: "安达仕",
        name_en: "Andaz"
      },
      {
        name: "安达仕",
        name_en: "Andaz"
      },
      {
        name: "安达仕",
        name_en: "Andaz"
      },
      {
        name: "安达仕",
        name_en: "Andaz"
      },
      {
        name: "安达仕",
        name_en: "Andaz"
      },
      {
        name: "安达仕",
        name_en: "Andaz"
      },
      {
        name: "安达仕",
        name_en: "Andaz"
      },
      {
        name: "安达仕",
        name_en: "Andaz"
      },
      {
        name: "安达仕",
        name_en: "Andaz"
      },
      {
        name: "安达仕",
        name_en: "Andaz"
      },
      {
        name: "安达仕",
        name_en: "Andaz"
      },
      {
        name: "安达仕",
        name_en: "Andaz"
      },
      {
        name: "安达仕",
        name_en: "Andaz"
      },
      {
        name: "安达仕",
        name_en: "Andaz"
      },
      {
        name: "安达仕",
        name_en: "Andaz"
      },
      {
        name: "安达仕",
        name_en: "Andaz"
      },
      {
        name: "安达仕",
        name_en: "Andaz"
      },
      {
        name: "安达仕",
        name_en: "Andaz"
      },
      {
        name: "安达仕",
        name_en: "Andaz"
      },
      {
        name: "安达仕",
        name_en: "Andaz"
      },
    ],
    focus: false
  },

  onClick: function ({currentTarget}) {
    console.log(currentTarget.dataset.item);
    const index = currentTarget.dataset.item;

    let { list} = this.data

    list[index] = {...list[index], selected : list[index].selected ? 0 : 1};

    this.setData({
      list: list
    })

  }
})