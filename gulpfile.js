const { series, parallel } = require('gulp');
const requireDir = require('require-dir');
const tasks = requireDir('./tasks');

exports.clean = tasks.clean;
exports.html = tasks.html;
exports.css = tasks.css;
exports.libs_css = tasks.libs_css;
exports.scripts = tasks.scripts;
exports.libs_scripts = tasks.libs_scripts;
exports.build_scripts = tasks.build_scripts;
exports.raster = tasks.raster;
exports.to_webp = tasks.to_webp;
exports.svg_sprite = tasks.svg_sprite;
exports.ttf = tasks.ttf;
exports.fonts = tasks.fonts;
exports.browser_sync = tasks.browser_sync;
exports.watch_changes = tasks.watch_changes;

exports.dev = series(
    exports.libs_css,
    exports.css,
    exports.libs_scripts,
    exports.scripts,
    exports.svg_sprite,
    exports.raster,
    exports.to_webp,
    exports.ttf,
    exports.html,
    exports.fonts,
    parallel(
        exports.browser_sync,
        exports.watch_changes
    )
)

exports.build = series(
    exports.libs_css,
    exports.css,
    exports.libs_scripts,
    exports.build_scripts,
    exports.svg_sprite,
    exports.raster,
    exports.to_webp,
    exports.ttf,
    exports.html,
    exports.fonts
)
