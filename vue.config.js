const path = require('path')

function resolve(dir) {
	return path.join(__dirname, dir);
}

const name = '展示页面' // page title

module.exports = {
	//打包输出路径
	outputDir: 'dist',
	//打包后静态文件输出路径
	assetsDir: 'static',
	//文件公共路径，如果部署在子路径则加上网站子路径
	publicPath: './',
	pages: {
		index: {
			// page 的入口
			entry: 'src/main.js',
			// 模板来源
			template: 'public/index.html',
			// 在 dist/index.html 的输出
			filename: 'index.html',
			// 当使用 title 选项时，
			// template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
			title: name
		}
	},
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
			}
		}
	},
	configureWebpack: {
		//在webpack的name字段中提供应用程序的标题
		//它可以在索引.html插入正确的标题。
		resolve: {
			alias: {
				'@': resolve('src')
			}
		}
	},
	lintOnSave: false
}
