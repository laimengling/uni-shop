<template>
	<view  class="contact-container">
		<view class="pic"> 
			<image src="http://www.itcast.cn/2018czydz/images/gywmban.jpg" mode="aspectFill"></image>
		</view>
		<view class="contact-info">
			<view class="tel" @click="phoneCall()">联系电话：400-618-9090</view>
			<view class="address">地址：浙江省杭州市下沙 经济开发区4号大街187号盛泰时代山</view>
		</view>
		<map class="map" :latitude="latitude" :longitude="longitude" :markers="covers"></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				longitude: 116.39742,
				latitude: 39.909, 
				covers: [{
					latitude: 39.909,
					longitude: 116.39742,
					iconPath: '../../static/logo.png',
					width: 25,
					height: 25
				}, {
					latitude: 39.90,
					longitude: 116.39,
					iconPath: '../../static/logo.png'
				}]
			}
		},
		methods: {
			phoneCall() {
				uni.makePhoneCall({
					phoneNumber: '18760375006'
				});
			}
		}
	}
</script>

<style lang="scss">
.contact-container{
	.pic{
		image{
			width: 750rpx;
			height: 320rpx;
		}
	}
	.contact-info{
		padding: 10rpx 20rpx;
		font-size: 30rpx;
		view{
			line-height: 80rpx;
			border-bottom: 1px solid #eee;
		}
	}
	.map{
		width: 750rpx;
		height: 750rpx;
	}
}
</style>
