<template>
	<view>
		<view class="news_item" v-for="item in newsArr"  
		:key="item.cat_id" 
		v-if="item.goods_small_logo"
		@click="goDetail(item.cat_id)"
		>
			<image :src="item.goods_small_logo" mode="aspectFill"></image>
			<view class="right">
				<view class="title">
					{{item.goods_name}}
				</view>
				<view class="info">
					<view>发表时间：{{item.add_time | formatDate}}</view>
					<view>浏览：{{item.hot_mumber}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:['newsArr'],
		filters:{
			formatDate(date) {
				const nDate = new Date(date);
				const year = nDate.getFullYear();
				const month = nDate.getMonth();
				const day = nDate.getDay();
				return year + '-' + month + '-' + day;
			}
		},
		data() {
			return {
				
			}
		},
		methods: {
			goDetail(id) {
				this.$emit('go-detail', id);
			}
		}
	}
</script>

<style lang="scss">
.news_item{
		display: flex;
		padding: 20rpx 20rpx;
		border-bottom: 1px solid $global-thenme-color;
		image{
			min-width: 200rpx;
			max-width: 200rpx;
			height: 150rpx;
		}
		.right{
			margin-left: 15rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			.title{
				font-size: 33rpx;
			}
			.info{
				font-size: 24rpx;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				line-height: 24rpx;
				text:nth-child(2){
					
				}
			}
		}
	}

</style>
