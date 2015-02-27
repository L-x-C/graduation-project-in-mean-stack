var gulp = require('gulp');

// 引入组件
var less = require('gulp-less'), // less
	minifycss = require('gulp-minify-css'), // CSS压缩
	uglify = require('gulp-uglify'), // js压缩
	concat = require('gulp-concat'), // 合并文件
	rename = require('gulp-rename'), // 重命名
	clean = require('gulp-clean'); //清空文件夹
jshint = require('gulp-jshint');
// less解析
gulp.task('build-less', function() {
	gulp.src('public/less/*.less')
		.pipe(less())
		.pipe(gulp.dest('public/build/css'))
});
//jshint
gulp.task('lint', function() {
	gulp.src('public/javascripts/*/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});
// 合并、压缩、重命名css
gulp.task('stylesheets', ['build-less'], function() {
	gulp.src(['public/build/css/*.css'])
		.pipe(concat('all.css'))
		.pipe(gulp.dest('public/build/compressCss/'))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(minifycss())
		.pipe(gulp.dest('public/build/compressCss'));
});

// 合并，压缩js文件
gulp.task('javascripts', function() {
	gulp.src('public/javascripts/*/*.js')
		.pipe(concat('all.js'))
		.pipe(gulp.dest('public/build/js'))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(uglify())
		.pipe(gulp.dest('public/build/js'));
});

// 清空图片、样式、js
gulp.task('clean', function() {
	return gulp.src(['public/build/css/all.css', 'public/build/css/all.min.css'], {
			read: false
		})
		.pipe(clean({
			force: true
		}));
});

// 定义develop任务在日常开发中使用
gulp.task('develop', function() {
	gulp.run('build-less', 'lint', 'javascripts', 'stylesheets');

	gulp.watch('public/less/*.less', ['build-less']);
});

// 定义一个prod任务作为发布或者运行时使用
gulp.task('prod', function() {
	gulp.run('build-less', 'lint', 'stylesheets', 'javascripts');

	// 监听.less文件,一旦有变化,立刻调用build-less任务执行
	gulp.watch('public/less/*.less', ['build-less']);
});

// gulp命令默认启动的就是default认为,这里将clean任务作为依赖,也就是先执行一次clean任务,流程再继续.
gulp.task('default', ['clean'], function() {
	gulp.run('develop');
});
