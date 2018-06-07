const path = require("path");

module.exports = {
	entry: "./src/js/app.js",
	output: {
		filename: "js/bundle.js",
		path: path.resolve(__dirname, 'dist')
	},
	mode: "development",
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		compress: true,
		port: 9000
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /(node_modules|bower_components)/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['babel-preset-es2015']
				}
			}
		}, {
			test: /\.scss$/,
			use: [
				"style-loader", // creates style nodes from JS strings
				"css-loader", // translates CSS into CommonJS
				"sass-loader" // compiles Sass to CSS
			]
		}]
	},
	plugins: [
		//new BundleAnalyzerPlugin(),
		// new CompressionPlugin({
		// 	algorithm: "gzip",
		// })
	]
};