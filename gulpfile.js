'use strict'
var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var rjs = require('gulp-rjs');

var paths = {
    scss: ['app/scripts/vendor/foundation/scss/*.scss']
}

gulp.task('scripts', function(){
    gulp.src('app/scripts/**/*.js')
        //.pipe(gulp.dest('./dist/scripts'))
        .pipe(rjs({
            appDir: "./app/",
            baseUrl: "app/scripts",
            dir: "dist",
            name: 'main'
            //optimizeCss: 'standard'
        }));
    /*
     {
     appDir: "../",
     baseUrl: "scripts",
     dir: "../../dist",
     name: 'main',
     mainConfigFile: '../scripts/main.js'
     //optimizeCss: 'standard'
     }*/
});

gulp.task('sass', function() {
    return sass(paths.scss)
        .on('error', sass.logError)
        .pipe(gulp.dest('app/scripts/vendor/foundation/css'))
});

gulp.task('sass:watch', function () {
        gulp.watch(paths.scss, ['sass']);
});
