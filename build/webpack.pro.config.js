const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const baseConfig = require('./webpack.base.config');
const {merge} = require('webpack-merge');

module.exports = merge(baseConfig, {
    plugins: [new CleanWebpackPlugin()]
});
