const config = require('config')
const { src, dest } = require('gulp')
const concat = require('gulp-concat')
const babel = require('gulp-babel')
const minify = require('gulp-minify')

const SOURCE_SCRIPTS = config.get('source.scripts')
const NAME_SCRIPTS = config.get('name.scripts')
const DESTINATION_SCRIPTS = config.get('destination.scripts')

module.exports.scripts = function scripts() {
    return src(SOURCE_SCRIPTS)
        .pipe(
            babel({
                presets: ['@babel/env'],
            })
        )
        .pipe(concat(NAME_SCRIPTS))
        .pipe(
            minify({
                ext: {
                    min: '.min.js',
                },
                ignoreFiles: ['.min.js'],
            })
        )
        .pipe(dest(DESTINATION_SCRIPTS))
}
