<template>
	<view class="home">
		<view class="uni-padding-wrap">
			<view class="page-section swiper">
				<view class="page-section-spacing">
					<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
						<swiper-item v-for="item in swiperArr" :key="item.goods_id">
							<image :src="item.image_src" mode="aspectFit"></image>
						</swiper-item>
					</swiper>
					
				</view>
			</view>
			<!--导航区域-->
			<view class="nav">
				<view class="item" v-for="item in nav" :key="item.icon" @click="navgitionToPath(item.path)">
					<view :class="item.icon"></view>
					<text>{{item.title}}</text>
				</view>
			</view>
			<view class="hot_goods">
				<view class="tit">推荐商品</view>
				<goods-list :productList="productList" @go-detail="goDetail"></goods-list>
			</view>
		</view>
	</view>
</template>

<script>
	import goodsList from '../../components/goods-list/goods-list.vue';
	export default {
		data() {
			return {
				swiperArr: ['color1', 'color2', 'color3'], // 轮播列表
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				productList: [], // 产品列表
				nav: [
					{
						icon: 'iconfont icon-ziyuan',
						title: '黑马超市',
						path: '/pages/goods/goods'
					}, {
						icon: 'iconfont icon-guanyuwomen',
						title: '联系我们',
						path: '/pages/contact/contact'
					}, {
						icon: 'iconfont icon-tupian',
						title: '社区图片',
						path: '/pages/pics/pics'
					}, {
						icon: 'iconfont icon-shipin',
						title: '学习视频',
						path: '/pages/videos/videos'
					}
				], // 导航列表
			}
		},
		components:{
			goodsList
		},
		onLoad() {
			this.getSwiperData();
			this.getProductList();
		},
		methods: {
			// 获取轮播图的数据
			async getSwiperData () {
				const res = await this.$myRequest({
					url: '/v1/home/swiperdata'
				});
				this.swiperArr = res.data.message;
			},
			// 导航栏跳转路径
			navgitionToPath(path){
				uni.navigateTo({
					url: path
				});
			},
			goDetail(id){
				uni.navigateTo({
					url: '/pages/goods-detail/goods-detail?id=' + id
				})
			},
			// 获取产品列表
			async getProductList(){
				const res = await this.$myRequest({
					url: '/v1/goods/search',
					data: {
						pagenum: 1
					}
				});
				this.productList = res.data.message.goods;
			}
		}
	}
</script>

<style lang="scss">
	.home{
		width: 750rpx;
		.swiper{
			height: 380rpx;
			image{
				width: 100%;
				height: 100%;
			}
		}
		.nav{
			display: flex;
			justify-content: space-around;
			.item{
				text-align: center;
				.iconfont{
					width: 120rpx;
					height: 120rpx;
					line-height:120rpx;
					border-radius: 60rpx;
					background-color: $global-thenme-color;
					margin: 10rpx auto;
					color: #FFFFFF;
					font-size: 40rpx;
				}
				text{
					font-size: 30rpx;
				}
			}
		}
		.hot_goods{
			background-color: #eee;
			margin-top: 20rpx;
			overflow: hidden;
			.tit{
				height: 100rpx;
				color: $global-thenme-color;
				text-align: center;
				letter-spacing: 20rpx;
				background-color: #FFFFFF;
				margin: 7rpx 0;
				font-size: 50rpx;
			}
			
		}
	}
</style>
