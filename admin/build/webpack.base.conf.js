const path = require('path');
const devMode = process.env.NODE_ENV !=='production';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, '../'),
    performance: {
        hints: 'warning'
    },
    entry: {
        app : './src/main.js'
    },
    output: {
        path: path.resolve(__dirname, '../../server/src/public'), 
        filename: 'js/[name].[hash:8].js'
    },
    resolve: { 
        extensions: ['.js', '.less', '.json'],
        alias:{
            '@': path.resolve(__dirname,'../src'),
        }
    },
    node: {
        setImmediate: false,
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty'
    },
    
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                include: [
                    path.resolve(__dirname, '../src'),
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg|mp4|webm|ogg|mp3|wav|flac|aac|woff2?|eot|ttf|otf)$/,
                loader: 'url-loader',
            },
            {
                test: /\.css$/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.less/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    {
                        loader: 'less-loader', 
                        options: {
                         modifyVars: {
                           'primary-color': '#4E82FF',
                           'link-color': '#4E82FF',
                           'warning-color': '#FAAD13',
                           'error-color': '#DF4848',
                           'heading-color': '#111E2E',
                           'text-color': '#34404D',
                           'text-color-secondary': '#646D77',
                           'disabled-color': '#C3C7CB',
                           'border-color-base': '#DCDEE0',
                           'box-shadow-base': '#4E82FF',
                         },
                         javascriptEnabled: true,
                       }
                    }
                ]
            },
        ]
    },
    optimization:{
        runtimeChunk:{
            name:'./runtime'
        },
        splitChunks:{
            minSize:30000,
            cacheGroups:{
                vendors:{
                    test: /node_modules/, 
                    chunks: 'initial',
                    name: 'vendor',
                    priority: 10
                },
                commons:{
                    test: /src/,  
                    chunks: "initial",
                    name: "common", 
                    minChunks: 2,
                    minSize: 0 
                }

            }
        }
    },
    plugins: [
        new CopyWebpackPlugin([{
            from: path.resolve(__dirname, '../static'),
            to: path.resolve(__dirname, '../dist/static'),
            ignore: ['.*']
        }]),

        new MiniCssExtractPlugin({ 
            filename: devMode ? 'css/[name].css' : 'css/[name].[hash:8].css',
            chunkFilename: devMode ? 'css/[name].css' : 'css/[name].[hash:8].css'
          })
    ],
};
