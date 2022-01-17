const gulp = require('gulp');
const sass = require('gulp-sass');
const gcmp = require('gulp-group-css-media-queries');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();
const del = require('del');
// sass.compiler = require('node-sass');

function clean() {
    // You can use multiple globbing patterns as you would with `gulp.src`,
    // for example if you are using del 2.0 or above, return its promise
    return del([ 'build' ]);
}


function style() {
    // 1. Where is my scss files
    return gulp.src('src/scss/**/*.scss')
    // 2. Pass through sas compiler
        .pipe(sass().on('error', sass.logError))
        .pipe(gcmp())
        .pipe(autoprefixer())
        .pipe(cleanCSS({compatibility: 'ie10'}))
    // 3. Where do I save the compiled css?
        .pipe(gulp.dest('build/css/'))
    // 4. Stream changes to browsers
        .pipe(browserSync.stream());
}
function css() {
    return gulp.src('src/css/**/*.*')
        .pipe(gulp.dest('build/css/'))
}
//css, когда будем подключать плагины то нужно чтоб css файлы копировались в build
function webfonts() {
    return gulp.src('src/webfonts/*.*')
        .pipe(gulp.dest('build/webfonts/'))
}
//копирование папки webfonts
function html() {
    return gulp.src('src/*.html')
        .pipe(gulp.dest('build/'))
}
function js() {
    return gulp.src('src/js/**/*.js')
        .pipe(gulp.dest('build/js/'))
}
function images() {
    return gulp.src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('build/img/'))
}
function watch() {
    browserSync.init({
       server: {
           baseDir: './build/'
       }
    });
    gulp.watch('./src/scss/**/*.scss', style);
    gulp.watch('./src/img/**/*.*', images);
    gulp.watch('./src/*.html', html).on('change', browserSync.reload);
    gulp.watch('./src/**/*.js', js).on('change', browserSync.reload);
}

exports.clean = clean;
exports.images = images;
exports.js = js;
exports.css = css;
exports.webfonts = webfonts;
exports.html = html;
exports.style = style;
exports.watch = watch;

let build = gulp.series(clean, gulp.parallel(html, style, css, webfonts, js, images));

/*
 * You can still use `gulp.task` to expose tasks
 */
gulp.task('build', build);

/*
 * Define default task that can be called by just running `gulp` from cli
 */
gulp.task('default', build);