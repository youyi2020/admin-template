const base = require('./webpack.base.conf.js');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const config = merge(base, {
    mode: 'development',
    devtool: 'inline-source-map',
    optimization: {
        minimize: false,
    },
    performance: {
        hints: false,
    },
    output: {
        publicPath: '/',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            favicon : './public/favicon.ico',
            filename : 'index.html',
            inject: true,
            hash: false
        }),
        new webpack.HotModuleReplacementPlugin() 
    ],
    devServer: {
        port: '8080',
        host:'localhost',
        headers: {
            'X-foo': '112233'
        },
        compress: true,
        historyApiFallback: true,
        hot: true,
        inline : true,
        overlay : true,
        stats : 'normal',
        https: false,
        noInfo: true,
        open: true,
        proxy: {}
    }
});

module.exports = config;
