const gulp = require("gulp");
const uglify = require("gulp-uglify");
const rename = require('gulp-rename');

gulp.task('minify', function () {
    return gulp.src('./jstars.js')
        .pipe(uglify({
            output: {comments: "all"}
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('.'));
});