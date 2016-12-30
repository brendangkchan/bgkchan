const gulp = require('gulp');
const nodemon = require('gulp-nodemon');

gulp.task('dev:nodemon', function() {
  nodemon({
		script: './app/server.js',
		env: { 'NODE_ENV': 'development' }
	});
});

gulp.task('nodemon', function() {
  nodemon({
		script: './app/server.js',
		env: { 'NODE_ENV': 'production' }
	});
});
