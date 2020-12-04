window.taToc = function () {
    return {
        initialized: false,
        folded: true,
        options: {
            folded: true,
            length: 100,
            threshold: 100
        },
        init(options) {
            if (typeof options !== 'undefined') {
                if (typeof options !== 'object' || options instanceof Array) {
                    console.warn(
                        'Options are in wrong type - should be object - options been used'
                    );
                }
                for (let [key, value] of Object.entries(options)) {
                    this.options[key] = value;
                }
            }
            this.checkFolded();
            this.setSmoothScrolling();
        },
        toggle() {
            this.folded = !this.folded;
        },
        checkFolded() {
            this.folded = this.options.folded;
            if (this.options.length > this.options.threshold) {
                this.folded = false
            }
        },
        setSmoothScrolling() {
            const links = this.$el.querySelectorAll("a[href^='#']");
            for (const link of links) {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    var href = e.target.getAttribute('href');
                    href = `[id="${href.substr(1)}"]`;
                    const scrollNavHeight = document.documentElement.style.getPropertyValue(
                        '--navigationScroll'
                    );
                    const scrollNavHeightInt = parseInt(
                        scrollNavHeight.substring(0, scrollNavHeight.indexOf('px'))
                    );
                    const offsetTop =
                        document.querySelector(href).offsetTop +
                        scrollNavHeightInt -
                        Math.round(scrollNavHeightInt * 0.2);
                    scroll({
                        top: offsetTop,
                        behavior: 'smooth',
                    });
                });
            }
        },
    };
};
