/* eslint-disable prefer-template */

module.exports = {
  entry: [
    './client/index.js',
  ],
  output: {
    path: __dirname + '/public/build',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      { test: /\.js?$/, loaders: ['babel'], exclude: /node_modules/ },
    ],
  },
};
