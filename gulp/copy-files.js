const gulp = require('gulp');

gulp.task('copy-files', function() {
	return gulp.src([
    './source/public/**/*.js'
  ])
    .pipe(gulp.dest('app/public'));
});
