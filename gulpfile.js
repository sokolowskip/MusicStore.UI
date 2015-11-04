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
        'app/app.js',
        'app/view1/zview1-module.js',
        'app/view2/view2-module.js',
        'app/**/*.js', 
        '!app/bower_components/**', 
        '!app/**/*_test.js'])
    .pipe(sourcemaps.init())
    .pipe(concat('app.js'))
      //only uglify if gulp is ran with '--type production'
    .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop()) 
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'));
});

gulp.task('cbuild', function(){
   gulp.watch(['app/**/*.js', '!app/bower_components/**', '!app/**/*_test.js'], ['build-js']); 
});
