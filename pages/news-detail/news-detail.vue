<template>
	<view class="news_detail">
		<text class="title">{{detail.goods_name}}</text>
		<view class="info">
			<text>发表时间：{{detail.add_time| formatDate}}</text>
			<text>浏览：{{detail.hot_mumber}}</text>
		</view>
		<view class="content">
			<rich-text :nodes="detail.goods_introduce"></rich-text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: '',
				detail: {}
			}
		},
		filters:{
			formatDate(date) {
				const nDate = new Date(date);
				const year = nDate.getFullYear();
				const month = nDate.getMonth();
				const day = nDate.getDay();
				return year + '-' + month + '-' + day;
			}
		},
		onLoad(options) {
			this.id = options.id;
			this.getNesDetail();
		},
		methods: {
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
.news_detail{
	font-size: 30rpx;
	padding: 0 20rpx;
	.title{
		text-align: center;
		width: 710rpx;
		display: block;
		margin: 20rpx 0;
	}
	.info{
		display: flex;
		justify-content: space-between;
	}
}
</style>
