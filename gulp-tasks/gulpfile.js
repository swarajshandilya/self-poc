// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var less = require('gulp-less');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

// Compile Our Sass
gulp.task('less', function() {
    return gulp.src('less-precompiled/*.less')
        .pipe(less())
        .pipe(concat('master.css'))
        .pipe(gulp.dest('less-compiled'));
});

//minify and concate our js
gulp.task('scripts', function() {  
    return gulp.src('scripts-dev/*.js')
        .pipe(concat('scripts.js'))
        .pipe(rename('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('scripts-prod'));
});


// Default Task
gulp.task('default', ['less','scripts']);