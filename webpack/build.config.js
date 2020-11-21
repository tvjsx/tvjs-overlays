const VueLoaderPlugin = require('vue-loader/lib/plugin')
const TerserPlugin = require('terser-webpack-plugin')
const TvjsRef = require('./tvjs-ref-plugin.js')

const webpack = require('webpack')
const path = require('path')

const VERS = require('../package.json').version
const DATE = new Date().toDateString()
const BANNER =

`TVJS Overlays - v${VERS} - ${DATE}\n` +
`    https://github.com/tvjsx/trading-vue-js\n` +
`    Copyright (c) 2020 c451 Code's All Right;\n` +
`    Licensed under the MIT license`

let common = {
    entry: {
        'tvjs-overlays': './src/index_prod.js',
        'tvjs-overlays.min': './src/index_prod.js',
    },
    externals: {
        'trading-vue-js': 'trading-vue-js',
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js',
        library: 'TvjsOverlays',
        libraryTarget: 'umd',
        //libraryExport: "default"
    },
    performance: {
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    module: {
        rules: [{
                test: /\.vue$/,
                exclude: /node_modules/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({
            include: /\.min\.js$/,
            extractComments: {
                banner: BANNER
            }
        })]
    },
    devtool: 'source-map',
    plugins: [
        new VueLoaderPlugin(),
        new webpack.BannerPlugin({
            banner: BANNER
        }),
        new TvjsRef()
    ]
}


module.exports = [
    common
]
