const webpack = require('webpack');
const ngToolsWebpack = require('@ngtools/webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = (env = {}) => {
  // Main Webpack config object.
  const webpackConfig = {
    entry: {
      'vendor': './src/browser.vendor.ts',
      'app': './src/browser.main.ts',
      'polyfills': [
        'core-js/es6',
        'core-js/es7/reflect',
        'zone.js/dist/zone'
      ]
    },

    resolve: {
      extensions: [ '.js', '.ts', '.html', '.css' ]
    },

    output: {
      path: __dirname + '/dist',
      filename: '[name].[hash].js'
    },

    module: {}
  };

  // Common loaders.
  const loaders = [
    {
      test: /\.html$/,
      use: 'raw-loader'
    },
    {
      test: /\.css$/,
      use: 'raw-loader'
    }
  ];

  // Common plugins.
  const plugins = [
    // see https://github.com/angular/angular/issues/11580
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      __dirname + '/src'
    ),

    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
  ];

  // Production.
  if (env.production) {
    // Loaders.
    loaders.push({
      test: /\.ts$/,
      loader: '@ngtools/webpack'
    });

    // Plugins.
    plugins.push(
      new webpack.optimize.CommonsChunkPlugin({
        name: 'polyfills'
      }),

      new webpack.DefinePlugin({
        'process.env': {
          'ENV': JSON.stringify('production')
        }
      }),

      new ngToolsWebpack.AotPlugin({
        tsConfigPath: __dirname + '/tsconfig.prod.json',
        entryModule: __dirname + '/src/app/app.module#AppModule',
        mainPath: __dirname + '/src/browser.main.ts'
      })
    );
  }
  // Dev.
  else {
    // Loaders.
    loaders.push({
      test: /\.ts$/,
      use: [
        'awesome-typescript-loader',
        'angular2-template-loader',
        'angular2-router-loader'
      ]
    });

    // Plugins.
    plugins.push(
      new webpack.optimize.CommonsChunkPlugin({
        name: ['app', 'vendor', 'polyfills']
      }),

      new webpack.DefinePlugin({
        'process.env': {
          'ENV': JSON.stringify('dev')
        }
      })
    );

    webpackConfig.devtool = 'eval-source-map';

    webpackConfig.devServer = {
      historyApiFallback: true,
      port: 8080,
      stats: 'minimal'
    }
  }

  webpackConfig.plugins = plugins;
  webpackConfig.module.loaders = loaders;

  return webpackConfig;
}
