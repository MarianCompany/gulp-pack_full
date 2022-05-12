const { src, dest } = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const babel = require('gulp-babel');

const paths = {
    src: [
        './src/js/*.js'
    ],
    dest: './dist/js'
}

module.exports = function build_scripts(){
    return src(paths.src)
        .pipe(babel())
        .pipe(uglify())
        .pipe(concat('script.min.js'))
        .pipe(dest(paths.dest))
}