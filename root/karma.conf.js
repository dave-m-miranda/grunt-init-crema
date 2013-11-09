// Karma configuration
// Generated on Sat Oct 05 2013 16:22:29 GMT-0500 (CDT)

module.exports = function (config) {
	config.set({

		// base path, that will be used to resolve files and exclude
		basePath: '',


		// frameworks to use
		frameworks: ['mocha', 'requirejs', 'chai'],


		// list of files / patterns to load in the browser
		files: [
			'test/client/test-main.js',
			{pattern: 'src/client/js/**/*.js', included: false},
			{pattern: 'test/client/lib/**/*.js', included: false},
			{pattern: 'test/client/spec/**/*.js', included: false}
		],


		// list of files to exclude
		exclude: [
			'src/client/js/main.js'
		],


		// test results reporter to use
		// possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
		reporters: ['progress'],


		// web server port
		port: 9876,


		// enable / disable colors in the output (reporters and logs)
		colors: true,


		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,


		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: true,


		// Start these browsers, currently available:
		// - Chrome
		// - ChromeCanary
		// - Firefox
		// - Opera
		// - Safari (only Mac)
		// - PhantomJS
		// - IE (only Windows)
		browsers: ['Firefox'],


		// If browser does not capture in given timeout [ms], kill it
		captureTimeout: 60000,


		// Continuous Integration mode
		// if true, it capture browsers, run tests and exit
		singleRun: false
	});
};
