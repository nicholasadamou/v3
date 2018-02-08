'use-strict';

var gulp = require('gulp'),
    $ = require('gulp-load-plugins')({ lazy: true });

var path = require('../../paths.js');

gulp.task('json', function() {
	console.log('-> Updating json');

	return gulp.src(path.to.json.in)
    	.pipe($.newer(path.to.json.out))
    	.pipe(gulp.dest(path.to.json.out));
});