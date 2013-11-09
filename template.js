'use strict';

// Basic template description.
exports.description = 'Create a Node.js web app in which client and server share JavaScript modules.';

exports.notes = 'Hello, there!';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template.
exports.template = function(grunt, init, done) {

	init.process({type: 'node'}, [
		// Prompt for these values.
		init.prompt('name'),
		init.prompt('description'),
		init.prompt('author_name'),
		init.prompt('licenses', ['MIT', 'MPL-2.0', 'GPL-2.0', 'Apache-2.0'])
	], function(err, props) {

		props.keywords = [];

		// Files to copy (and process).
		var files = init.filesToCopy(props);

		// Add properly-named license files.
		init.addLicenseFiles(files, props.licenses);

		console.log('files...');
		console.log(files);

		// Actually copy (and process) files.
		init.copyAndProcess(files, props);

		// Generate package.json file.
		//init.writePackageJSON('package.json', props);

		// All done!
		done();
	});

};