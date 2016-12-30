const gulp = require('gulp');
const typescript = require('gulp-typescript');
const tslint = require('gulp-tslint');

gulp.task('compile-ts', function() {
  const tsConfig = {
    "version" : "1.6.2",
    "compilerOptions": {
      "target" : "es6",
      "module": "commonjs",
      "noImplicitAny": false,
      "removeComments": false,
      "preserveConstEnums": true,
      "outDir": "app",
      "sourceMap": true
    },
    "files": [
    "source/**/*.ts",
    "typings/**/*.ts"
    ]
  }
  return gulp.src([
    './source/**/*.ts',
    '!./node_modules/**',
    ])
  .pipe(tslint())
  .pipe(typescript(tsConfig.compilerOptions))
  .pipe(gulp.dest('app'));
});