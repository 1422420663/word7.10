var gulp=require('gulp');
var cssmin=require('gulp-minify-css');
var concat = require('gulp-concat');

gulp.task('minifycss', function () {
    return gulp.src(['www/css/reset.css','www/css/common.css','www/css/style.css'])
        .pipe(concat('main.css'))
        .pipe(cssmin())
        .pipe(gulp.dest('min/css'));
});