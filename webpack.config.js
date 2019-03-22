const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin'); //清除dist文件夹

module.exports = {
    mode: 'development',
    
    devtool: 'cheap-module-eval-source-map', // development：cheap-module-eval-source-map production：cheap-module-source-map

    entry: { //入口起点(entry point)
        home: './src/home.js',
        other: './src/other.js'
    },
    output: { //出口
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '', //全局公共的路径 比如http://www.youzu.com
    },
    plugins: [
        new CleanWebpackPlugin(), // 清空dist目录
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'home.html',
            chunks: ['home']
        }),
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'other.html',
            chunks: ['other']
        })]
}