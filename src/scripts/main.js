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

window.languageDetection.init();
window.highlight.replace();
window.linksTargetBlank.replace();
// window.addEventListener('resize', handleResize);
handleResize();
smoothScroll();
