Component({
  options: {
    addGlobalClass: true,
  },
  properties: {
    maxValue: {
      type: Number,
      value: 10000,
      observer: function (newVal) {
        this.setData({
          maxValue: parseInt(newVal, 10)
        })
      }
    },
    minValue: {
      type: Number,
      value: 1,
      observer: function (newVal) {
        this.setData({
          minValue: parseInt(newVal, 10)
        })
      }
    },
    value: {
      type: Number,
      value: 1,
      observer: function (newVal) {
        this.setData({
          value: parseInt(newVal, 10)
        })
      }
    }
  },
  methods: {
    reduce: function () {
      let {
        value,
        minValue
      } = this.data;
      // 如果大于 minValue 时，才可以减 
      if (value > minValue) {
        value--;
        // 将数值与状态写回 
        this.setData({
          value
        }, () => {
          this.triggerEvent('changeNumber', value)
        });
      }
    },
    add: function () {
      let {
        value,
        maxValue
      } = this.data;
      // 不作过多考虑自增1 
      if (value !== maxValue) {
        value++;
        // 将数值与状态写回 
        this.setData({
          value
        }, () => {
          this.triggerEvent('changeNumber', value)
        });
      }
    },
    changeNumber: function (e) {
      const {
        maxValue,
        minValue
      } = this.data;
      const {
        value
      } = e.detail;
      const newValue = parseInt(value)

      if (newValue >= minValue && newValue <= maxValue) {
        
        this.setData({
          value: newValue
        }, () => {
          this.triggerEvent('changeNumber', newValue)
        });
      } else if (newValue >= minValue && newValue >= maxValue) {
        this.setData({
          value: maxValue
        }, () => {
          this.triggerEvent('changeNumber', maxValue)
        });
      } else {
        this.setData({
          value: maxValue
        })
      }
    }
  }
})