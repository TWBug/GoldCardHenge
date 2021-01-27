window.taAccordion = function () {
    return {
        show: false,
        link: '',
        shortcut: false,
        options: {
            shortcut: true,
        },
        init() {
            // checks if options are defined by data
            for (let [key, value] of Object.entries(this.$el.dataset)) {
                if (typeof this.options[key] !== 'undefined') {
                    this.options[key] = value;
                }
            }

            this.options.shortcut = this.options.shortcut == true ? true : false;
            if (this.options.shortcut !== true) {
                return;
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
