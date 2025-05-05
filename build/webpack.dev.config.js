const baseConfig = require('./webpack.base.config');
const {merge} = require('webpack-merge');

module.exports = merge(baseConfig, {
    // devtool: 'cheap-module-eval-source-map'
    devtool: 'eval-cheap-module-source-map'
});
