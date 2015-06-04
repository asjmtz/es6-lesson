var gulp = require("gulp");
var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");
var concat = require("gulp-concat");

// bro
var browserSync = require('browser-sync').create();

// task sequence
var runSequence = require('run-sequence');

// del
var del = require('del');
var vinylPaths = require('vinyl-paths');

// for babel
var compilerOptions = {
	modules: 'system',
	moduleIds: false,
	comments: false,
	compact: false,
	stage:2,
	optional: [
		"es7.decorators",
		"es7.classProperties"
	]
}; 


var paths = {
	js: 'src/**/*.js',
	html: 'src/**/*.html',
	dist: 'dist',
	output: 'dist/'
}

// html
gulp.task("html", function(){
	return gulp.src( paths.html )
		.pipe(gulp.dest( paths.dist ));
});

// js build source ma[]
gulp.task("js", function () {
	return gulp.src( paths.js )
		.pipe(sourcemaps.init())
		// .pipe(concat("all.js"))
		.pipe(babel( compilerOptions ))
		.pipe(sourcemaps.write("."))
		.pipe(gulp.dest( paths.dist ));
});

// serve
gulp.task("serve", function(){
	browserSync.init({
		server: '.'
	});
});

// watch
gulp.task("watch", ['serve'],function () {
	gulp.watch( paths.js, ['js'] ).on('change', reportChange);
	gulp.watch( paths.html, ['html'] ).on('change', reportChange);
	// gulp.watch( 'src/**/*.css', ['css'] ).on('change', reportChange);
}); 

// clean
gulp.task("clean", function () {
      return gulp.src([paths.output])
    .pipe(vinylPaths(del));
});

// outputs changes to files to the console
function reportChange(event){
	browserSync.reload();
	console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
}

gulp.task("build",  function (callback) {
	return runSequence(
		'clean',
		['js', 'html'],
		callback
	);
});

gulp.task("default",['build', 'watch']);