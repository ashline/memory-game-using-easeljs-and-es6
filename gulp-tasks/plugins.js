module.exports = () => {
    return {
        karmaServer: require('karma').Server,
        gutil: require('gulp-util'),
        source: require('vinyl-source-stream'),
        babelify: require('babelify'),
        watchify: require('watchify'),
        exorcist: require('exorcist'),
        browserify: require('browserify'),
        browserSync: require('browser-sync').create()
    };
};
