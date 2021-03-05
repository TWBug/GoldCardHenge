window.taGallery = function () {
    return {
        initialized: false,
        modal: false,
        image: {},
        items: [],
        index: 0,
        options: {
            id: '',
            item: 'ta-gallery-item',
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

            this.items = this.$el.querySelectorAll('.' + this.options.item);
            for (let index = 0; index < this.items.length; index++) {
                this.items[index].addEventListener('click', (event) => {
                    event.preventDefault();
                    this.showModal(index);
                });
            }

            this.$el.addEventListener('keyup', (event) => {
                console.info('keyup', event);
                event.preventDefault();
                this.next();
            });
            console.info('items', this.items);
        },
        showModal(index) {
            console.info('index', index);
            this.index = index;
            this.setImage()
            this.modal = true;
        },
        toggleModal() {
            this.modal = !this.modal;
        },
        next() {
            var next_index = this.index++;
            if (next_index > this.items.length) {
                next_index = 0;
            }
            this.index = next_index;
            this.setImage()
        },
        setImage() {
            this.image.src = this.items[this.index].href;
            this.image.alt = this.items[this.index].href;
        }
    };
};
