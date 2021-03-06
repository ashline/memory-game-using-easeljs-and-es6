module.exports = (gulp, plugins) => {
    return function(done) {
        new plugins.karmaServer({
            configFile: __dirname + '/../karma.conf.js',
            singleRun: true
        }, done).start();
    };
}
