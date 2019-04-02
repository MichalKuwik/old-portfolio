const gulp = require('gulp');
const autopreFixer = require('gulp-autoprefixer');

gulp.task('a', async function(){
    return gulp.src('dist/css/style.css')
    .pipe(autopreFixer({
        browsers: ['last 2 versions']
    }))
    .pipe(gulp.dest('dist/css'));
});