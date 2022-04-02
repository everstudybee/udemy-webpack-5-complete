const path = require('path');

module.exports = {
    mode: 'none',
    entry: './src/index.js',
    output: {
        clean: true,
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
    },
};
