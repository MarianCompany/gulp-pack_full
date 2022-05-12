const { src, dest } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const map = require('gulp-sourcemaps');
const clean = require('gulp-clean-css');
const prefix = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const bs = require('browser-sync');


const paths = {
    src: [
        './src/css/**/*.css',
        './src/scss/**/*.scss'
    ],
    dest: './dist/css'
}

module.exports = function css(done){
    src(paths.src)
        .pipe(map.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(prefix())
        .pipe(clean({ level: 2 }))
        .pipe(concat('style.min.css'))
        .pipe(map.write())
        .pipe(dest(paths.dest))
        .pipe(bs.stream());
    done();
}