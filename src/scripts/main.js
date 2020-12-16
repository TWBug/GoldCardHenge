// Spruce.store(
//     'filter',
//     {
//         faqs: {},
//         empty: false,
//         log() {
//             console.info('filter:faqs', this.faqs);
//         },
//     },
//     false
// );
// Spruce.store(
//     'search',
//     {
//         show: false,
//         log() {
//             console.info('search:show', this.show);
//         },
//     },
//     false
// );

// Spruce.watch('search.show', value => console.log('Spruce.watch', value))

// view port height fix for mobile browsers
const vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.languageDetection.init();
window.highlight.replace();
window.linksTargetBlank.replace();
window.addEventListener('resize', handleResize);
handleResize();
smoothScroll();
