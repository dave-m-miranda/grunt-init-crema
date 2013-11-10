'use strict';

// Basic template description.
exports.description = 'Create a Node.js web app in which client and server share JavaScript modules.';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template.
exports.template = function(grunt, init, done) {

	init.process({type: 'node'}, [
		// Prompt for these values.
		init.prompt('name'),
		init.prompt('title'),
		init.prompt('description'),
		init.prompt('version'),
		init.prompt('repository'),
		init.prompt('homepage'),
		init.prompt('bugs'),
		init.prompt('licenses', 'MIT'),
		init.prompt('author_name'),
		init.prompt('author_email'),
		init.prompt('author_url')
	], function(err, props) {
		// Fill in additional package.json settings.
		props.keywords = [];
		props.main = 'karma.conf.js';
		props.directories = {
			'test': 'test'
		};
		props.dependencies = {
			'amdefine': '~0.0.8'
		};
		props.devDependencies = {
			'karma-script-launcher': '~0.1.0',
			'karma-firefox-launcher': '~0.1.0',
			'karma-chrome-launcher': '~0.1.0',
			'karma-html2js-preprocessor': '~0.1.0',
			'karma-jasmine': '~0.1.3',
			'karma-requirejs': '~0.1.0',
			'karma-coffee-preprocessor': '~0.1.0',
			'karma-phantomjs-launcher': '~0.1.0',
			'karma': '~0.10.2',
			'karma-chai': '0.0.2',
			'mocha': '~1.13.0',
			'karma-mocha': '~0.1.0',
			'grunt': '~0.4.1',
			'grunt-contrib-requirejs': '~0.4.1',
			'grunt-contrib-copy': '~0.4.1',
			'grunt-contrib-clean': '~0.5.0',
			'chai': '~1.8.1',
			'sinon': '~1.7.3',
			'proxyquire': '~0.5.1',
			'grunt-mocha-test': '~0.7.0',
			'grunt-karma': '~0.6.2',
			'grunt-contrib-watch': '~0.5.3',
			'grunt-contrib-jshint': '~0.7.1',
			'express': '~3.4.4'
		};

		// Files to copy (and process).
		var files = init.filesToCopy(props);

		// Add properly-named license files.
		init.addLicenseFiles(files, props.licenses);

		console.log('files...');
		console.log(files);

		// Actually copy (and process) files.
		init.copyAndProcess(files, props);

		// Generate package.json file.
		init.writePackageJSON('package.json', props);

		// All done!
		done();
	});

};