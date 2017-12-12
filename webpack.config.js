const webpack = require('webpack');
const ngTools = require('@ngtools/webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env = {}) => {
  // Prod or Dev.
  const environment = env.prod ? JSON.stringify('prod') : JSON.stringify('dev');

  // Main Webpack config object.
  const webpackConfig = {
    entry: {
      'app': './src/browser.main.ts',
      'vendor': './src/browser.vendor.ts',
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
      use: 'raw-loader',
      include: __dirname + '/src/app'
    },
    {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ],
      exclude: __dirname + '/src/app'
    }
  ];

  // Common plugins.
  const plugins = [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),

    new webpack.DefinePlugin({
      'process.env': environment
    })
  ];

  // Production.
  if (env.prod) {
    // Loaders.
    loaders.push({
      test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
      loader: '@ngtools/webpack'
    });

    // Plugins.
    plugins.push(
      new ngTools.AngularCompilerPlugin({
        tsConfigPath: __dirname + '/tsconfig.prod.json',
        entryModule: __dirname + '/src/app/app.module#AppModule',
        mainPath: __dirname + '/src/browser.main.ts',
        sourceMap: true
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
        'angular-router-loader'
      ]
    });

    // Plugins.
    plugins.push(
      // see https://github.com/angular/angular/issues/11580
      new webpack.ContextReplacementPlugin(
          /**
           * The (\\|\/) piece accounts for path separators in *nix and Windows
           */
          /(.+)?angular(\\|\/)core(.+)?/,
          __dirname + '/src', // location of your src
          {
            /**
             * Your Angular Async Route paths relative to this root directory
             */
          }
      ),
    );

    // Dev Tool.
    webpackConfig.devtool = 'eval-source-map';

    // Dev Server.
    webpackConfig.devServer = {
      port: 8080,
      stats: 'minimal'
    }
  }

  webpackConfig.plugins = plugins;
  webpackConfig.module.loaders = loaders;

  return webpackConfig;
}
