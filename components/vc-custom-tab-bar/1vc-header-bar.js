/** 
<template>
	<view>
		<view class="tab-bar f">
			<view class="tab-bar-border"></view>
			<view v-for="(item,index) in list" :key="index" class="tab-bar-item"
			 @click="switchTab(item.pagePath)">
				<image :src="[selectedTabBer === index ? item.selectedTabBerIconPath : item.iconPath]"></image>
				<view :style="{color: selectedTabBer === index ? selectedTabBerColor : color}">{{item.text}}</view>
			</view>
		</view>
	</view>

</template>

<script>
	export default {
		props: ["selectedTabBer"],
		data() {
			return {
				color: "#AAAAAA",
				selectedTabBerColor: "#FFFFFF",
				list: [{
					pagePath: "/pages/home/home",
					iconPath: "../../static/custom-tab-bar/L-home.png",
					selectedTabBerIconPath: "../../static/custom-tab-bar/L-selected-home.png",
					text: "首页"
				}, {
					pagePath: "/pages/order-list/order-list",
					iconPath: "../../static/custom-tab-bar/L-order.png",
					selectedTabBerIconPath: "../../static/custom-tab-bar/L-selected-order.png",
					text: "订单"
				}, {
					pagePath: "/pages/server/server",
					iconPath: "../../static/custom-tab-bar/L-server.png",
					selectedTabBerIconPath: "../../static/custom-tab-bar/L-selected-server.png",
					text: "服务"
				},{
					pagePath: "/pages/my/my",
					iconPath: "../../static/custom-tab-bar/L-my.png",
					selectedTabBerIconPath: "../../static/custom-tab-bar/L-selected-my.png",
					text: "我的"
				}]
			}
		},
		methods: {
			switchTab(url) {
				// debugger
				uni.switchTab({
					url: url
				})
			}
		}
	}
</script>

<style>
	.tab-bar {
		position: fixed;
		z-index: 100;
		bottom: 0;
		left: 0;
		right: 0;
		height: 148rpx;
		background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXcAAABrCAYAAACMo8KqAAAAAXNSR0IArs4c6QAABC1JREFUeAHt2IEJAzEQA8F8SInuvxU/pIzVuAPNiePwc865H48AAQIEUgLfVBphCBAgQOAvYLkrAgECBIICv3v9ygTnKhIBAuMCLvfxAohPgEBTwHJvzlUqAgTGBXzLjBdAfAIEmgIu9+ZcpSJAYFzAch8vgPgECDQFfMs05yoVAQLjAi738QKIT4BAU8Byb85VKgIExgV8y4wXQHwCBJoCLvfmXKUiQGBcwOU+XgDxCRBoCrjcm3OVigCBcQHLfbwA4hMg0BTwLdOcq1QECIwLuNzHCyA+AQJNAcu9OVepCBAYF/AtM14A8QkQaAq43JtzlYoAgXEBy328AOITINAU8C3TnKtUBAiMC7jcxwsgPgECTQHLvTlXqQgQGBfwLTNeAPEJEGgKuNybc5WKAIFxAZf7eAHEJ0CgKeByb85VKgIExgUs9/ECiE+AQFPAt0xzrlIRIDAu4HIfL4D4BAg0BSz35lylIkBgXMC3zHgBxCdAoCngcm/OVSoCBMYFLPfxAohPgEBTwLdMc65SESAwLuByHy+A+AQINAUs9+ZcpSJAYFzAt8x4AcQnQKAp4HJvzlUqAgTGBVzu4wUQnwCBpoDLvTlXqQgQGBew3McLID4BAk0B3zLNuUpFgMC4gMt9vADiEyDQFLDcm3OVigCBcQHfMuMFEJ8AgaaAy705V6kIEBgXsNzHCyA+AQJNAd8yzblKRYDAuIDLfbwA4hMg0BSw3JtzlYoAgXEB3zLjBRCfAIGmgMu9OVepCBAYF3C5jxdAfAIEmgIu9+ZcpSJAYFzAch8vgPgECDQFfMs05yoVAQLjAi738QKIT4BAU8Byb85VKgIExgV8y4wXQHwCBJoCLvfmXKUiQGBcwHIfL4D4BAg0BXzLNOcqFQEC4wIu9/ECiE+AQFPAcm/OVSoCBMYFfMuMF0B8AgSaAi735lylIkBgXMByHy+A+AQINAV8yzTnKhUBAuMCLvfxAohPgEBTwOXenKtUBAiMC7jcxwsgPgECTQHLvTlXqQgQGBfwLTNeAPEJEGgKuNybc5WKAIFxAct9vADiEyDQFPAt05yrVAQIjAu43McLID4BAk0By705V6kIEBgX8C0zXgDxCRBoCrjcm3OVigCBcQHLfbwA4hMg0BTwLdOcq1QECIwLuNzHCyA+AQJNAZd7c65SESAwLuByHy+A+AQINAUs9+ZcpSJAYFzAt8x4AcQnQKAp4HJvzlUqAgTGBSz38QKIT4BAU8C3THOuUhEgMC7gch8vgPgECDQFLPfmXKUiQGBcwLfMeAHEJ0CgKeByb85VKgIExgUs9/ECiE+AQFPAt0xzrlIRIDAu4HIfL4D4BAg0BVzuzblKRYDAuIDLfbwA4hMg0BSw3JtzlYoAgXEB3zLjBRCfAIGmgMu9OVepCBAYF7DcxwsgPgECTYEXIHRxrMDUyNkAAAAASUVORK5CYII=');
		background-size: 100% 100%;
		background-repeat: no-repeat;
		padding-bottom: env(safe-area-inset-bottom);
	}

	.tab-bar-border {
		background-image: '../../static/index/index-bottom-bg.png';
		background-size: 100% 100%;
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 1px;
		transform: scaleY(0.5);
	}

	.tab-bar-item {
		flex: 1;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	.tab-bar-item image{
		width: 25px;
		height: 25px;
	}

	.tab-bar-item view {
		margin-top: 12rpx;
		font-size: 10px;
		z-index: 1;
		color: #ffffff;
	}
</style>

 
 
 <template>
 	<view>
 		<view class="footer f">
 			<image class="footer-bg" src="../../static/index/index-bottom-bg.png"></image>
 			<view class="fitem f-c-c" v-for="(item,index) in list" :key='index' @click="switchTab({url:item.pagePath})">
 				<image :src="[selectedTabBer === index ? item.selectedTabBerIconPath : item.iconPath]"></image>
 				<view :style="{color: selectedTabBer === index ? selectedTabBerColor : color}">{{item.text}}</view>
 			</view>
 		</view>
 	</view>
 </template>
 
 <script>
 	export default {
 		props: ["selectedTabBer"],
 		data() {
 			return {
 				color: "#AAAAAA",
 				selectedTabBerColor: "#FFFFFF",
 				list: [{
 					pagePath: "/pages/home/home",
 					iconPath: "../../static/custom-tab-bar/L-home.png",
 					selectedTabBerIconPath: "../../static/custom-tab-bar/L-selected-home.png",
 					text: "首页"
 				}, {
 					pagePath: "/pages/order-list/order-list",
 					iconPath: "../../static/custom-tab-bar/L-order.png",
 					selectedTabBerIconPath: "../../static/custom-tab-bar/L-selected-order.png",
 					text: "订单"
 				}, {
 					pagePath: "/pages/server/server",
 					iconPath: "../../static/custom-tab-bar/L-server.png",
 					selectedTabBerIconPath: "../../static/custom-tab-bar/L-selected-server.png",
 					text: "服务"
 				}, {
 					pagePath: "/pages/my/my",
 					iconPath: "../../static/custom-tab-bar/L-my.png",
 					selectedTabBerIconPath: "../../static/custom-tab-bar/L-selected-my.png",
 					text: "我的"
 				}]
 			}
 		},
 		methods: {
 			switchTab({url}) {
 				uni.switchTab({
 					url
 				})
 			}
 		}
 	}
 </script>
 
 <style>
 	.footer {
 		height: 148rpx;
 		width: 100%;
 		position: absolute;
 		left: 0;
 		bottom: 0;
 	}
 
 	.footer .footer-bg {
 		position: absolute;
 		width: 100%;
 		height: 148rpx;
 		bottom: 0;
 		left: 0;
 	}
 
 	.footer .fitem {
 		z-index: 1;
 		flex-grow: 1;
 		flex-direction: column;
 	}
 
 	.fitem image {
 		width: 25px;
 		height: 25px;
 	}
 
 	.footer .fitem view {
 		margin-top: 12rpx;
 		font-size: 10px;
 		z-index: 1;
 		color: #ffffff;
 	}
 </style>
 */