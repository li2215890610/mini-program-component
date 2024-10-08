## 使用

在需要使用模态框的页面中，引入 `ModalPanel` 组件：

## 属性

| 属性名 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| showClose | Boolean | true | 是否显示关闭按钮 |
| showTitle | Boolean | true | 是否显示标题 |
| text | String | 'Success' | 标题显示的文字 |
| showCheck | Boolean | true | 是否显示成功Icon |
| show | Boolean | false | 是否显示组件 |
| buttonText | String | 'Done' | 按钮显示的文字 |
| bind:close | Function |  | 取消按钮点击事件 |
| bind:done | Function |  | 确定按钮点击事件 |

## 示例

在页面的 `<view>` 标签中，使用 `ModalPanel` 组件：

```html
    <ModalPanel 
        showClose="{{true}}" showTitle="{{true}}" 
        text="测试1" show-check="{{true}}" 
        show="{{isStoreEmpty}}" bind:done="done"
        buttonText="我知道啦！" bind:close="close"
    >
        <view class="store___empty">
            <view>
                <view class="store___empty_title">
                    XXXXXXXX
                </view>
                <view class="store___empty_message">
                    XXXXXXXX
                </view>
                <view class="store___empty_handle">
                    XXXXXXXX
                </view>
            </view>
        </view>
    </ModalPanel>
```

## 方法

| 方法名 | 参数 | 描述 |
| --- | --- | --- |
| done |  | 成功回调 |
| close |  | 隐藏回调 |

