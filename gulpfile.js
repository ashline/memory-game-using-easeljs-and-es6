var gulp = require('gulp');
var plugins = require('./gulp-tasks/plugins')();

function getTask(task) {
    return require(`./gulp-tasks/${task}`)(gulp, plugins);
}
/**
 * Gulp task alias
 */
gulp.task('bundle', getTask('bundle'));
/**
 * Run test once and exit
 */
gulp.task('test', getTask('test'));
/**
 * Watch for file changes and re-run tests on each change
 */
gulp.task('tdd', getTask('tdd'));
/**
* First bundle, then serve from the ./app directory
*/
gulp.task('default', ['bundle'], function () {
    plugins.browserSync.init({
        server: "./src"
    });
});
