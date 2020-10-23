process.env.NODE_CONFIG_DIR = './.config'

const config = require('config')
const { series, parallel, watch } = require('gulp')
const { clean_all, clean_styles, clean_scripts } = require('./.gulp/clean')
const { scripts } = require('./.gulp/scripts')
const { styles } = require('./.gulp/styles')

const SOURCE_STYLES = config.get('source.styles')
const SOURCE_SCRIPTS = config.get('source.scripts')

exports.build = series(clean_all, parallel(styles, scripts))
exports.watch = function () {
    console.info('watching: ' + SOURCE_STYLES)
    watch(SOURCE_STYLES, series(clean_styles, styles))
    console.info('watching: ' + SOURCE_SCRIPTS)
    watch(SOURCE_SCRIPTS, series(clean_scripts, scripts))
}
