module.exports = (gulp, plugins) => {
    gulp.task('tdd', function (done) {
        new plugins.karma.Server({
            configFile: __dirname + '/karma.conf.js'
        }, done).start();
    });
}
