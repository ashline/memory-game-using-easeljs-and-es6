// Watchify args contains necessary cache options to achieve fast incremental bundles.
// See watchify readme for details. Adding debug true for source-map generation.
watchify.args.debug = true;
// Input file.
var bundler = watchify(browserify('./src/index.js', watchify.args));

// Babel transform
bundler.transform(babelify.configure({
    sourceMapRelative: 'src'
}));

// On updates recompile
bundler.on('update', bundle);

function bundle() {

    gutil.log('Compiling JS...');

    return bundler.bundle()
        .on('error', function(err) {
            gutil.log(err.message);
            browserSync.notify("Browserify Error!");
            this.emit("end");
        })
        .pipe(exorcist('src/dist/bundle.js.map'))
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./src/dist'))
        .pipe(browserSync.stream({
            once: true
        }));
}

/**
 * Gulp task alias
 */
gulp.task('bundle', function() {
    return bundle();
});
