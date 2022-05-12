const { src, dest } = require('gulp');
const map = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;

const paths = {
    src: [
        './node_modules/bootstrap/dist/js/bootstrap.js'
    ],
    dest: './dist/js'
}

module.exports = function libs_scripts(done){
    if(paths.src.length > 0){
        return src(paths.src)
            .pipe(map.init())
            .pipe(uglify())
            .pipe(concat('script.min.js'))
            .pipe(map.write())
            .pipe(dest(paths.dest))
    } else {
        console.log('No plugins were found');
        done();
    }
}