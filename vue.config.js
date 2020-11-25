module.exports = {
	//跨域代理
	devServer: {
		proxy: {
			'/api': {
				target: 'https://api.juzishu.com.cn/api/appNews/getIndexInfo.do?data=%7B"studentId"%3A"0"%2C"time_stamp"%3A"1606209388"%7D&partner=1000000&sign=796a57ab2549425204ff7719f457ee8a',
				ws: true,
				changeOrigin: true,
				pathRewrite: {
					'^/api': '/api'
				}
			},
			'/foo': {
				target: '<other_url>'
			}
		}
	},
	lintOnSave: false
}
