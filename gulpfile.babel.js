const PATH = require('path');
const gulp = require('gulp');
const requireDir = require('require-dir');
const runSequence = require('gulp-run-sequence');
requireDir('./gulp', {recurse: false});

gulp.task('compile', function() {
	runSequence(
		'clean', 
		'copy-files',
		'styles',
		'typings', 
		'compile-ts'
	);
});

gulp.task('dev', function() {
	runSequence(
		'clean', 
		'copy-files',
		'styles',
		// 'typings', 
		'compile-ts',
		'watch-styles',
		'watch-ts',
		'watch-js',
		'nodemon'
	);
});