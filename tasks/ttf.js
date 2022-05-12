const {
    src,
    dest
} = require('gulp');
const changed = require('gulp-changed');
const ttf2woff2 = require('gulp-ttftowoff2');
const ttf2woff = require('gulp-ttf2woff');

const changedOptions =  {
    extension: '.woff2',
    hasChanged: changed.compareLastModifiedTime
};

const changedOptions_woff =  {
    extension: '.woff',
    hasChanged: changed.compareLastModifiedTime
};



module.exports = function ttf(done) {
    src('./src/fonts/**/*.ttf')
        .pipe(changed('./dist/fonts', changedOptions))
        .pipe(ttf2woff2())
        .pipe(dest('./dist/fonts'))

    src('./src/fonts/**/*.ttf')
        .pipe(changed('./dist/fonts', changedOptions_woff))
        .pipe(ttf2woff())
        .pipe(dest('./dist/fonts'))

    done();
}