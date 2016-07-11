const gulp = require('gulp');
const nodemon = require('gulp-nodemon');

gulp.task('nodemon', function() {
  nodemon({
		script: './app/server.js',
	});
});
