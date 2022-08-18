const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');

console.log('\nBuilding Addresses Postcodes Javascript SDK...');

process.env.NODE_ENV = 'production';

webpack(webpackConfig, function (err, stats) {
  if (err) {
    throw err;
  }

  console.log('Build complete.\n');

  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n');
});