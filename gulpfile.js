var browserify  = require('browserify')
  , connect     = require('gulp-connect')
  , gulp        = require('gulp')
  , source      = require('vinyl-source-stream');

gulp.task('browserify', function() {
  browserify('./client/app/app.module.js')
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./client/app'));
});

gulp.task('build', ['browserify']);

gulp.task('default', ['watch','serve']);

gulp.task('serve', function() {
  connect.server({
    port: 8080,
    hostname: 'localhost',
    root: './client/app'
  });
});

gulp.task('watch', function () {
  gulp.watch('./client/app/**/**', ['browserify']);
});
