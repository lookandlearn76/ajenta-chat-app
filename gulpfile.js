var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function(){
  return gulp.src('app/assets/sass/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('app/temp/styles'))
});

//watch task
gulp.task('default', function(){
  gulp.watch('app/assets/sass/**/*.scss',['styles']);
});
