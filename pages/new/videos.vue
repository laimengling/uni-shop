<template>
    <view>
      <view v-for="(item,i) in arr" :key="i">id：{{item.id}}---姓名：{{item.name}}  url：  {{item.url}}</view>
    </view>
</template>



<script>
	
	export default {
	    data () {
	      return {
	        arr: []
	      }
	    },
		onLoad() {
			this.getNews();
		},
	    methods: {
			async getNews() {
				const res = await uni.request({
					url: 'http://218.207.195.169:18888/llw/pic/1'
				})
				await this.$myRequest({
					url: '/v1/goods/search',
					data: {
						pagenum: this.pageNum,
						pagesize: this.pageSize
					}
				});
				console.log(res[1].data)
				this.arr=res[1].data;
			}
	    }
	}
	
</script>

<style>

</style>
