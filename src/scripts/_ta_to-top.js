window.taToTop = function () {
    return {
        show: false,
        top: 0,
        init() {
            const scroll = document.getElementById('scroll');
            if (scroll === null) {
                return false;
            }
            this.top = Math.round(scroll.getBoundingClientRect().top + window.scrollY);

            document.addEventListener('scroll', () => {
                const topY = window.scrollY;
                if (topY > this.top) {
                    this.show = true;
                } else {
                    this.show = false;
                }
            });
        },
        scrollToTop() {
            window.scroll({
                top: 0,
                behavior: 'smooth',
            });
        },
    };
};
