const gulp = require('gulp');
const rename = require('gulp-rename');
const cleanCss = require('gulp-clean-css');
const gulpMinify = require('gulp-minify');

const paths = {
  css: {
    src: './src/flash-message.css',
    dest: './public/assets/css/',
  },
  js: {
    src: './src/flash-message.js',
    dest: './public/assets/js/',
  },
};

const minifyCss = () => gulp.src(paths.css.src)
  .pipe(cleanCss())
  .pipe(rename('flash-message-min.css'))
  .pipe(gulp.dest(paths.css.dest));

const MinifyJs = () => gulp.src(paths.js.src)
  .pipe(gulpMinify())
  .pipe(gulp.dest(paths.js.dest));

const defaultTask = () => {
  gulp.watch('./src/*.css', minifyCss);
  gulp.watch('./src/*.js', MinifyJs);
};

exports.defaultTask = defaultTask;
