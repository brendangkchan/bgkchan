const gulp = require('gulp');
const typings = require('gulp-typings');

gulp.task('typings', function() {
	return gulp.src("./typings.json")
		.pipe(typings()); 
});
