const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module:{
    rules:[
        {
          test: /\.js/,
          exclude: /(node_modules|bower_components)/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            },
            {
              loader: path.resolve('myloader.js'),
              options: {}
            }
          ]
        },
        {
          test:/\.(s*)css$/,
          use:[MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        }
   ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],
};