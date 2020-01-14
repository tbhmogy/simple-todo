const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.[hash].js',
        path: path.resolve(__dirname + '/dist'),
    },
    module: {
        rules: [{
            test: /\.js$/,
            include: path.join(__dirname),
            exclude: '/node_modules/',
            use: {
                loader: 'babel-loader',
            },
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
        }],
    },
    plugins: [
        new webpack.DefinePlugin({
            VERSION: JSON.stringify('v.0.0.1'),
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            hash: true,
        }),
    ],
}