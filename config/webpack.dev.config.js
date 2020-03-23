const path = require('path');
const merge =  require('webpack-merge');
const config = require('./webpack.common.config');

const devConfig = {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9292
    }
}
console.log('\t* Building for Dev *');
module.exports = merge(config, devConfig);