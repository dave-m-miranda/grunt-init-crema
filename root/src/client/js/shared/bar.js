if (typeof define !== 'function') {
	var define = require('amdefine')(module);
}

define(['./baz'], function (baz) {
	'use strict';

	return {
		bar: function (str) {
			return str + ' bar';
		},
		baz: function (str) {
			return baz.baz(str);
		}
	};

});