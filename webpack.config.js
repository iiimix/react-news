
var webpack = require('webpack');
var path = require("path");

module.exports = {
	entry: "./src/js/root.jsx",

	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "/")
	},

	devtool: "#source-map",
	module : {
		rules : [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					"presets" : ['es2015','react']
				}
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			}
		]
	},

	devServer : {

		inline: true,
		hot: true,
		port: 9090,
		proxy: {
			'/v2': {
				target: 'http://api.douban.com',
				secure: false,
				changeOrigin: true,
				pathRewrite: {
					'/^/v2': '/v2'
				}
			}
		}
	},
	resolve: {
	    extensions: ['.js', '.jsx','.json']
	},

	plugins: [
		// new webpack.optimize.UglifyJsPlugin()
	]

}