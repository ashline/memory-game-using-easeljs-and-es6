module.exports = (gulp, plugins) => {
    return function() {
        // Watchify args contains necessary cache options to achieve fast incremental bundles.
        // See watchify readme for details. Adding debug true for source-map generation.
        plugins.watchify.args.debug = true;
        // Input file.
        var bundler = plugins.watchify(plugins.browserify('./src/index.js', plugins.watchify.args));

        // Babel transform
        bundler.transform(plugins.babelify.configure({
            sourceMapRelative: 'src'
        }));

        // On updates recompile
        bundler.on('update', bundle);

        function bundle() {

            plugins.gutil.log('Compiling JS...');

            return bundler.bundle()
                .on('error', function(err) {
                    plugins.gutil.log(err.message);
                    plugins.browserSync.notify("Browserify Error!");
                    this.emit("end");
                })
                .pipe(plugins.exorcist('./src/dist/bundle.js.map'))
                .pipe(plugins.source('bundle.js'))
                .pipe(gulp.dest('./src/dist'))
                .pipe(plugins.browserSync.stream({
                    once: true
                }));
        }

        return bundle();
    }
}
