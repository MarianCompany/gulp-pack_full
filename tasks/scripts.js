const { src, dest } = require('gulp');
const map = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const bs = require('browser-sync');

const paths = {
    src: [
      './src/js/*.js'
    ],
    dest: './dist/js'
}

module.exports = function scripts(){
    return src(paths.src)
        .pipe(map.init())
        .pipe(uglify())
        .pipe(concat('script.min.js'))
        .pipe(map.write())
        .pipe(dest(paths.dest))
        .pipe(bs.stream())
}