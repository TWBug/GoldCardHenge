window.taMap = function () {
    return {
        elements: [],
        play: [],
        active: -1,
        modal: false,
        data: {},
        default: {},
        init() {
            const content = this.$el.querySelectorAll('.member');
            for (let index = 0; index < content.length; index++) {
                this.elements.push(content[index]);
                this.play.push(true);
            }
        },
        toggle(index) {
            const top = this.elements[index].offsetTop;
            const left = this.elements[index].offsetLeft;
            this.play[index] = !this.play[index];
            // console.info(' this.play[index] ', this.elements[index].offsetTop);
            this.active = index;
            this.modal = true;
            this.data = {
                name: this.elements[index].dataset.name,
                image: '/img/' + this.elements[index].dataset.image,
                origin: this.elements[index].dataset.origin,
                local: this.elements[index].dataset.local,
                description: this.elements[index].dataset.description,
                style: `--left:${left}px;--top:${top}px`,
            };
            // if (this.play[index]) {
            //     // this.elements[index].style.setProperty('--state', 'paused');
            //     this.play[index] = 'paused';
            //     return true;
            // }
            // // this.elements[index].style.setProperty('--state', 'running');
            // this.play[index] = 'running';
        },
        closeModal() {
            this.modal = false;
            this.play[this.active] = true;
            this.active = -1;
        },
    };
};
