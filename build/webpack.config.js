const dev = require('./webpack.dev.config.js');
const pro = require('./webpack.pro.config.js');

module.exports = (env, argv) => {
    let config = argv.mode === 'development' ? dev : pro;
    return config;
};
