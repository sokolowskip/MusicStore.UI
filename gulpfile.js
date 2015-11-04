var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require("gulp-concat"),
    gutil = require("gulp-util"),
    watch = require("gulp-watch");

gulp.task('default', function() {
});
 
gulp.task('build-js', function() {
  return gulp
    .src([
        'app/**/*-module.js',
        'app/**/*.js', 
        '!app/bower_components/**', 
        '!app/**/*_test.js'])
    .pipe(sourcemaps.init())
    .pipe(concat('app.js'))
    .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop()) 
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'));
});

gulp.task('cbuild', function(){
   gulp.watch(['app/**/*.js', '!app/bower_components/**', '!app/**/*_test.js'], ['build-js']); 
});
