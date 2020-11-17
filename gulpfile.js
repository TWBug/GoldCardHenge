const { parallel, series, watch, src, dest } = require('gulp');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const minify = require('gulp-minify');
const clean = require('gulp-clean');

const SRC_STYLES = './src/styles/*.css';
const SRC_SCRIPTS = './src/scripts/*.js';
const DST_STYLES = './assets/css/';
const DST_SCRIPTS = './assets/js/';

const TAILWIND_CONFIG = require('./tailwind.config.js');
TAILWIND_CONFIG.purge.enabled = false

const styles_develop = function styles_develop() {
    return src(SRC_STYLES)
        .pipe(
            postcss([
                require('tailwindcss')(TAILWIND_CONFIG),
                require('autoprefixer'),
            ])
        )
        .pipe(dest(DST_STYLES));
};
const styles_build = function styles_build() {
    return src(SRC_STYLES)
        .pipe(
            postcss([
                require('tailwindcss'),
                require('autoprefixer'),
                require('cssnano')({
                    preset: 'default',
                }),
            ])
        )
        .pipe(
            rename({
                suffix: '.min',
            })
        )
        .pipe(dest(DST_STYLES));
};

const scripts = function scripts() {
    return src(SRC_SCRIPTS)
        .pipe(
            babel({
                presets: ['@babel/preset-env', '@babel/preset-react'],
            })
        )
        .pipe(concat('scripts.js'))
        .pipe(
            minify({
                ext: {
                    min: '.min.js',
                },
                ignoreFiles: ['.min.js'],
            })
        )
        .pipe(dest(DST_SCRIPTS));
};

const watch_files = function watch_files() {
    console.info('watching: ' + SRC_STYLES);
    watch(SRC_STYLES, parallel(styles_develop));
    console.info('watching: ' + SRC_SCRIPTS);
    watch(SRC_SCRIPTS, parallel(scripts));
};

const clean_all = function clean_all() {
    return src(['./assets/css/**/*.css', './assets/js/**/*.js'], {
        read: false,
        allowEmpty: true,
    }).pipe(clean());
};

module.exports.build = series(clean_all, parallel(styles_develop, styles_build, scripts));
module.exports.watch = watch_files;
