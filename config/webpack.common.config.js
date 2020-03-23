
const path = require("path");
const allPlugins = require('./plugins').allPlugins;
const loaderRuls = require('./loaders').rules;

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "index_bundle.js"
    },
    module: {
        rules: loaderRuls
    },
    plugins: allPlugins
}