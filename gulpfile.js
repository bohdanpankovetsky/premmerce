var gulp = require('gulp'),
	minCSS = require('gulp-clean-css'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync').create();
gulp.task('serve', ['sass'], function () {
	browserSync.init({
		server: "premmerce/"
	});
	gulp.watch("premmerce/css/*.scss", ["sass"]);
	gulp.watch("premmerce/*.html").on("change", browserSync.reload);
});
gulp.task("sass", function() {
	return gulp.src("premmerce/css/*.scss")
			.pipe(sass())
			.pipe(minCSS())
			.pipe(gulp.dest("premmerce/css"))
			.pipe(browserSync.stream());
});
gulp.task("default", ["serve"]);