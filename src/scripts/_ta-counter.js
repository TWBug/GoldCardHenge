window.taCounter = function () {
    return {
        status: false,
        element: false,
        negative: false,
        options: {
            ref: 'number',
            start: 0,
            end: 1000,
            duration: 4000,
            interval: 100,
            locale: false,
            suffix: '',
            prefix: '',
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
            if (this.prefersReducedMotion() && this.options.interval < 1000) {
                this.options.interval = 1000;
            }
            if (this.options.locale === false) {
                this.options.locale = this.getVisitorLocale();
            }
            this.element = this.$refs[this.options.ref];
            if (typeof this.element === 'undefined') {
                console.warn('taCounter: ref element was not found:', this.options.ref);
                return;
            }
            this.element.innerHTML = this.options.start;

            // if element is already in the viewport -> start counting
            if (this.isInViewport()) {
                this.status = true;
                this.startCounting();
            }

            // check if element is in the viewport -> start counting
            window.addEventListener('scroll', () => {
                if (this.isInViewport() && this.status === false) {
                    this.status = true;
                    this.startCounting();
                }
            });
        },
        startCounting() {
            if (this.options.start === this.options.end) return;
            if (this.options.start > this.options.end) {
                this.negative = true;
            }
            this.element.innerHTML = this.options.start;
            let current = this.options.start;
            const range = this.options.end - this.options.start;
            const single_step = (range / this.options.duration) * this.options.interval;
            const timer = setInterval(() => {
                current += single_step;
                this.element.innerHTML = this.getCounterString(current);
                if ((current >= this.options.end && this.negative === false) || (current <= this.options.end && this.negative === true) ) {
                    this.element.innerHTML = this.getCounterString(this.options.end);
                    clearInterval(timer);
                }
            }, this.options.interval);
        },
        isInViewport() {
            const position = this.element.getBoundingClientRect();
            return (
                position.top >= 0 &&
                position.left >= 0 &&
                position.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                position.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        },
        prefersReducedMotion() {
            const QUERY = '(prefers-reduced-motion: no-preference)';
            const mediaQueryList = window.matchMedia(QUERY);
            const prefersReducedMotion = !mediaQueryList.matches;
            return prefersReducedMotion;
        },
        getVisitorLocale() {
            const browser_language = navigator.language || navigator.userLanguage;
            const visitor_language = browser_language.split('-');
            return visitor_language[0];
        },
        getCounterString(current) {
            return (
                this.options.prefix +
                Math.floor(current).toLocaleString(this.options.locale) +
                this.options.suffix
            );
        },
    };
};
