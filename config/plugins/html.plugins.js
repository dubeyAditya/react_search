const HtmlWebPackPlugin = require("html-webpack-plugin");

const plugins =[
    new HtmlWebPackPlugin({
        template: "./public/index.html",
        filename: "./index.html"
    }),
    //Add New Html Plugins here 
]

module.exports = plugins;
