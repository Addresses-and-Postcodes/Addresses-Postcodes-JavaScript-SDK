//webpack.config.js
const path = require('path');
let UnminifiedWebpackPlugin = require('unminified-webpack-plugin');

module.exports = {
  plugins: [new UnminifiedWebpackPlugin()],
  mode: "production",
  devtool: "inline-source-map",
  entry: {
    bundle: "./index.ts",
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: "addresses-postcodes-sdk.min.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      { 
        test: /\.tsx?$/,
        loader: "ts-loader"
      }
    ]
  }
}