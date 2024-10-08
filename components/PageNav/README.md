```markdown
# PageNav 组件

`PageNav` 是一个用于实现页面导航功能的小程序组件。

## 功能

- 实现页面导航功能，包括返回按钮、标题和右侧区域。
- 支持固定导航栏。
- 支持自定义返回按钮的图标和点击事件。

## 使用方法

1. 在小程序项目中引入 `PageNav` 组件。
2. 在需要使用导航栏的页面中，使用 `<page-nav>` 标签引入组件。
3. 通过 `properties` 属性传入导航栏的配置参数。

## 属性

| 属性名       | 类型    | 默认值 | 说明                                                         |
| ------------ | ------- | ------ | ------------------------------------------------------------ |
| title        | String  | ''     | 导航栏标题                                                   |
| hideIcon     | Boolean | false  | 是否隐藏返回按钮图标                                         |
| fixed        | Boolean | false  | 是否固定导航栏                                               |
| gap          | Number  | 0      | 导航栏与页面内容的间隙                                       |
| navigationBarTitleText | String | '首页'     | 导航栏与页面内容的间隙                           |
| navigationBarTextStyle | String | '#FFFFFF'  | 导航栏与页面内容的间隙                           |
| navigationBarBackgroundColor    | String | '#000000' | 导航栏与页面内容的间隙                   |
| navigationBarBackgroundColor    | String | '#000000' | 导航栏与页面内容的间隙                   |
| customBack   | Boolean | false  | 自定义返回，如果开启在组件绑定  bind:handleCustomBack="handleCustomBack" 自定义跳转页面 |

## 示例

```html
<page-nav
  title="页面标题"
  hideIcon="false"
  fixed="false"
  gap="0"
  bind:handleCustomBack="handleCustomBack"
/>
```

## 注意事项

- 请确保在项目中正确引入图标资源（如 `back.svg` 和 `back-home.svg`）。
- `handleCustomBack` 方法需要在组件外部定义，以处理返回按钮的点击事件。
