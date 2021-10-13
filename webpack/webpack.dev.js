const commonConfiguration = require('./webpack.common.js');
const { merge } = require('webpack-merge');

module.exports = merge(commonConfiguration, {
    mode: 'development',
    watch: true,
    devtool: 'source-map'
});