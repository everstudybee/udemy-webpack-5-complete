const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        clean: true,
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
    },
    module: {
        rules: [
            {
                test: /\.(png|gif|jpg|jpeg|svg|ico|webp)$/,
                type: 'asset/resource',
            }
        ],
    }
};
