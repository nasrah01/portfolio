const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: ['babel-polyfill', './src/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/index_bundle.js' 
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "src/index.html",
        }),
        new MiniCssExtractPlugin({
            filename: 'main.css'
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
              //MiniCssExtractPlugin.loader,
              'style-loader', 
              'css-loader', 
              'sass-loader' 
            ]
          },
          {
            test: /\.html$/i,
            loader: 'html-loader',
            options: {
              limit: 8 * 1024,
              esModule: false,
              publicPath: './'
            }
          },
          {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'url-loader',
              },
            ],
          },
        ]
      }
    };