var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');

function styles(cb) {
   gulp.src('./scss/**/*.scss')
       .pipe(sass({
          outputStyle: 'compressed'
       }))
       .pipe(autoprefixer({
            cascade: false
        }))
       .pipe(rename({
          suffix: '.min'
       }))
       .pipe(gulp.dest('css/'))
   cb();
}

gulp.task('default', styles);