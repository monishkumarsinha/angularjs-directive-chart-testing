module.exports = function (config) {

  'use strict';

  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: 'app',

    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      'components/jquery/jquery.js',
      'components/jasmine-jquery/lib/jasmine-jquery.js',
      'components/angular/angular.js',
      'components/angular-mocks/angular-mocks.js',
      'scripts/*.js',
      'scripts/**/*.js',
      'views/**/*.html',
      '../test/spec/**/*.js'
    ],

    preprocessors: {
      'views/**/*.html': 'html2js'
    },

    // list of files to exclude
    exclude: [],

    // test results reporter to use
    // possible values: dots || progress || growl
    reporters: ['progress'],

    // web server port
    port: 8080,

    // cli runner port
    runnerPort: 9100,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    //-  (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['Safari'],

    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 5000,

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false

  });
};
