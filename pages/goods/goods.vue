<template>
	<view class="goods-container">
		<goods-list :productList="productList" @go-detail="goDetail"></goods-list>
		<view class="isOver" v-if="isOver"> ------我是有底线的------</view>
	</view>
</template>

<script>
	import goodsList from '../../components/goods-list/goods-list.vue';
	export default {
		data() {
			return {
				productList: [], // 商品列表
				pageNum: 1, // 页码大小
				pageSize: 20, // 
				isOver: false, // 是否展示完成
			}
		},
		components:{
			goodsList
		},
		onLoad() {
			this.getProductList();
		},
		onReachBottom() { // 触底刷新
			if(!this.isOver){
				this.pageNum ++ ;
				this.getProductList();
			}
		},
		onPullDownRefresh() { // 下拉刷新
			this.pageNum = 1;
			this.productList = [];
			this.isOver = false;
			setTimeout(() => {
				this.getProductList(() => {
					uni.stopPullDownRefresh();
				});
			}, 1000);
		},
		methods: {
			goDetail(id){
				uni.navigateTo({
					url: '/pages/goods-detail/goods-detail?id=' + id
				})
			},
			// 获取产品列表
			async getProductList(callback){
				const res = await this.$myRequest({
					url: '/v1/goods/search',
					data: {
						pagenum: this.pageNum,
						pagesize: this.pageSize
					}
				});
				if(res.data.message.goods.length <  this.pageSize){
					this.isOver = true;
				}
				if(callback) {
					callback();
				}
				this.productList = this.productList.concat(res.data.message.goods);
			}
		},
		
	}
</script>

<style lang="scss">
.goods-container{
	background-color: #eee;
	.isOver{
		width: 100%;
		height: 50px;
		line-height: 50px;
		text-align: center;
		font-size: 28rpx;
	}
}
</style>
