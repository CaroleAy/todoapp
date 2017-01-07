'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function () {
  return gulp.src('css/styles.scss')
  	.pipe(sourcemaps.init())
    .pipe(
    	sass( {
    			//outputStyle: 'compressed'
    	}
    ).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('css'))
});

gulp.task('sass:watch', function () {

  // bad
  // gulp.watch('css/styles.scss', ['sass']);
  // gulp.watch('css/partials/*.scss', ['sass']);

  // better
  gulp.watch(['css/styles.scss', 'css/partials/*.scss'], ['sass']);

});

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: './'
    });

    gulp.watch(['css/styles.scss', 'css/partials/*.scss'], ['sass']);
    gulp.watch(['*.html', 'css/styles.scss', 'css/partials/*.scss']).on('change', browserSync.reload);

});
