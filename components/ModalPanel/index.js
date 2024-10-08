Component({
    /**
     * 组件的属性列表
     */
    properties: {
        // 是否显示关闭按钮
        showClose: {
            type: Boolean,
            value: true,
        },
        // 是否显示标题
        showTitle: {
            type: Boolean,
            value: true,
        },
        // 是否显示成功Icon
        showCheck: {
            type: Boolean,
            value: true,
        },
        // 是否显示组件
        show: {
            type: Boolean,
            value: false,
        },
        // 组件显示的文字
        text: {
            type: String,
            value: 'Success'
        },
        // 按钮显示的文字
        buttonText: {
            type: String,
            value: 'Done'
        }
    },

    /**
     * 组件的方法列表
     */
    methods: {
        // 点击按钮触发事件
        handleTap() {
            this.triggerEvent('done')
        },
        // 点击关闭按钮触发事件
        handleClose() {
            this.triggerEvent('close')
        }
    }
})
