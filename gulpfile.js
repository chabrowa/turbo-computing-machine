var gulp = require("gulp");
var babel = require("gulp-babel");
var concat = require("gulp-concat");

gulp.task("default", function () {
  return gulp.src("components/*.js")
    .pipe(concat('all.js'))
    .pipe(babel())
    .pipe(gulp.dest("dist"));
});

gulp.task("styles", function() {
  return gulp.src("styles/*.less)

});
