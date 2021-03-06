const gulp = require('gulp');

// Minify CSS
const cleanCSS = require('gulp-clean-css');
gulp.task('minify-css', () => {
    return gulp.src('src/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/css'));
});

// Minify JS
const minify = require('gulp-minify');
gulp.task('minify-js', () => {
    return gulp.src(['src/scripts/*.js'])
    .pipe(minify())
    .pipe(gulp.dest('dist/scripts'));
});

// Minify SVG
const svgmin = require('gulp-svgmin');
gulp.task('minify-svg', () => {
    return gulp.src('src/graphics/*.svg')
    .pipe(svgmin())
    .pipe(gulp.dest('dist/graphics'));
});

// Watch Tasks
gulp.watch('src/css/*.css', gulp.series(['minify-css']));
gulp.watch('src/scripts/*.js', gulp.series(['minify-js']));
gulp.watch('src/graphics/*.svg', gulp.series(['minify-svg']));

// Default Task
gulp.task('default', gulp.parallel('minify-css', 'minify-js', 'minify-svg'));