const { src, dest } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const map = require('gulp-sourcemaps');
const clean = require('gulp-clean-css');
const concat = require('gulp-concat');

const paths = {
    src: [
        './node_modules/bootstrap/dist/css/bootstrap.css'
    ],
    dest: './dist/css'
}

module.exports = function libs_css(done){
    if(paths.src.length > 0){
        return src(paths.src)
            .pipe(map.init())
            .pipe(sass().on('error', sass.logError))
            .pipe(clean({ level: 2 }))
            .pipe(concat('libs.min.css'))
            .pipe(map.write())
            .pipe(dest(paths.dest));
    } else {
        console.log("No css plugins found");
        done();
    }
}