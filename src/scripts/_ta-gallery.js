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

            const items = this.$el.querySelectorAll('.' + this.options.item);
            for (let index = 0; index < items.length; index++) {
                if (typeof items[index].href === 'undefined') {
                    continue;
                }
                this.items.push(items[index]);
            }
            for (let index = 0; index < this.items.length; index++) {
                this.items[index].addEventListener('click', (event) => {
                    event.preventDefault();
                    this.showModal(index);
                });
            }

            this.$el.addEventListener('keyup', (event) => {
                if (event.key === 'Escape') {
                    this.hideModal();
                    return;
                } else if (event.key === 'ArrowRight') {
                    this.next();
                    return;
                } else if (event.key === 'ArrowLeft') {
                    this.previous();
                    return;
                }
                event.preventDefault();
            });
        },
        showModal(index) {
            this.index = index;
            this.setImage();
            this.modal = true;
        },
        toggleModal() {
            this.modal = !this.modal;
        },
        hideModal() {
            this.modal = false;
        },
        next() {
            var next_index = this.index + 1;
            if (next_index > this.items.length -1) {
                next_index = 0;
            }
            this.index = next_index;
            this.setImage();
        },
        previous() {
            var previous_index = this.index - 1;
            if (previous_index < 0) {
                previous_index = this.items.length - 1;
            }
            this.index = previous_index;
            this.setImage();
        },
        setImage() {
            this.image.src = this.items[this.index].href;
            this.image.alt = this.items[this.index].href;
            this.image.title = false;
            if (typeof this.items[this.index].dataset.title !== 'undefined') {
                if (this.items[this.index].dataset.title !== '') {
                    this.image.title = this.items[this.index].dataset.title;
                }
            }
            this.image.description = false;
            if (typeof this.items[this.index].dataset.description !== 'undefined') {
                if (this.items[this.index].dataset.description !== '') {
                    this.image.description = this.items[this.index].dataset.description;
                }
            }
        },
    };
};
