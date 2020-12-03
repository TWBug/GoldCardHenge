window.taCounter = function () {
    return {
        status: false,
        options: {
            ref: 'number',
            start: 0,
            end: 1000,
            duration: 4000,
            interval: 100,
            locale: false,
            animate: true,
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
            if (this.options.animate === false) return;
            if (this.prefersReducedMotion()) {
                this.interval = 1000
            };
            if (this.options.locale === false) {
                this.options.locale = this.getVisitorLocale()
            }
            window.addEventListener('scroll', () => {
                if (this.isInViewport(this.$refs[this.options.ref]) && this.status === false) {
                    this.status = true;
                    this.startCounting(
                        this.$refs[this.options.ref],
                        this.options.start,
                        this.options.end,
                        this.options.duration
                    );
                }
            });
            this.$refs[this.options.ref].innerHTML = this.options.start;
        },
        startCounting(ref, start, end, duration) {
            if (start === end) return;
            ref.innerHTML = start;
            let current = start;
            const range = end - start;
            const single_step = (range / duration) * 100;
            const timer = setInterval(() => {
                current += single_step;
                ref.innerHTML = Math.floor(current).toLocaleString(this.options.locale);
                if (current >= end) {
                    ref.innerHTML = end.toLocaleString(this.options.locale);
                    clearInterval(timer);
                }
            }, this.options.interval);
        },
        isInViewport(el) {
            const rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        },
        prefersReducedMotion() {
            const QUERY = '(prefers-reduced-motion: no-preference)';
            const mediaQueryList = window.matchMedia(QUERY);
            const prefersReducedMotion = !mediaQueryList.matches;
            return prefersReducedMotion;
        },
        getVisitorLocale() {
            const browser_language = navigator.language || navigator.userLanguage
            const visitor_language = browser_language.split('-')
            return visitor_language[0]
        }
    };
};
