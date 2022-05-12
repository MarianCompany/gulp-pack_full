const {
    watch,
    parallel,
    series
} = require('gulp');

module.exports = function watching() {
    watch('src/**/*.html', parallel('html'));
    watch('src/**/*.scss', parallel('css'));
    watch('src/**/*.js', parallel('scripts'));
    watch('src/**/*.json', parallel('html'));
    watch('src/img/**/*.+(png|jpg|jpeg|gif|svg|ico)', parallel('raster'));
    watch('build/img/**/*.+(png|jpg|jpeg)', parallel('to_webp'));
    watch('src/img/icons/**/*.svg', series('svg_sprite', 'raster'));
    watch('src/fonts/**/*.ttf', parallel('ttf'));
    watch(['dist/fonts/**/*.woff', 'dist/fonts/**/*.woff2'], parallel('fonts'))
}