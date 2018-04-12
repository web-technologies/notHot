/**
 * Created by Рашид on 24.02.2018.
 */
const path = require('path');
const webpack = require('webpack');

// var LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
    devtool: 'source-map',
    entry: {
        // 'app': [
        //     'babel-polyfill',
        //     'react-hot-loader/patch',
        //     './src/index'
        // ]
        app: './src/index.jsx'
    },
    // entry: [
    //     require.resolve('react-dev-utils/webpackHotDevClient')
    // ],
    output: {
        path: path.resolve(__dirname, './public/js'),
        filename: '[name].js'
    },
    plugins: [
        // new LiveReloadPlugin(options=[])
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        // new webpack.optimize.ModuleConcatenationPlugin(),
        // new webpack.NoEmitOnErrorsPlugin()
    ],
    module: {
        rules: [
            // { test: /\.css$/, use: 'css-loader' },
            // { test: /\.ts$/, use: 'ts-loader' }
            // {
            //     test: /\.(js|jsx|mjs)$/, /*use: 'jsx-loader',*/
            //     // include: path.resolve(__dirname, 'src'),
            //     exclude: /(node_modules|bower_components)/,
            //     loader: require.resolve('babel-loader'),
            //     options: {
            //         presets: ['@babel/preset-env'],
            //         plugins: ['react-hot-loader/babel'],
            //         cacheDirectory: true,
            //     }
            //     // use: {
            //     //     loader: 'babel-loader',
            //     //     options: {
            //     //         presets: ['@babel/preset-env'],
            //     //         plugins: ['react-hot-loader/babel'],
            //     //         cacheDirectory: true,
            //     //     }
            //     // }
            //
            // }
            {
                test: /\.(js|jsx|mjs)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', "@babel/preset-react"],
                    plugins: ['react-hot-loader/babel'],
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer:{
        // outputPath: path.resolve(__dirname, 'public', 'js'),
        // output:{
        //     publicPath: "/public/"
        // }
        // stats: "errors-only",
    //     filename: "bundle.js",
    //     hot: true,
        contentBase: path.join(__dirname, "public"),
    },
    // watch: true
};