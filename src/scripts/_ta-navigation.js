window.taNavigation = function () {
    return {
        scroll: false,
        modal: false,
        search: false,
        fixed: false,
        checked_menu_height: false,
        dropdown: {
            goldcard: false,
            faq: false,
            whytaiwan: false,
            eventsnews: false,
            resources: false,
        },
        menue: {
            goldcard: false,
            faq: false,
            whytaiwan: false,
            eventsnews: false,
            resources: false,
        },
        default: {
            initiator: 'scroll',
        },
        init(options) {
            if (typeof options !== 'undefined') {
                if (typeof options !== 'object' || options instanceof Array) {
                    console.warn(
                        'Options are in wrong type - should be object - default options been used'
                    );
                }
                for (let [key, value] of Object.entries(options)) {
                    this.default[key] = value;
                }
            }
            const scroll = document.getElementById(this.default.initiator);
            if (scroll === null) {
                return
            }
            const scroll_top = scroll.getBoundingClientRect().top + window.scrollY;
            // console.info('scroll_top', scroll_top);
            window.addEventListener('scroll', () => {
                // scroll
                // var position = document.documentElement.style.getPropertyValue('--navscroll')
                if (window.scrollY >= scroll_top) {
                    this.scroll = true;
                } else {
                    this.scroll = false;
                }
            });

            // const menu = this.$refs.menu
            // if (typeof menu !== 'undefined') {
            //     document.documentElement.style.setProperty('--navigationMenu', `${menu.offsetHeight}px`);
            // }

            window.addEventListener('resize', () => {
                this.setMenuHeight();
            });
            this.setMenuHeight();

            this.$watch('scroll', (value) => {
                if (value !== false) {
                    // if the scroll menue gets hidden - the menue must be hidden too
                    this.hideMenue();
                    this.hideDropdown();
                }
            });
        },
        toggleModal() {
            this.modal = !this.modal;
        },
        toggleSearch() {
            this.search = !this.search;
        },
        scrollTop() {
            window.scroll({
                top: 0,
                behavior: 'smooth',
            });
        },
        setMenuHeight() {
            const menu = this.$refs.menu;
            if (typeof menu !== 'undefined') {
                document.documentElement.style.setProperty(
                    '--navigationMenu',
                    `${menu.offsetHeight}px`
                );
            }
        },
        toggleDropdown(topic, event) {
            if (this.checked_menu_height === false) {
                this.setMenuHeight();
                this.checked_menu_height = true;
            }
            for (const property in this.dropdown) {
                if (property === topic) {
                    this.dropdown[topic] = !this.dropdown[topic];
                    continue;
                }
                this.dropdown[property] = false;
            }
            event.preventDefault();
        },
        toggleMenue(topic, event) {
            const navigationScroll = document.getElementById('navigationScroll');
            if (navigationScroll !== null) {
                document.documentElement.style.setProperty('--navigationScroll', `${navigationScroll.offsetHeight}px`);
            }
            for (const property in this.menue) {
                if (property === topic) {
                    this.menue[topic] = !this.menue[topic];
                    continue;
                }
                this.menue[property] = false;
            }
            event.preventDefault();
        },
        hideDropdown() {
            for (const property in this.dropdown) {
                this.dropdown[property] = false;
            }
        },
        hideDropdown() {
            for (const property in this.dropdown) {
                this.dropdown[property] = false;
            }
        },
        hideMenue() {
            for (const property in this.menue) {
                this.menue[property] = false;
            }
        },
    };
};
