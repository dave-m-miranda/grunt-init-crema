define(['shared/bar'], function (bar) {
	'use strict';

	var str = 'test';

	// Call bar module and put its result in the #client element.
	$('#client').html(bar.bar(str));

	// Call server and put its result in #server element.
	$.ajax({
		url: '/api/bar?str=' + str
	}).done(function (data) {
			$('#server').html(data);
		});
});