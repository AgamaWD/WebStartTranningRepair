var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');
var tinypng = require('gulp-tinypng-compress')

gulp.task('minify-css', function(done) {
  gulp.src('./src/css/*.css')
  .pipe(cleanCSS({compatibility: 'ie8'}))
  .pipe(gulp.dest('dist/css/'))
  done();
});

gulp.task('move-js', function(done) {
  return gulp.src('./src/js/*.js')
  .pipe(gulp.dest('dist/js/'))
  done();
});

gulp.task('move-php', function(done) {
  return gulp.src('./src/php/*.php')
  .pipe(gulp.dest('dist/php/'))
  done();
});

gulp.task('minify-html', function(done) {
  gulp.src('./src/*.html')
  .pipe(htmlmin({ collapseWhitespace: true }))
  .pipe(gulp.dest('dist/'))
  done();
});

gulp.task('fonts', function(done) {
  return gulp.src('./src/fonts/**/*')
  .pipe(gulp.dest('dist/fonts'))
  done();
});

gulp.task('tinypng', function(done) {
  gulp.src('./src/img/**/*.{png,jpg,jpeg}')
      .pipe(tinypng({
          key: 'rSl6HDrb1z5nVGbWH1QZK99mJT3S2xDF',
      }))
      .pipe(gulp.dest('dist/img/'));
  done();
});
gulp.task('move-code', gulp.parallel('minify-css', 'move-js', 'move-php', 'minify-html'), function(done) {
  done();
});

gulp.task('default', gulp.parallel('minify-css', 'move-js', 'move-php', 'minify-html', 'fonts', 'tinypng'), function(done) {
  done();
});
