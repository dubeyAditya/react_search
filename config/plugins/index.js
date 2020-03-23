
const htmlPlugin = require('./html.plugins');
const cssPlugins = require('./css.plugins');
// const rest = require('./plugins');


module.exports = { allPlugins: [...htmlPlugin, ...cssPlugins] };