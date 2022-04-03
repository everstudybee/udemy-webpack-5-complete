const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        index: './src/js/index.js',
    },
    output: {
        clean: true,
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
    },
    devServer: {
        port: 9999,
        static: {
            directory: path.join(__dirname, './dist'),
        },
        devMiddleware: {
            index: 'index.html',
            writeToDisk: true,
        },
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.(png|gif|jpg|jpeg|svg|ico|webp)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 3 * 1024,
                    },
                },
                generator: {
                    filename: 'img/[name].[hash][ext][query]',
                },
            },
            {
                test: /\.(txt)$/,
                type: 'asset/source',
            },
            {
                test: /\.(css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ],
            },
            {
                test: /\.(scss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env'],
                        plugins: ['@babel/plugin-proposal-class-properties'],
                    },
                },
            },
            {
                test: /\.(hbs)$/,
                use: [
                    'handlebars-loader',
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            alwaysWriteToDisk: true,
            filename: 'index.html',
            template: 'src/html/index.hbs',
            title: 'Hello World!!!',
            description: 'Description in my file',
        }),
        new HtmlWebpackHarddiskPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/style.[contenthash].css',
        }),
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                extractComments: false,
            }),
        ],
    },
};
