Component({
  behaviors: [],
  properties: {
    size: {
      type: String,
      value: "normal" // normal small large
    },
    type: {
      type: String,
      value: '' //beauty selection success primary danger warning secondary info dark disabled  按钮的样式类型
    },
    plain: {
      type: Boolean,
      value: false // 按钮是否镂空，背景色透明
    },
    value: {
      type: String,
      value: ""
    },
    hoverClass: {
      type: String,
      value: "btn__hover" // btn__hover none
    },
    loading: {
      type: Boolean,
      value: false // 名称前是否带 loading 图标
    },
    btnStyle: {
      type: String,
      value: ""
    },
    openType: {
      type: String,
      value: ""
    },
    appParameter: {
      type: String,
      value: ""
    },
    hoverStopPropagation: {
      type: Boolean,
      value: false
    },
    hoverStartTime: {
      type: [Number, String],
      value: 20
    },
    hoverStayTime: {
      type: [Number, String],
      value: 70
    },
    lang: {
      type: String,
      value: "en"
    },
    sessionFrom: {
      type: String,
      value: ""
    },
    sendMessageTitle: {
      type: String,
      value: ""
    },
    sendMessagePath: {
      type: String,
      value: ""
    },
    sendMessageImg: {
      type: String,
      value: ""
    },
    showMessageCard: {
      type: Boolean,
      value: false
    }

  },
  data: {},
  methods: {
    onSubmit: function onSubmit(event) {
      var detail = event.detail;
      var option = {};
      this.triggerEvent('submit', detail, option);
    },
    btnClick: function btnClick(event) {
      var detail = event.detail;
      var option = {};
      this.triggerEvent('click', detail, option);
    },
    getUserInfo: function getUserInfo(event) {
      var detail = event.detail;
      var option = {};
      this.triggerEvent('getuserinfo', detail, option);
    },
    onContact: function onContact(event) {
      var detail = event.detail;
      var option = {};
      this.triggerEvent('contact', detail, option);
    },
    getPhoneNumber: function getPhoneNumber(event) {
      var detail = event.detail;
      var option = {};
      this.triggerEvent('getphonenumber', detail, option);
    },
    onError: function onError(event) {
      var detail = event.detail;
      var option = {};
      this.triggerEvent('errror', detail, option);
    }
  }
});