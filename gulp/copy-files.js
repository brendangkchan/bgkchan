const gulp = require('gulp');

gulp.task('copy-files', function() {
	return gulp.src([
    './source/**/*.js'
  ])
    .pipe(gulp.dest('app'));
});
