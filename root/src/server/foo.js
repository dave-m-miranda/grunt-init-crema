'use strict';

var bar = require('../client/js/shared/bar');

exports.foo = function (str) {
	return str + ' foo';
};

exports.bar = function (str) {
	return bar.bar(str);
};