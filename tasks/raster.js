const {
    src,
    dest
} = require('gulp');
const changed = require('gulp-changed');
const imagemin = require('gulp-imagemin');
const recompress = require('imagemin-jpeg-recompress');
const pngquant = require('imagemin-pngquant');
const bs = require('browser-sync');

const paths = {
    src: [
        './src/img/**/*.+(png|jpg|jpeg|gif|svg|ico)',
        '!./src/img/icons/*.svg'
    ],
    dest: './dist/img'
}

const imagePlugins = {
    interlaced: true,
    progressive: true,
    optimizationLevel: 5,
};

const imageOptions = [
    recompress({
        loops: 6,
        min: 50,
        max: 90,
        quality: 'high',
        use: [pngquant({
            quality: [0.8, 1],
            strip: true,
            speed: 1
        })],
    }),
    imagemin.gifsicle(),
    imagemin.optipng(),
    imagemin.svgo()
]



module.exports = function raster() {
    return src(paths.src)
        .pipe(changed(paths.dest))
        .pipe(imagemin(imagePlugins, imageOptions))
        .pipe(dest(paths.dest))
        .pipe(bs.stream());
}