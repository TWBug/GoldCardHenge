window.taMainContent = function () {
    // https://www.w3.org/TR/WCAG-TECHS/G1.html
    return {
        href: '',
        offsetTop: 0,
        options: {
            tag: 'h1',
            fallback: 'maincontent',
            wrapper: 'scroll',
            offset: 0,
        },
        init(options) {
            if (typeof options !== 'undefined') {
                if (typeof options !== 'object' || options instanceof Array) {
                    console.warn(
                        'Options are in wrong type - should be object - default options been used'
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

            const element = document.getElementsByTagName(this.options.tag);
            if (typeof element[0] === 'undefined') {
                return;
            }
            var element_id = this.options.fallback;
            if (element[0].id === '') {
                element[0].id = this.options.fallback;
            } else {
                element_id = element[0].id;
            }

            // set the id of the found element
            this.id = element[0].id;

            var scrollNavHeight = document.documentElement.style.getPropertyValue(
                '--navigationScroll'
            );
            if (scrollNavHeight === '') {
                scrollNavHeight = 0;
            } else {
                scrollNavHeight = parseInt(
                    scrollNavHeight.substring(0, scrollNavHeight.indexOf('px'))
                );
            }
            this.offsetTop = element[0].offsetTop + scrollNavHeight;
            this.href = window.location.pathname + '#' + element_id;
        },
        go() {
            scroll({
                top: parseInt(this.offsetTop) - parseInt(this.options.offset),
                behavior: 'smooth',
            });
            const wrapper = document.getElementById(this.options.wrapper);
            if (wrapper === null) {
                return
            }
            const focus = wrapper.querySelector('a:first-of-type, input:first-of-type, button:first-of-type');
            console.info('focus', focus);
            if (focus === null) {
                return
            }
            focus.focus();
            // console.info('main_content', main_content);
            // const test = main_content.querySelector('a:first-of-type');
            // console.info('test', test);
            // scroll({
            //     top: parseInt(this.offsetTop) - parseInt(this.options.offset),
            //     behavior: 'smooth',
            // });
        },
    };
};