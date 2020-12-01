window.taMap = function () {
    return {
        elements: [],
        play: [],
        active: -1,
        modal: false,
        wrapper: {},
        data: {},
        default: {},
        init() {
            const content = this.$el.querySelectorAll('.member');
            for (let index = 0; index < content.length; index++) {
                this.elements.push(content[index]);
                this.play.push(true);
            }
            const wrapper = this.$el.querySelector('.wrapper');
            this.wrapper = {
                left: wrapper.offsetLeft,
                width: wrapper.innerWidth,
            };
        },
        toggle(index) {
            const top = this.elements[index].offsetTop;
            const left = this.elements[index].offsetLeft + this.wrapper.left;
            this.play[this.active] = true;
            this.play[index] = !this.play[index];
            this.active = index;
            this.modal = true;
            this.data = {
                name: this.elements[index].dataset.name,
                image: '/img/' + this.elements[index].dataset.image,
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
            for (let index = 0; index < this.play.length; index++) {
                this.play[index] = true;
            }
            this.active = -1;
        },
    };
};
