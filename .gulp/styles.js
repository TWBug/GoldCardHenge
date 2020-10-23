const config = require('config')
const { src, dest } = require('gulp')
const postcss = require('gulp-postcss')

const SOURCE_STYLES = config.get('source.styles')
const DESTINATION_STYLES = config.get('destination.styles')

module.exports.styles = function styles() {
    const postcssOptions = [require('tailwindcss'), require('autoprefixer')]
    if (process.env.NODE_ENV === 'production') {
        postcssOptions.push(
            require('cssnano')({
                preset: 'default',
            })
        )
    }
    return src(SOURCE_STYLES).pipe(postcss(postcssOptions)).pipe(dest(DESTINATION_STYLES))
}
