'use strict';

module.exports = function (grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		clean: {
			build: {
				src: ['build']
			}
		},
		copy: {
			main: {
				files: [
					{expand: true, cwd: 'src/', src: ['**'], dest: 'build/' }
				]
			}
		},
		requirejs: {
			compile: {
				options: {
					name: 'main',
					baseUrl: 'src/client/js',
					mainConfigFile: 'src/client/js/config.js',
					out: 'build/client/js/main.js' // still creates optimized.js...why?
				}
			}
		},
		mochaTest: {
			test: {
				options: {
					reporter: 'spec'
				},
				src: ['test/server/**/*.js']
			}
		},
		karma: {
			//continuous integration mode: run tests once in PhantomJS browser.
			continuous: {
				configFile: 'karma.conf.js',
				singleRun: true,
				browsers: ['PhantomJS']
			}
		},
		watch: {
			scripts: {
				files: ['src/**/*.js', 'test/**/*.js'],
				tasks: ['mochaTest', 'karma', 'jshint']
			}
		},
		jshint: {
			files: ['src/**/*.js', 'test/**/*.js'],
			options: {
				ignores: ['src/client/lib/**/*.js'],
				globals: {
					'describe': true,
					'exports': true,
					'it': true,
					'require': true,
					'requirejs': true,
					'window': true,
					'__dirname': true,
					console: true
				},
				globalstrict: true
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-mocha-test');
	grunt.loadNpmTasks('grunt-karma');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.registerTask('default', ['mochaTest', 'karma', 'jshint', 'clean', 'copy', 'requirejs']);
};