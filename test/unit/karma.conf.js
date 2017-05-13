const webpackConfig = require('./webpack.config');

module.exports = config => {
  config.set({
    basePath: '',

    frameworks: ['jasmine'],

    files: [
      {
        pattern: './karma-test-shim.js',
        watched: false
      }
    ],

    preprocessors: {
      './karma-test-shim.js': ['webpack']
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      stats: 'errors-only'
    },

    webpackServer: {
      noInfo: true
    },

    reporters: ['progress'],
    port: 9876,
    colors: true,
    autoWatch: false,
    browsers: ['Chrome'],
    singleRun: true
  });
};
