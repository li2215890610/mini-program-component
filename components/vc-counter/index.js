export default Component({
  behaviors: [],
  properties: {
    value: {
      type: Number,
      value: 0,
      observer: function (newVal) {
        this.setData({
          value: parseInt(newVal)
        });
      }
    },
    maxValue: {
      type: Number,
      value: 1,
      observer: function (newVal) {
        this.setData({
          maxValue: parseInt(newVal)
        });
      }
    },
    minValue: {
      type: Number,
      value: 0,
      observer: function (newVal) {
        this.setData({
          minValue: parseInt(newVal)
        });
      }
    },
    disabled: {
      type: Boolean,
      value: false
    }
  },
  data: {},
  attached: function () {},
  methods: {
    addHandler(e) {
      const { minValue, maxValue, disabled, value} = this.data;
      if (maxValue <= value || disabled) {

        return false
      };
      
      this.setData({
        value: value+1
      });
      
      this.triggerEvent('changeNumber', {
        e,
        value,
        minValue,
        maxValue,
        type: 'add'
      });
    },
    minusHandler(e) {
      const { minValue, maxValue, disabled, value} = this.data;

      if (minValue >= value || disabled) {
        return
      };
      
      this.setData({
        value: value-1
      });
      this.triggerEvent('changeNumber', {
        e,
        value,
        minValue,
        maxValue,
        type: 'minus'
      });
    }
  }
});