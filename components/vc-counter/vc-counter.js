Component({
  options: {
    addGlobalClass: true,
  },
  properties: {
    maxValue: {
      type: Number,
      value: 10000
    },
    minValue: {
      type: Number,
      value: 1
    },
    defaultValue: {
      type: Number,
      value: 1
    }
  },
  data: {
    value: 1,
  },
  attached: function () {
    let { defaultValue} = this.data;

    this.setData({
      value: defaultValue,
    })
  },
  methods: {
    reduce: function () {
      let { value, minValue} = this.data;
      // 如果大于1时，才可以减 
      if (value > minValue) {
        value--;
        // 将数值与状态写回 
        this.setData({
          value: value,
        });
      }
    },
    add: function () {
      let { value, maxValue} = this.data;
      // 不作过多考虑自增1 
      if (value !== maxValue) {
        console.log(maxValue)
        value++;
        // 将数值与状态写回 
        this.setData({
          value: value,
        });
      }
    },
    onChange: function (e) {
      const { value} = e.detail;
      this.setData({
        value
      },()=>{
        this.triggerEvent('onChange',value)
      });
    }
  }
})