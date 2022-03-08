const BASE_URL = 'https://api-hmugo-web.itheima.net/api/public';
export const myRequest = (options) => {
	return new Promise ((resolve, reject) => {
		uni.request({
			url: BASE_URL + options.url,
			methods: options.methods || 'GET',
			data: options.data || {},
			success: (res) => {
				if(res.data.meta.status === 200) {
					resolve(res);
				} else {
					uni.showToast({
						title: '轮播图获取数据失败'
					});
				}
			},
			fail: (err) => {
				uni.showToast({
					title: '请求接口失败'
				})
				reject(err)
			}
		})
	});
}