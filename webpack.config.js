
module.exports = process.env.WEBPACK_DEV_SERVER
    ? require('./config/webpack.dev.config')
    : require('./config/webpack.prod.config'); 
