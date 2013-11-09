define(['mocker'], function (mocker) {
	'use strict';

	describe("Bar", function () {

		var context = mocker({
			'shared/baz': {
				baz: function (str) {
					return str + ' mock baz';
				}
			}
		});

		it("should be able to add", function (done) {
			context(['shared/bar'], function (bar) {
				expect(bar.bar('test')).to.equal('test bar');
				done();
			});
		});

		it("should call mocked baz", function (done) {
			context(['shared/bar'], function (bar) {
				expect(bar.baz('test')).to.equal('test mock baz');
				done();
			});
		});

	});

});