const merge =  require('webpack-merge');
const config = require('./webpack.common.config');

const prodConfig = {
    mode: 'production'
}
console.log('\t* Building for Production *');
module.exports = merge(config, prodConfig);