window.taAccordion = function () {
    return {
        show: false,
        link: '',
        shortcut: false,
        title: '',
        options: {
            shortcut: true,
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

            if (this.options.titleShow.length > 0) {
                this.title = this.options.titleShow
                this.$watch('show', (value) => {
                    if (value === true) {
                        this.title = this.options.titleHide;
                        return
                    }
                    this.title = this.options.titleShow;
                });
            }

            // if (typeof this.$store === 'undefined') {
            //     return false;
            // }
            // if (typeof this.$store.filter === 'undefined') {
            //     return false;
            // }
            // const id = this.$el.id;
            // this.$store.filter.faqs[id] = {
            //     active: true,
            //     tags: tags,
            // };


            this.options.shortcut = this.options.shortcut == true ? true : false;
            if (this.options.shortcut !== true) {
                return;
            }

            this.$el.addEventListener('keydown', (key) => {
                if (key.ctrlKey === true && key.keyCode === 68) {
                    this.shortcut = !this.shortcut;
                }
            });
        },
        toggle() {
            this.show = !this.show;
            if (document.activeElement === this.$refs.button) {
                this.link = this.$refs.link.value;
            }
        },
    };
};
