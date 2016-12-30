const gulp = require('gulp');
const changed = require('gulp-changed');
const plumber = require('gulp-plumber');

const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemap = require('gulp-sourcemaps');

const SCSS_SRC_FOLDER = './source/public/scss';
const SCSS_SRC_FILES = `${SCSS_SRC_FOLDER}/**/*.scss`;
const SCSS_SRC_FILE = `${SCSS_SRC_FOLDER}/base.scss`;
const SCSS_BUILD_FOLDER = './app/public/css/';

gulp.task('styles', function () {
    return gulp.src(SCSS_SRC_FILE)
        .pipe(changed(SCSS_BUILD_FOLDER, {extension: '.scss'}))
        .pipe(plumber())
        .pipe(sourcemap.init())
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(autoprefixer())        
        .pipe(sourcemap.write())
        .pipe(gulp.dest(SCSS_BUILD_FOLDER));
});

gulp.task('watch-styles', ['styles'], function() {
    gulp.watch(SCSS_SRC_FILES, ['styles']);
});
