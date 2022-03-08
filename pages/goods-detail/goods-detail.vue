<template>
	<view class="goods-detail">
		<swiper indicator-dots>
			<swiper-item v-for="(item ,index) in detail.pics" :key="index">
				<image :src="item.pics_big" mode="aspectFill"></image>
			</swiper-item>
		</swiper>
		<view class="simple">	
			<view class="price">
				<text>￥{{detail.goods_price}}</text>
				<text>￥{{detail.goods_number}}</text>
			</view>
			<text class="title">{{detail.goods_name}}</text>
		</view>
		<view class="detail">
			<text>货号：{{detail.cat_one_id}}</text>
			<text>库存：{{detail.goods_number}}</text>
		</view>
		<view class="content">
			<text>详细介绍</text>
			<rich-text :nodes="detail.goods_introduce"></rich-text>
		</view>
		<view class="nav">
			<uni-goods-nav :fill="true"  :options="options" :buttonGroup="buttonGroup"  @click="onClick" @buttonClick="buttonClick" />
		</view>
	</view>
</template>

<script>
	import uniGoodsNav from '@/components/uni-goods-nav/uni-goods-nav.vue';
	export default {
		data() {
			return {
				id: '',
				detail: {},
				options: [{
					icon: 'headphones',
					text: '客服'
				}, {
					icon: 'shop',
					text: '店铺',
					info: 2,
					infoBackgroundColor:'#007aff',
					infoColor:"red"
				}, {
					icon: 'cart',
					text: '购物车',
					info: 2
				}],
				buttonGroup: [{
				  text: '加入购物车',
				  backgroundColor: '#ff0000',
				  color: '#fff'
				},
				{
				  text: '立即购买',
				  backgroundColor: '#ffa200',
				  color: '#fff'
				}
				]
			}
		},
		components: {uniGoodsNav},
		onLoad(options) {
			this.id = options.id;
			this.getNesDetail();
		},
		methods: {
			 onClick (e) {
				uni.showToast({
				  title: `点击${e.content.text}`,
				  icon: 'none'
				})
			  },
			  buttonClick (e) {
				console.log(e)
				this.options[2].info++
			  },
			async getNesDetail() {
				let res = await this.$myRequest({
					url: '/v1/goods/detail',
					data: {
						goods_id: this.id
					}
				});
				this.detail = res.data.message;
			}
		}
	}
</script>

<style lang="scss">
.goods-detail{
	background-color: #eee;
	position: relative;
	swiper{
		height: 700rpx;
		image{
			width: 100%;
			height: 100%;
		}
	}
	text{
		line-height: 50rpx;
		font-size: 32rpx;
	}
	.simple{
		padding: 10rpx;
		background-color: #FFFFFF;
		
		.price{
			text:nth-child(1){
				color: $global-thenme-color;
				font-weight: bold;
				margin: 0 10rpx 0 0;
			}
			text:nth-child(2){
				font-size: 26rpx;
				color: #a8a8a8;
				text-decoration: line-through;
			}
		}
		.title{
			
		}
	}
	.detail{
		background-color: #FFF;
		padding: 10rpx;
		margin: 10rpx 0;
		text{
			display: block;
		}
	}
	.content{
		padding: 10rpx;
		background-color: #FFFFFF;
		text{
			display: block;
			margin: 0 0 10rpx 10rpx;
		}
	}
	.nav{
		width: 100%;
		position: fixed;
		bottom: 10rpx;
	}
}
</style>
