const gulp = require('gulp'),
    webpack = require('webpack-stream'),
    watch = require('gulp-watch'),
    path = 'app';

gulp.task('webpack', function () {
    return gulp.src(path + '/js/dev/app.jsx')
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest(path + '/js/dist'));
});

gulp.task('watch', ['webpack'], function () {
    gulp.watch([path + '/js/dev/**/*.*', 'app/css/*.css'], ['webpack']);
});

gulp.task('default', ['watch']);