var gulp = require("gulp");
var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");
var concat = require("gulp-concat");
var browserSync = require('browser-sync').create();

// var watch = 


// html
gulp.task("html", function(){
	return gulp.src("src/*.html")
    .pipe(gulp.dest("dist"));
});

// js build source ma[]
gulp.task("js", function () {
  return gulp.src("src/**/*.js")
    .pipe(sourcemaps.init())
    .pipe(concat("all.js"))
    .pipe(babel())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist"));
});

// serve
gulp.task("serve", function(){
	browserSync.init({
		server: './dist'
	});
});

// watch
gulp.task("watch", ['serve'],function () {
	gulp.watch( 'src/**/*.js', ['js' , browserSync.reload] ).on('change', reportChange);
	gulp.watch( 'src/**/*.html', ['html', browserSync.reload] );
}); 


// outputs changes to files to the console
function reportChange(event){
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
}

gulp.task("default",['html', 'js', 'watch']);