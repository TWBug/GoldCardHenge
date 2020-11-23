Spruce.store(
    'filter',
    {
        tags: [],
        log() {
            console.info('tags', this.tags);
        },
    },
    true
);

window.languageDetection.init()
window.highlight.replace()
window.linksTargetBlank.replace()
window.addEventListener('resize', handleResize)
handleResize()
smoothScroll()
