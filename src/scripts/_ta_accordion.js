window.taAccordion = function () {
    return {
        show: false,
        link: '',
        shortcut: false,
        clipboard: '',
        title: '',
        options: {
            shortcut: true,
            clipboard: false,
            titleShow: '',
            titleHide: '',
        },
        init() {
            // checks if options are defined by data
            for (let [key, value] of Object.entries(this.$el.dataset)) {
                if (typeof this.options[key] !== 'undefined') {
                    this.options[key] = value;
                }
            }

            this.options.shortcut =
            String(this.options.shortcut).toLowerCase() === 'true';
            this.options.clipboard =
            String(this.options.clipboard).toLowerCase() === 'true';

            if (this.options.titleShow.length > 0) {
                this.title = this.options.titleShow;
                this.$watch('show', (value) => {
                    if (value === true) {
                        this.title = this.options.titleHide;
                        return;
                    }
                    this.title = this.options.titleShow;
                });
            }

            if (this.options.shortcut === true) {
                this.$el.addEventListener('keydown', (key) => {
                    // CTRL + d
                    if (key.ctrlKey === true && key.keyCode === 68) {
                        this.shortcut = !this.shortcut;
                    }
                });
            }

            if (this.options.clipboard === true && typeof this.$clipboard === 'function') {
                this.$el.addEventListener('keydown', (key) => {
                    // CTRL + c
                    if (key.ctrlKey === true && key.keyCode === 67) {
                        this.$clipboard(this.$el.innerText);
                    }
                });
            }
        },
        toggle() {
            this.show = !this.show;
        },
    };
};
