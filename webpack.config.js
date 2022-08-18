const webpack = require('webpack');

const { version } = require('./package.json');

module.exports = {
    name: 'addresses-postcodes-javascript-sdk',
    mode: 'production',
    entry: './index.js',
    output: {
        path: `${__dirname}/dist`,
        filename: 'addresses-postcodes-sdk.js',
        library: 'Addresses Postcodes Javascript SDK',
        libraryTarget: 'umd'
    },
    target: 'web',
    watch: false,
    devtool: 'cheap-module-source-map',
    node: false,
    module: {
        rules: [
            {
                test: /\.?js$/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
}