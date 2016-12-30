const gulp = require('gulp');
let browserSync = require('browser-sync');

gulp.task('browser-sync', function(done) {
  browserSync = browserSync.create();
  browserSync.init({
    notify: true,
    proxy: `http://localhost:3000/`,
    https: false,
    files: [
      `app/**/*.*`
    ]
  });
  done();
});
