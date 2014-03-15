// Karma configuration
// Generated on Fri Jun 28 2013 14:51:32 GMT+0200 (CEST)

module.exports = function(config) {
  'use strict';
  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: '',

    frameworks: ['requirejs', 'mocha', 'expect'],

    // list of files / patterns to load in the browser
    files: [{
        pattern: 'tests/<%=name%>.js',
        included: false
      }, {
        pattern: 'src/<%=name%>.js',
        included: false
      }, {
        pattern: 'bower_components/knockout.js/knockout.js',
        included: false
      },
      //still relying on node plugin qunit lib, but using own adaptor
      'tests/lib/helper.js',
      'tests/lib/runner.js',
    ],

    // list of files to exclude
    exclude: [

    ],

    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit'
    reporters: ['progress'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['PhantomJS'],

    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 8000,

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,
  });
};
