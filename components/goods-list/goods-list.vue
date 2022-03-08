<template>
	<view>
		<view class="goods_list">
			<view class="goods_item" v-for="item in productList" :key="item.goods_id" 
			@click="navigator(item.goods_id)"
			v-if="item.goods_big_logo">
				<image :src="item.goods_big_logo" mode="aspectFill"></image>
				<view class="prices">
					<text>{{item.goods_price}}</text>
					<text>{{item.goods_price}}</text>
				</view>
				<view class="name">
					{{item.goods_name}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"goods-list",
		props:["productList"],
		data() {
			return {
				
			};
		},
		methods: {
			navigator(id) {
				this.$emit('go-detail', id);
			}
		}
	}
</script>

<style lang="scss">
.goods_list{
	padding: 0 15rpx;
	background-color: #eee;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	.goods_item{
		width: 355rpx;
		margin: 10rpx 0;
		padding: 15rpx;
		box-sizing: border-box;
		background-color: #FFFFFF;
		image{
			width: 80%;
			height: 150rpx;
			display: block;
			margin: 0 auto;
		}
		.prices{
			color: $global-thenme-color;
			font-size: 36rpx;
			
			text:nth-child(2){
				color: #999999;
				font-size: 28rpx;
				margin-left: 20rpx;
				text-decoration: line-through;
			}
		}
		.name{
			font-size: 32rpx;
			line-height: 50rpx;
			padding: 6rpx 0;
		}
	}
}
</style>
