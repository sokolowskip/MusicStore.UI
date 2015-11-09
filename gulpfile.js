var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require("gulp-concat"),
    gutil = require("gulp-util"),
    babel = require('gulp-babel'),
    watch = require("gulp-watch");

var appSource = 
    ['app/**/*.js', 
    '!app/bower_components/**', 
    '!app/**/*_test.js'];

gulp.task('transpile', function(){
    return gulp
        .src(appSource)
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('build'));
});
 
gulp.task('concat', function(){
    return gulp
        .src(['build/**/*-module.js',
            'build/**/*.js'])
            .pipe(sourcemaps.init())
        .pipe(concat('app.js'))
        .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop()) 
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist'));        
})
 
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
   gulp.watch(appSource, ['transpile', 'concat']); 
});

gulp.task('default', function() {  
    gulp.watch(appSource, ['transpile']);
    gulp.watch('build/**/*.js', ['concat']);     
});