/* eslint-disable */

var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: [
    "babel-polyfill",
    "./index"
  ],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/dist/"
  },
  plugins: [
    // new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify("production")
      }
    }),
    // new webpack.optimize.UglifyJsPlugin({
    //   compressor: {
    //     warnings: false
    //   }
    // }),
    new HtmlWebpackPlugin({
      filename: '../index.html',
      template: 'index.template.ejs',
      hash: true,
      inject: false,
      uid: Date.now().toString(),
    }),
  ],
  module: {
    loaders: [{
      test: /\.md$/,
      loader: "html-loader!markdown-loader?gfm=false"
    }, {
      test: /\.(js)$/,
      exclude: /node_modules/,
      loader: "babel-loader",
      query: {
        presets: ['es2015', 'react']
      }
    }, {
      test: /\.css$/,
      loader: "style-loader!css-loader"
    }, {
      test: /\.(png|jpg|gif)$/,
      loader: "url-loader?limit=8192"
    }, {
      test: /\.svg$/,
      loader: "url?limit=10000&mimetype=image/svg+xml"
    }]
  }
};
