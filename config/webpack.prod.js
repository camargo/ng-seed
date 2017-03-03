const webpack = require('webpack');
const ngToolsWebpack = require('@ngtools/webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const helpers = require('./helpers');

const webpackProdConfig = {
  entry: {
    'vendor': './src/browser.vendor.ts',
    'app': './src/browser.main.ts',
    'polyfills': [
      'core-js/es6',
      'core-js/es7/reflect',
      'zone.js/dist/zone'
    ]
  },

  output: {
    path: __dirname + '/../dist',
    filename: '[name].[hash].js'
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        exclude: /\.spec.ts$/,
        loader: '@ngtools/webpack'
      },
      {
        test: /\.html$/,
        loader: 'raw-loader'
      },
      {
        test: /\.css$/,
        loader: 'raw-loader'
      }
    ]
  },

  resolve: {
    extensions: [ '.js', '.ts', '.html', '.css' ]
  },

  plugins: [
    // see https://github.com/angular/angular/issues/11580
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      './src'
    ),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'polyfills'
    }),

    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),

    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify('production')
      }
    })
  ]
};

webpackProdConfig.plugins.push(new ngToolsWebpack.AotPlugin({
  tsConfigPath: helpers.root('tsconfig.prod.json'),
  entryModule: helpers.root('src' , 'app', 'app.module#AppModule'),
  mainPath: helpers.root('src', 'browser.main.ts')
}));

module.exports = webpackProdConfig;
