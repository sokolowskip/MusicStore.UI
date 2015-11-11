/*global __dirname */
var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require("gulp-concat"),
    gutil = require("gulp-util"),
    babel = require('gulp-babel'),
    watch = require("gulp-watch"),
    KarmaServer = require('karma').Server;
    
gulp.task('transpile', function(){
    return gulp
        .src(['app/**/*.js', '!app/bower_components/**'])
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('transpiled'));
});
 
gulp.task('concat', ['transpile'], function(){
    return gulp
        .src(['!trasnpiled/**/*_test.js',
              'transpiled/**/*-module.js',
              'transpiled/**/*.js'])
        .pipe(sourcemaps.init())
        .pipe(concat('app.js'))
        .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop()) 
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist'));        
})
 
gulp.task('test', function (done) {
  new KarmaServer({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});

gulp.task('tdd', function (done) {
  new KarmaServer({
    configFile: __dirname + '/karma.conf.js'
  }, done).start();
});

gulp.task('c-build', ['concat','transpile'], function(){
    gulp.watch(['app/**/*.js', '!app/bower_components/**'], ['concat','transpile']);
});

gulp.task('default', function() {});