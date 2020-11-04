window.taNavigation = function () {
    return {
        scroll: false,
        modal: false,
        fixed: false,
        default: {
            initiator: 'scroll',
        },
        init(options) {
            if (typeof options !== 'undefined') {
                if (typeof options !== 'object' || options instanceof Array) {
                    console.warn('Options are in wrong type - should be object - default options been used')
                }
                for (let [key, value] of Object.entries(options)) {
                    this.default[key] = value
                }
            }
            const scroll = document.getElementById(this.default.initiator)
            const scroll_top = scroll.getBoundingClientRect().top  + window.scrollY
            // console.info('scroll_top', scroll_top);
            window.addEventListener('scroll', () => {
                // scroll
                // var position = document.documentElement.style.getPropertyValue('--navscroll')
                if (window.scrollY >= scroll_top) {
                    this.scroll = true
                } else {
                    this.scroll = false
                }
            })
        },
        toggleModal() {
            this.modal = !this.modal
        },
    }
}
