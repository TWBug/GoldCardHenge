window.taToc = function () {
    return {
        initialized: false,
        folded: true,
        title: '',
        options: {
            folded: true,
            length: 100,
            threshold: 100,
            titleShow: '',
            titleHide: '',
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

            // checks if options are defined by data
            for (let [key, value] of Object.entries(this.$el.dataset)) {
                if (typeof this.options[key] !== 'undefined') {
                    if (isNaN(value)) {
                        this.options[key] = value;
                    } else {
                        this.options[key] = parseInt(value);
                    }
                }
            }

            if (this.options.titleShow.length > 0) {
                this.title = this.options.titleShow
                this.$watch('folded', (value) => {
                    if (value === true) {
                        this.title = this.options.titleHide;
                        return
                    }
                    this.title = this.options.titleShow;
                });
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
                this.folded = false;
            }
        },
        setSmoothScrolling() {
            const links = this.$el.querySelectorAll("a[href^='#']");
            for (const link of links) {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    var href = e.target.getAttribute('href');
                    href = `[id="${href.substr(1)}"]`;

                    var scrollNavHeight = document.documentElement.style.getPropertyValue(
                        '--navigationScroll'
                    );
                    scrollNavHeight = parseInt(
                        scrollNavHeight.substring(0, scrollNavHeight.indexOf('px'))
                    );
                    if (scrollNavHeight < 40) {
                        scrollNavHeight = 75;
                    }

                    const bodyRect = document.body.getBoundingClientRect();
                    const elemRect = document.querySelector(href).getBoundingClientRect();
                    const offsetTop = elemRect.top - bodyRect.top + scrollNavHeight - 20 - 40;
                    scroll({
                        top: parseInt(offsetTop),
                        behavior: 'smooth',
                    });

                });
            }
        },
    };
};
