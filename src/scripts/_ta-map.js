window.taMap = function () {
    return {
        status: false,
        elements: [],
        play: [],
        stop: false,
        active: -1,
        modal: false,
        title: '',
        titleButton: [],
        wrapper: {},
        data: {},
        default: {},
        options: {
            ref: 'map',
            file: 'file',
            titleStop: '',
            titlePlay: '',
        },
        init() {
            // checks if options are defined by data
            for (let [key, value] of Object.entries(this.$el.dataset)) {
                if (typeof this.options[key] !== 'undefined') {
                    this.options[key] = value;
                }
            }

            const content = this.$el.querySelectorAll('.member');
            for (let index = 0; index < content.length; index++) {
                this.elements.push(content[index]);
                this.play.push(true);
                this.titleButton.push(content[index].dataset.titleShow);
            }
            const wrapper = this.$el.querySelector('.wrapper');
            this.wrapper = {
                left: wrapper.offsetLeft,
                width: wrapper.innerWidth,
            };

            if (this.options.titleStop.length > 0) {
                this.title = this.options.titleStop;
                this.$watch('stop', (value) => {
                    if (value === true) {
                        this.title = this.options.titlePlay;
                        return;
                    }
                    this.title = this.options.titleStop;
                });
            }

            // check if element is in the viewport -> start counting
            window.addEventListener('scroll', () => {
                this.startAnimation();
            });
            this.startAnimation();
        },
        toggle(index) {
            const top = this.elements[index].offsetTop;
            const left = this.elements[index].offsetLeft + this.wrapper.left;
            this.play[this.active] = true;
            this.play[index] = !this.play[index];
            this.active = index;
            this.modal = !this.modal;
            if (this.modal === true) {
                this.titleButton[index] = this.elements[index].dataset.titleHide;
            } else {
                this.titleButton[index] = this.elements[index].dataset.titleShow;
            }
            this.data = {
                name: this.elements[index].dataset.name,
                image: this.elements[index].dataset.image,
                origin: this.elements[index].dataset.origin,
                local: this.elements[index].dataset.local,
                description: this.elements[index].dataset.description,
                style: `--left:${left}px;--top:${top}px;--translatex:-2px;--translatey:-28px`,
            };
            if (window.innerWidth < this.$refs.file.width) {
                this.data.style = '';
            }
        },
        closeModal() {
            this.modal = false;
            this.play[this.active] = true;
            this.active = -1;
            if (this.stop === true) {
                return;
            }
            for (let index = 0; index < this.play.length; index++) {
                this.play[index] = true;
            }
        },
        startAnimation() {
            if (this.status === false) {
                if (this.isInViewport()) {
                    var max_scroll = Math.floor(
                        this.$refs[this.options.file].offsetWidth -
                            this.$refs[this.options.ref].offsetWidth -
                            1
                    );
                    if (max_scroll > 250) {
                        max_scroll = 250;
                    }
                    this.status = true;
                    const interval = setInterval(() => {
                        this.$refs[this.options.ref].scrollLeft += 10;
                        if (this.$refs[this.options.ref].scrollLeft > max_scroll) {
                            clearInterval(interval);
                        }
                    }, 40);
                }
            }
        },
        stopAnimation() {
            this.stop = true;
            for (let index = 0; index < this.play.length; index++) {
                this.play[index] = false;
            }
        },
        isInViewport() {
            const position = this.$refs[this.options.ref].getBoundingClientRect();
            return (
                position.top >= 0 &&
                position.left >= 0 &&
                position.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                position.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        },
    };
};
