const gulp = require('gulp');

gulp.task('watch-ts', function() {
return gulp.watch([
    `./source/**/*.ts`,
    '!gulpfile.babel.js'
  ], ['compile-ts']);
});

gulp.task('watch-js', function() {
return gulp.watch([
    `./source/public/**/*.js`,
    '!gulpfile.babel.js'
  ], ['copy-files']);
});