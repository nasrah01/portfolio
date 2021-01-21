const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: ['babel-polyfill', './src/js/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].[contenthash].js'  
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "src/index.html",
            title: 'Cashing',
            favicon: "src/assets/favicon.png"
        }),
        new MiniCssExtractPlugin({
          filename: '[name].[contenthash].css'
        })
    ],
    module:  {
        rules: [
          {
            test: /\.js?$/,
            exclude: /node_modules/,
            use: { 
              loader: 'babel-loader',  
              options: {presets: ['@babel/preset-env']
              }
            } 
          }, 
          {
            test: /\.scss$/,
            use: [
              MiniCssExtractPlugin.loader,
              //'style-loader', 
              'css-loader', 
              'sass-loader' 
            ]
          },
          {
            test: /\.html$/i,
            loader: 'html-loader',
          },
          {
            test: /\.(png|jpe?g|gif)$/i,
            loader: 'file-loader',
            options: {
              outputPath: 'images',
            },
          },
        ]
      }
    };