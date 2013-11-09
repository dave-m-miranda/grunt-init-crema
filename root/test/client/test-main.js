'use strict';

var tests = Object.keys(window.__karma__.files).filter(function (file) {
	return (/Spec\.js$/).test(file);
});

requirejs.config({
	baseUrl: '/base/src/client/js',
	paths: {
		'mocker': '/base/test/client/lib/mocker'
	},
	deps: tests,
	callback: window.__karma__.start
});
