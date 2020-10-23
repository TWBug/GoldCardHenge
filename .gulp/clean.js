const config = require('config')
const { src } = require('gulp')
const clean = require('gulp-clean')

const CLEAN_ALL = config.get('clean.all')
const CLEAN_SCRIPTS = config.get('clean.scripts')
const CLEAN_STYLES = config.get('clean.styles')

module.exports.clean_all = function clean_all() {
    return src(CLEAN_ALL, {
        read: false,
        allowEmpty: true,
    }).pipe(clean())
}
module.exports.clean_styles = function clean_styles() {
    return src(CLEAN_STYLES, {
        read: false,
        allowEmpty: true,
    }).pipe(clean())
}
module.exports.clean_scripts = function clean_scripts() {
    return src(CLEAN_SCRIPTS, {
        read: false,
        allowEmpty: true,
    }).pipe(clean())
}
