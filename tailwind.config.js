const plugin = require('tailwindcss/plugin');

const colors = {
    primary: '#ce3f00',
    secondary: '#567351',
    highlight: '#E5AD02',
    background: '#EEF5E0',
    gradient: '#1F80CE',
    'nav-dark': '#004c81',
    'nav-meta': '#005E9E',
    'nav-start': '#2183D1',
    'nav-end': '#1A7AC7',
    'secondary-dark': '#2F5302',
    'secondary-medium': '#3B6505',
    'secondary-light': '#1A683B',
    'secondary-white': '#E9F0EA',
};

module.exports = {
    purge: {
        enabled: true,
        content: ['./layouts/**/*.html'],
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
            fontWeight: {
                bolder: 'bolder',
            },
            fontSize: {
                md: '0.925rem',
                '5xl': '2.45rem',
                '6xl': '3rem',
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
                primary: '2px dashed #ce3f00',
            },
            zIndex: {
                '-1': '-1',
            },
        },
    },
    variants: {
        transitionProperty: ['responsive', 'hover', 'focus', 'motion-reduce'],
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/ui'),
        plugin(function ({ addUtilities }) {
            const changedUtilities = {
                '.backdrop-blur-1': {
                    backdropFilter: 'blur(1px)',
                },
                '.backdrop-blur-2': {
                    backdropFilter: 'blur(2px)',
                },
                '.backdrop-blur-3': {
                    backdropFilter: 'blur(5px)',
                },
                '.font-bolder': {
                    fontWeight: 'bolder',
                },
                '.filter-dropshadow-white': {
                    filter: 'drop-shadow(0px 0px 2px white)',
                },
                '.filter-dropshadow-black': {
                    filter: 'drop-shadow(0px 0px 2px rgba(0,0,0,0.5))',
                },
                '.filter-dropshadow-blue': {
                    filter: 'drop-shadow(0px 0px 2px rgba(1, 127, 209,1))',
                },
                '.filter-none': {
                    filter: 'none',
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
            };
            addUtilities(changedUtilities, {
                variants: ['responsive'],
            });
        }),
    ],
};
