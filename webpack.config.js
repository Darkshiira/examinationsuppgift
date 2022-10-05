const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'DEBUG',
	entry: './src/index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist',
		clean: true
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Development'
		})
	]
}
