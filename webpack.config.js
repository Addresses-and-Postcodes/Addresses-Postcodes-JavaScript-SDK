let UnminifiedWebpackPlugin = require('unminified-webpack-plugin');

module.exports = {
    name: 'addresses-postcodes-javascript-sdk',
    mode: 'production',
    entry: './index.js',
    output: {
        path: `${__dirname}/dist`,
        filename: 'addresses-postcodes-sdk.min.js',
        library: 'AddressesPostcodesSDK',
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
    },
    plugins: [
        new UnminifiedWebpackPlugin()
    ]
}