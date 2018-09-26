var gulp = require('gulp');
var csso = require('gulp-csso');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var strip  = require('gulp-strip-css-comments');
var clean = require('gulp-clean');
var runSequence = require('run-sequence');
var htmlmin = require('gulp-htmlmin');
var imagemin = require('gulp-imagemin');

gulp.task('clean', function () {
  return gulp.src('./dist/*').pipe(clean());
});

gulp.task('html', () => {
  return gulp.src('assets/html/home.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(concat('index.html'))
    .pipe(gulp.dest('./'));
});

gulp.task('styles', function(){
  return gulp.src(
    [
      'assets/css/*.css', 
      'node_modules/@fortawesome/fontawesome-free/css/all.css'
    ])
    .pipe(csso())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(concat('all.css'))
    .pipe(strip({preserve: false}))
    .pipe(gulp.dest('gulp/css'))
});

gulp.task('fonts', function() {
  return gulp.src('node_modules/@fortawesome/fontawesome-free/webfonts/*.*')
    .pipe(gulp.dest('gulp/webfonts/'));
})

gulp.task('scripts', function() {
  return gulp.src([
      'assets/js/plugins.js',
      'assets/js/modernizr-2.6.2.min.js',
      'assets/js/custom.js'
    ])
    .pipe(uglify())
    .pipe(concat('all.js'))
    .pipe(gulp.dest('gulp/js'))
});

gulp.task('images', function() {
  return gulp.src('assets/img/*.png')
    .pipe(imagemin([
        imagemin.optipng({optimizationLevel: 5})
    ]))
    .pipe(gulp.dest('gulp/images'))
});

gulp.task('default', function (cb) {
  return runSequence('clean', [ 'styles', 'scripts', 'fonts', 'html', 'images' ], cb);
});
