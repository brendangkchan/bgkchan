const gulp = require('gulp');

gulp.task('copy-files', function() {
	return gulp.src([
    './source/public/**/*.js',
    './source/public/**/*.html',
    './source/public/**/*.png'
  ])
    .pipe(gulp.dest('app/public'));
});
