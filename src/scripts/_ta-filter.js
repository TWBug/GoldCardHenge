window.taFilter = function () {
    return {
        tags: {},
        active: [],
        // default: {
        //     language: 'en',
        //     supported: ['en', 'zh'],
        // },
        init() {
            const content = this.$refs.content.childNodes;
            for (let index = 0; index < content.length; index++) {
                const tag = content[index].dataset.tag;
                this.active.push(tag);
                this.tags[tag] = true;
            }
        },
        toggle(tag) {
            if (this.tags[tag] === true) {
                this.active.splice(this.active.indexOf(tag), 1);
            } else {
                this.active.push(tag);
            }
            this.tags[tag] = !this.tags[tag];
            this.checkFaqs();
        },
        checkFaqs() {
            var count = 0;
            for (const key in this.$store.filter.faqs) {
                if (this.$store.filter.faqs.hasOwnProperty(key)) {
                    var active = false;
                    for (let index = 0; index < this.active.length; index++) {
                        const tag = this.active[index];
                        if (this.$store.filter.faqs[key].tags.indexOf(tag) !== -1) {
                            active = true;
                            count++;
                            break;
                        }
                    }
                    this.$store.filter.faqs[key].active = active;
                }
            }
            this.$store.filter.empty = count > 0 ? false : true;
        },
    };
};
