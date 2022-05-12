const {
    src,
    dest
} = require('gulp');
const svgmin = require('gulp-svgmin');
const sprite = require('gulp-svg-sprite');

const plugins = {
    plugins: [
        {
            name:'preset-default'
        },
        'removeComments',
        {
            name:'preset-default'
        },
        'removeEmptyContainers'
    ]
};

const config = {
    mode: {
        stack: {
            sprite: '../sprite.svg'
        }
    }
};

module.exports = function svg_sprite() {
    return src('./src/img/icons/*.svg')
        .pipe(svgmin(plugins))
        .pipe(sprite(config))
        .pipe(dest('./src/img'))
}