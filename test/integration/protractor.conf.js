exports.config = {
  baseUrl: 'http://localhost:8080/',

  specs: [
    './specs/**/*.spec.ts'
  ],
  exclude: [],

  framework: 'jasmine2',

  jasmineNodeOpts: {
    showTiming: true,
    showColors: true,
    isVerbose: false,
    includeStackTrace: false
  },

  directConnect: true,

  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      'args': ['show-fps-counter=true']
    }
  },

  onPrepare: function () {
    browser.ignoreSynchronization = false;
  }
};
