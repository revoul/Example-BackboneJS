var gulp = require('gulp'),
    connect = require('gulp-connect');

gulp.task('connect', function() {
    connect.server({
        root: 'public',
        livereload: true
    });
});

gulp.task('html', function() {
    gulp.src('public/*.html')
        .pipe(connect.reload());
});

gulp.task('watch', function() {
    gulp.watch(['public/*.html', 'public/scripts/*.js', 'public/scripts/*/*.js'], ['html']);
});

gulp.task('default', ['connect', 'watch']);
