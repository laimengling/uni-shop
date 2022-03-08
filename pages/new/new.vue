<template>
	<view class="news">
		<news-list :news-arr="newsArr" @go-detail="goDetail"></news-list>
	</view>
</template>

<script>
	import newsList from '../../components/news-list/news-list.vue';
	export default {
		data() {
			return {
				newsArr: [],
				pagenum: 1,
				pagesize: 10
			}
		},
		components:{
			newsList
		},
		onLoad() {
			this.getNews();
		},
		methods: {
			async getNews() {
				let res = await this.$myRequest({
					url: '/v1/goods/search',
					pagenum: this.pagenum,
					pagesize: this.pagesize
				});
				this.newsArr = res.data.message.goods;
			},
			goDetail(id) {
				uni.navigateTo({
					url: '/pages/news-detail/news-detail?id=' + id,
				});
			}
		}
	}
</script>

<style lang="scss">
.news{
}
</style>
