var webpack = require('webpack');
var HtmlWebPackPlugin = require('html-webpack-plugin');
module.exports={
    module:{
        rules:[
            {
                test:/\.(jsx|js)$/,
                exclude:/node_modules/,
                loader:"babel-loader"
            },
            {
                test:/\.html$/,
                loader:"html-loader"
            }
        ]
    },
    plugins:[
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            fileName:"index.html"
        })
    ]
};