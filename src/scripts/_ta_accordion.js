window.taAccordion = function () {
    return {
        show: false,
        link: '',
        default: {},
        init(tags) {
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
        },
        toggle() {
            this.show = !this.show;
            if (document.activeElement === this.$refs.button) {
                this.link = this.$refs.link.value;
            }
        },
    };
};
