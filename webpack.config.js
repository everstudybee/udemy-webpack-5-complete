const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

module.exports = {
    mode: 'none',
    entry: './src/index.js',
    output: {
        clean: true,
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9999,
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
            },
            {
                test: /\.(txt)$/,
                type: 'asset/source',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            alwaysWriteToDisk: true,
            title: 'Hello World!!!',
        }),
        new HtmlWebpackHarddiskPlugin(),
    ],
};
