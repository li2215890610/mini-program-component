export class status {
  constructor(code) {
    this.code = code;
  }
  getMsg() {
    switch (this.code) {
      case 'N200':
        return "响应成功";
      case 'E103':
        return "登陆过期";
      case 'E400':
        return "参数错误";
      case 'E401':
        return "登陆错误";
      case 'E500':
        return "系统错误";
      case 'requireUrl':
        return "请输入地址";
      case 'requireSuccessFunction':
        return "未定义成功方法";
      case 'requireFailFunction':
        return "未定义Fail方法";
      case 'callbackNotFunction':
        return "未定义回调方法";
      case 'NoData':
        return "没有更多数据";
      default:
        return "";
    }
  }
}