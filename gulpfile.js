var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require("gulp-concat"),
    gutil = require("gulp-util");

gulp.task('default', function() {
});
 
gulp.task('build-js', function() {
  return gulp
    .src(['app/**/*.js', '!app/bower_components/**', '!app/**/*_test.js'])
    .pipe(sourcemaps.init())
    .pipe(concat('app.js'))
      //only uglify if gulp is ran with '--type production'
    .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop()) 
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'));
});
