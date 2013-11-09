"use strict";

var chai = require('chai'),
	proxyquire = require('proxyquire'),
	sinon = require('sinon'),
	expect = chai.expect,
	mockBar = {},
	foo = proxyquire('../../src/server/foo', { '../client/js/shared/bar': mockBar });

describe('foo module', function () {

	it('should append foo', function () {
		expect(foo.foo('test')).to.equal('test foo');
	});

	it('should call bar', function () {
		var stub = sinon.stub(mockBar, 'bar').returns('test mock bar');
		expect(foo.bar('test')).to.equal('test mock bar');
		expect(stub.calledWith('test')).to.equal(true);
	});

});