# vc-button

## API

### Button

| 名称                  | 描述                         |
|----------------------|------------------------------|
|`size`                | [说明]：按钮的大小<br>[类型]：`String`<br>[默认值]：`normal`<br>[可选值]：`normal, small, large`|
|`type`                | [说明]：按钮的样式类型<br>[类型]：`String`<br>[默认值]：`""`<br>[可选值]：`beauty, selection, success, primary, danger, warning, secondary, info, dark, disabled`|
|`plain`               | [说明]：按钮是否镂空，背景色透明<br>[类型]：`Boolean`<br>[默认值]：`false`<br>|
|`value`               | [说明]：按钮的文本值支持 `slot`, `slot` 的优先级低于 `value`<br>[类型]：`String`<br>[默认值]：`""`<br>|
|`loading`             | [说明]：按钮文本前是否带 `loading` 图标<br>[类型]：`Boolean`<br>[默认值]：`false`<br>|
|`btn-style`           | [说明]：按钮的自定义样式<br>[类型]：`String`<br>[默认值]：`""`<br>|
|`hover-class`         | [说明]：指定按钮按下去的样式类，当 `hover-class="none"` 时，没有点击态效果<br>[类型]：`String`<br>[默认值]：`btn__hover`<br>[可选值]：`btn__hover, none`<br>|
|`open-type`           | [说明]：同微信小程序 `button` 组件。微信开放能力<br>[类型]：`String`<br>[默认值]：`""`<br>[可选值]：`contact, share, getUserInfo, getPhoneNumber, launchApp`<br>|
|`app-parameter`       | [说明]：同微信小程序 `button` 组件。打开 `APP` 时，向 `APP` 传递的参数<br>[类型]：`String`<br>[默认值]：`""`<br>|
|`hover-stop-propagation`| [说明]：同微信小程序 `button` 组件。指定是否阻止本节点的祖先节点出现点击态<br>[类型]：`Boolean`<br>[默认值]：`false`<br>|
|`hover-start-time`    | [说明]：同微信小程序 `button` 组件。按住后多久出现点击态，单位毫秒<br>[类型]：`Number`<br>[默认值]：`20`<br>|
|`hover-stay-time`     | [说明]：同微信小程序 `button` 组件。手指松开后点击态保留时间，单位毫秒<br>[类型]：`Number`<br>[默认值]：`70`<br>|
|`lang`                | [说明]：同微信小程序 `button` 组件。指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文<br>[类型]：`String`<br>[默认值]：`en`<br>|
|`session-from`        | [说明]：同微信小程序 `button` 组件。会话来源<br>[类型]：`String`<br>|
|`send-message-title`  | [说明]：同微信小程序 `button` 组件。会话内消息卡片标题<br>[类型]：`String`<br>[默认值]：当前标题<br>|
|`send-message-path`   | [说明]：同微信小程序 `button` 组件。会话内消息卡片点击跳转小程序路径<br>[类型]：`String`<br>[默认值]：当前分享路径<br>|
|`send-message-img`    | [说明]：同微信小程序 `button` 组件。会话内消息卡片图片<br>[类型]：`String`<br>[默认值]：截图<br>|
|`show-message-card`   | [说明]：同微信小程序 `button` 组件。显示会话内消息卡片<br>[类型]：`Boolean`<br>[默认值]：`false`<br>|
|`bind:click`          | [说明]：同微信小程序 `button` 组件。按钮点击事件，bind:tap已废弃，请升级组件。<br>[类型]：`Handler`<br>|
|`bindgetuserinfo`     | [说明]：同微信小程序 `button` 组件。用户点击该按钮时，会返回获取到的用户信息，从返回参数的detail中获取到的值同 `wx.getUserInfo`<br>[类型]：`Handler`<br>|
|`bindcontact`         | [说明]：同微信小程序 `button` 组件。客服消息回调<br>[类型]：`Handler`<br>|
|`bindgetphonenumber`  | [说明]：同微信小程序 `button` 组件。获取用户手机号回调<br>[类型]：`Handler`<br>|
|`binderrror`          | [说明]：同微信小程序 `button` 组件。当使用开放能力时，发生错误的回调调<br>[类型]：`Handler`<br>|
|`bind:submit`         | [说明]：`button` 组件 `form-type` 设置为 `submit`, 内置 `form` 表单，点击按钮时触发 `submit` 事件等，`event.detail = {value}`|
|`formType`|`submit`	提交表单,`reset`	重置表单



