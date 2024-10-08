Component({
    // 组件选项，multipleSlots 设置为 true 表示在组件中启用多个插槽
    options: {
        multipleSlots: true,
    },
    // 组件的属性列表
    properties: {
        //没有更多数据了
        // showNomore 属性，类型为 Boolean，默认值为 true
        showNomore: {
            type: Boolean,
            value: true,
        },
        // refresherTriggered 属性，类型为 Boolean，默认值为 false
        refresherTriggered: {
            type: Boolean,
            value: false,
        },
        // update 属性，类型为 Number，默认值为 0，并设置一个观察者
        update: {
            type: Number,
            value: 0,
            observer(val) {
                if (val > 0) {
                    this.updateLayout();
                }
            }
        }
    },

    // 组件的初始数据
    data: {
        H: 0, // H 变量，表示页面滚动的高度
        T: 0, // T 变量，表示页面滚动到顶部的距离
    },

    // 组件的方法列表
    methods: {
        // handleReachBottom 方法，用于处理页面滚动到底部的事件
        handleReachBottom(e) {
            this.triggerEvent('scrollend');
        },
        // handleRefresh 方法，用于处理页面刷新的事件
        handleRefresh(e) {
            this.triggerEvent('pull');
        },
        // updateLayout 方法，用于更新页面布局
        updateLayout() {
            this.createSelectorQuery().select('.page-body-scroll').boundingClientRect((rect) => {
                if (!rect) {
                    return;
                }
                const { top } = rect;
                const { windowHeight } = wx.getWindowInfo();
                this.setData({ H: Math.max(0, windowHeight - top), T: top });
            }).exec();
        }
    },
    // 组件的生命周期函数，attached 表示组件被插入到页面时执行
    lifetimes: {
        attached() {
            this.updateLayout();
        }
    }
})
