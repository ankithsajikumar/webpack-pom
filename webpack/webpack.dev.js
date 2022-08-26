const { merge } = require('webpack-merge');
const common = require('./webpack.config.js');

module.exports = merge(common, {
	mode: 'development',
	devtool: false,
	watch: true,
	watchOptions: {
		aggregateTimeout: 1000,
		ignored: '**/node_modules'
	}
});
