var gulp = require('gulp');
var concat = require('gulp-concat');
var include = require('gulp-include');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");
var browserSync = require('browser-sync').create();


// Compile SCSS
gulp.task('css:compile', function() {
    return gulp.src('./src/css/main.scss')
        .pipe(sass.sync({
            outputStyle: 'expanded'
        }).on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'))
});

// Minify CSS
gulp.task('css:minify', ['css:compile'], function() {
    return gulp.src([
        './dist/css/*.css',
        '!./dist/css/*.min.css'
    ])
        .pipe(cleanCSS())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./dist/css'))
        .pipe(browserSync.stream());
});

// CSS
gulp.task('css', ['css:compile', 'css:minify']);

// Concat JavaScript
gulp.task('js:concat', function () {
    return gulp.src('./src/js/**/*.js')
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('./dist/js'));
});

// Minify JavaScript
gulp.task('js:minify', function() {
    return gulp.src([
        './dist/js/*.js',
        '!./dist/js/*.min.js'
    ])
        .pipe(include())
        // .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./dist/js'))
        .pipe(browserSync.stream());
});

// JS
gulp.task('js', ['js:concat','js:minify']);

// Default task
gulp.task('default', ['css', 'js']);

// Configure the browserSync task
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

// Dev task
gulp.task('dev', ['css', 'js', 'browserSync'], function() {
    gulp.watch('./src/css/*.scss', ['css']);
    gulp.watch('./src/js/*.js', ['js']);
    gulp.watch('./*.html', browserSync.reload);
});