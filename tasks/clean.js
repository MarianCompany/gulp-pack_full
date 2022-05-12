const del = require('del');

module.exports = function clean(cb){
    del(['./dist']);
    cb();
}