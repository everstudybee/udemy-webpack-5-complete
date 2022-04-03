const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        'hello-world': './src/js/hello-world.js',
        ship: './src/js/ship.js'
    },
    output: {
        clean: true,
        filename: 'js/[name].js',
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
           writeToDisk: false,
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
                    filename: 'img/[name][ext][query]',
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
            filename: 'css/[name].css',
        }),
    ],
    optimization: {
        minimize: false,
        minimizer: [
            new TerserPlugin({
                extractComments: false,
            }),
        ],
    },
};
