<template>
	<view class="pics-container">
		<view class="left-container">
			<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y">
				<view v-for="(item, index) in categories" 
				class="scroll-item" 
				:class="{'active': currentCate === item.cat_id}"
				@click="clickCateItem(index, item.cat_id)"
				>{{item.cat_name}}</view>
			</scroll-view>
		</view>
		<div class="right-container">
			<scroll-view :scroll-top="scrollTop"  scroll-y="true" class="scroll-Y">
				<view class="item" v-for="(item, index) in productList">
					<image :src="item.cat_icon" @click="previewImg(item.cat_name, productList)"></image>
					<text>{{item.cat_name}}</text>
				</view>
				<text v-if="productList.length === 0">暂无数据</text>
			</scroll-view>
		</div>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				categories: [],
				scrollTop: 0,
				currentCate: '',
				productList: []
			}
		},
		onLoad() {
			this.getategoriesC();
		},
		methods: {
			async getategoriesC() {
				const res = await this.$myRequest({
					url: '/v1/categories',
				});
				this.categories = res.data.message;
				this.currentCate = this.categories[0].cat_id;
				this.productList = this.categories[0].children[0].children;
			},
			clickCateItem(index, cat_id){
				this.currentCate = cat_id;
				this.productList = this.categories[index].children[0].children;
				console.log(this.productList);
			},
			previewImg(current, urls){
				let url = _.map(urls, 'cat_icon');
				uni.previewImage({
					current: current,
					urls: url
				});
			}
		}
	}
</script>

<style lang="scss">
	page{
		height: 100%;
	}
.pics-container{
	width: 100%;
	height: 100%;
	display: flex;
	.left-container{
		width: 200rpx;
		height: 100%;
		border-right: 1px solid #eee;
		scroll-view{
			height: 100%;
			.scroll-item{
				height: 120rpx;
				line-height: 120rpx;
				text-align: center;
				font-size: 30rpx;
				border-top: 1px solid #eee;
			}
			.active{
				background-color: $global-thenme-color;
				color: #FFFFFF;
			}
		}
	}
	.right-container{
		width: 520rpx;
		height: 100%;
		margin: 0 auto;
		scroll-view{
			height: 100%;
			.item{
				image{
					width: 520rpx;
					height: 520rpx;
				}
				text{
					font-size: 30rpx;
					line-height: 60rpx;
				}
			}
		}
	}
}
</style>
