const PATH = require('path');
const gulp = require('gulp');
const requireDir = require('require-dir');
const runSequence = require('gulp-run-sequence');
requireDir('./gulp', {recurse: false});

gulp.task('start', function() {
	process.env.IS_DEV = true;
	runSequence(
		'clean', 
		'styles',
		'copy-files',
		'typings', 
		'compile-ts',
		'webpack',
		'nodemon'
	);
});

gulp.task('compile', function() {
	process.env.IS_DEV = false;
	runSequence(
		'clean', 
		'styles',
		'copy-files',
		'typings', 
		'compile-ts',
		'webpack'
	);
});

gulp.task('dev:server', function() {
	process.env.IS_DEV = true;
	runSequence(
		'clean', 
		'dev:styles',
		'copy-files',
		'typings', 
		'compile-ts',
		'dev:webpack',
		'watch-js',
		'watch-ts',
		'dev:nodemon'
	);
});

gulp.task('dev:client', function() {
	process.env.IS_DEV = true;
	runSequence(
		'watch-styles',
		'webpack:watch'
	);
});
