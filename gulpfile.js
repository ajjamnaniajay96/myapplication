const gulp = require('gulp');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create(); //web-server to use
const scripts = require('./scripts');
const styles = require('./styles');
//dev mode on/off
var devMode = false;
//Tasks
// function for processing all css files , concatenates the contents into main.css and puts in destination
gulp.task('css', function () {
    gulp.src(styles).pipe(concat('main.css')).pipe(gulp.dest('./dist/css')).pipe(browserSync.reload({
        stream: true
    }));
});
gulp.task('js', function () {
    gulp.src(scripts).pipe(concat('scripts.js')).pipe(gulp.dest('./dist/js')).pipe(browserSync.reload({
        stream: true
    }));
});
gulp.task('json', function () {
    gulp.src('./src/json/**/*.json').pipe(gulp.dest('./dist/json')).pipe(browserSync.reload({
        stream: true
    }));
});
gulp.task('html', function () {
    gulp.src('./src/template/**/*.html').pipe(gulp.dest('./dist/')).pipe(browserSync.reload({
        stream: true
    }));
});
//build task
gulp.task('build', function () {
    gulp.start(['css', 'js', 'html','json']);
});
gulp.task('browser-sync', function () {
    browserSync.init(null, {
        open: true,
        server: {
            baseDir: "dist",
            routes: {
                "/bower_components": "bower_components",
                "/node_modules": "node_modules"
            }
        }
    });
});
gulp.task('start', function () {
    devMode = true;
    gulp.start(['build', 'browser-sync']);
    gulp.watch("./src/css/**/*.css", ["css"]);
    gulp.watch("./src/js/**/*.js", ["js"]);
    gulp.watch("./src/template/**/*.html", ["html"]);
});