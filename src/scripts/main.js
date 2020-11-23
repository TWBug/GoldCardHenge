Spruce.store(
    'filter',
    {
        faqs: {},
        empty: false,
        log() {
            console.info('faqs', this.faqs);
        },
    },
    false
);

window.languageDetection.init();
window.highlight.replace();
window.linksTargetBlank.replace();
window.addEventListener('resize', handleResize);
handleResize();
smoothScroll();
