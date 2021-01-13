const plugin = require('tailwindcss/plugin');

const colors = {
    primary: '#ce3f00',
    secondary: '#567351',
    highlight: '#E5AD02',
    background: '#EEF5E0',
    'background-light': '#D7EAF6',
    gradient: '#1F80CE',
    'nav-dark': '#004c81',
    'nav-meta': '#005E9E',
    'nav-start': '#2183D1',
    'nav-end': '#1A7AC7',
    'gray-blue': '#537796',
    'secondary-dark': '#2F5302',
    'secondary-medium': '#3B6505',
    'secondary-light': '#1A683B',
    'secondary-white': '#E9F0EA',
    'transparent-background': '#EEF5E000',
};

module.exports = {
    purge: {
        enabled: true,
        content: ['./layouts/**/*.html', './src/finder/src/**/*.vue'],
        options: {
            whitelist: [],
        },
        defaultExtractor: (content) => content.match(/[\w-/.:]+(?<!:)/g) || [],
    },
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
        defaultLineHeights: true,
        standardFontWeights: true,
    },
    experimental: {},
    important: false,
    theme: {
        fontFamily: {
            sans: ['Krub', 'Helvetica', 'Arial', 'sans-serif'],
            chinese: ['"Noto Sans TC"', 'Krub', 'Helvetica', 'Arial', 'sans-serif'],
        },
        fontWeight: {
            light: 300,
            regular: 400,
            medium: 500,
            semibold: 600,
            bold: 700,
        },
        container: {
            center: true,
        },
        borderColor: (theme) => ({
            ...theme('colors'),
            ...colors,
        }),
        backgroundColor: (theme) => ({
            ...theme('colors'),
            ...colors,
        }),
        textColor: (theme) => ({
            ...theme('colors'),
            ...colors,
        }),
        gradientColorStops: (theme) => ({
            ...theme('colors'),
            ...colors,
        }),
        extend: {
            boxShadow: {
                white: '0 0 0 3px rgb(255,255,255)',
            },
            fontWeight: {
                bolder: 'bolder',
            },
            fontSize: {
                md: '0.925rem',
                '5xl': '2.45rem',
                '6xl': '3rem',
                '7xl': '3.5rem',
                '8xl': '4rem',
                '9xl': '5rem',
                '10xl': '6rem',
            },
            maxWidth: (theme) => ({
                xxs: '12rem',
                fit: 'fit-content',
                ...theme('spacing'),
            }),
            minWidth: (theme) => ({
                ...theme('spacing'),
                192: '48rem',
            }),
            // width: {
            //     'full': 'calc(100% + var(--width-padding, 0))',
            // },
            height: {
                hero: 'calc((var(--vh) * 100) - var(--navigationMenu))',
            },
            maxHeight: (theme) => ({
                ...theme('spacing'),
                'screen-1/4': 'calc(var(--vh) * 25)',
                'screen-1/2': 'calc(var(--vh) * 50)',
                'screen-2/3': 'calc(var(--vh) * 66)',
                'screen-3/4': 'calc(var(--vh) * 75)',
                screen: 'calc(var(--vh) * 100)',
            }),
            minHeight: (theme) => ({
                ...theme('spacing'),
                'screen-1/4': 'calc(var(--vh) * 25)',
                'screen-1/2': 'calc(var(--vh) * 50)',
                'screen-1/3': 'calc(var(--vh) * 33)',
                'screen-2/3': 'calc(var(--vh) * 66)',
                'screen-3/4': 'calc(var(--vh) * 75)',
                screen: 'calc(var(--vh) * 100)',
                'screen-full': 'calc(var(--vh) * 100)',
                hero: 'calc((var(--vh) * 100) - var(--navigationMenu))',
            }),
            screens: {
                xxl: '1440px',
                print: { raw: 'print' },
            },
            padding: {
                '9/16': 'calc(100% / 1.78)',
                '16/9': 'calc(100% * 9 / 16)',
            },
            outline: {
                primary: ['2px dashed #ce3f00', '2px'],
                white: ['2px dashed #fff', '2px'],
            },
            zIndex: {
                '-1': '-1',
                1: '1',
            },
        },
    },
    variants: {
        borderStyle: ['responsive', 'hover', 'focus', 'focus-within'],
        borderWidth: ['responsive', 'first', 'hover', 'focus', 'focus-within'],
        borderColor: ['responsive', 'hover', 'focus', 'focus-within'],
        backgroundColor: ['responsive', 'hover', 'focus', 'focus-within'],
        transitionProperty: ['responsive', 'hover', 'focus', 'motion-reduce'],
    },
    plugins: [
        // require('@tailwindcss/typography'),
        require('@tailwindcss/ui'),
        require('@markusantonwolf/tailwindcss-filters'),
        plugin(function ({ addUtilities }) {
            const changedUtilities = {
                '.font-bolder': {
                    fontWeight: 'bolder',
                },
                '.self-right': {
                    justifySelf: 'right',
                },
                '.slanted-sm': {
                    clipPath: 'polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)',
                },
                '.row-end': {
                    gridRowEnd: '-1',
                },
                '.hyphens': {
                    hyphens: 'auto',
                },
                '.top-nav-scroll': {
                    top: 'calc(var(--navigationScroll) + 1rem)',
                },
                '.top-nav-menu': {
                    top: 'var(--navigationScroll)',
                },
                '.wp-full': {
                    '--width-padding': '0px',
                    width: 'calc(100% + var(--width-padding))',
                },
                '.wp-0': {
                    '--width-padding': '0rem',
                },
                '.wp-1': {
                    '--width-padding': '0.5rem',
                },
                '.wp-8': {
                    '--width-padding': '4rem',
                },
                '.-wp-8': {
                    '--width-padding': '-4rem',
                },
            };
            addUtilities(changedUtilities, {
                variants: ['responsive'],
            });
        }),
    ],
};
