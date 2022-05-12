const { src,dest } = require('gulp');
const include = require('gulp-file-include');
const bs = require('browser-sync');

const paths = {
    src : [
        './src/**/*.html',
        '!./src/components/**/*.html'
    ],
    dest:'./dist'
}

module.exports = function html() {
    return src(paths.src)
        .pipe(include())
        .pipe(dest(paths.dest))
        .pipe(bs.stream())
}