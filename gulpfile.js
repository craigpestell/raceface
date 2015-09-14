'use strict'
var gulp = require('gulp');
var sass = require('gulp-sass');
var rjs = require('gulp-rjs');

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
        gulp.src('app/scripts/vendor/**/*.scss')
                .pipe(sass({
                        //includePaths: ['app/scripts/vendor/foundation/scss/']
                }))
                .pipe(gulp.dest('app/scripts/vendor'));
        gulp.src('app/css/*.scss')
            .pipe(sass())
            .pipe(gulp.dest('./dist/css'));
});

gulp.task('sass:watch', function () {
        gulp.watch('./app/**/*.scss', ['sass']);
});
