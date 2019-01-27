const base = require('./webpack.base.conf.js');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');

const config = merge(base, {
    mode: 'production',
    stats : 'normal',
    performance: {
        hints: 'warning'
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true 
            }),
            new OptimizeCssAssetsPlugin({  
                cssProcessor: require('cssnano'), 
                cssProcessorPluginOptions: {
                  preset: ['default', { discardComments: { removeAll: true } }],
                },
                canPrint: false, 
                cssProcessorOptions: {safe: false}
            }),
        ],
        
    },
    output: {
        publicPath: './',
    },
    plugins: [
        new CleanWebpackPlugin(['public'],{
            root: path.resolve(__dirname, '../../server/src/'),
        }),
        new HtmlWebpackPlugin({
            template : './public/index.html',
            favicon : './public/favicon.ico',
            filename : 'index.html',
            inject: true,
            hash:true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            },
        })
    ],
});


module.exports = config;