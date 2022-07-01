Component({
  behaviors: [],
  properties: {
    value: {
      type: String,
      value: 0
    },
    max: {
      type: Number,
      value: 100,
      observer: function (newVal) {
        this.setData({
          max: parseInt(newVal)
        })
      }
    },
    type: {
      type: String,
      value: 'number',
      observer: function (newVal) {
        this.setData({
          type: `${newVal}`
        })
      }
    },
    _system_: {
      type: String,
      value: 'ios'
    }
  },
  data: {},
  methods: {},
  attached: function() {
    let host = this;
    let data = host.data;
    let max = parseInt(data.max, 10);
    let value = parseInt(data.value, 10);

    // 超出 max 范围显示 max+
    if (value && max && value > max) {
      host.setData({
        value: max + '+'
      })
    }

    // 设置系统信息
    wx.getSystemInfo && wx.getSystemInfo({
      success: function(res) {
        host.setData({
          _system_: !!~res.system.indexOf('Android') ? 'android' : 'ios'
        });
      }
    });
  }
})