const gulp = require('gulp');
const jshint = require('gulp-jshint');
const runSequence = require('run-sequence');



gulp.task('processHTML', () => {
  gulp.src('*.html')
    .pipe(gulp.dest('dist'));
});


gulp.task('processJS', () => {
  gulp.src('*.js')
    .pipe(jshint({
        esversion: 8
    }))
    .pipe(jshint.reporter('default'))
    .pipe(gulp.dest('dist'));
});


gulp.task('babelPolyfill', () => {
  gulp.src('node_modules/babel-polyfill/browser.js')
    .pipe(gulp.dest('dist/node_modules/babel-polyfill'));
});

gulp.task('default', (callback) => {
  runSequence(['processHTML', 'processJS', 'babelPolyfill'],'watch', callback);
});


gulp.task('watch', () => {
  gulp.watch('*.js', ['processJS']);
  gulp.watch('*.html', ['processHTML']);
});

//i change to the current version of guld 'npm install --save-dev gulp@3.9.1'
//first, i removed babel code and uglify due to eeror, this helped me to find a solution
