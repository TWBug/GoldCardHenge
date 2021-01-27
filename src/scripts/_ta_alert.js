window.taAlert = () => {
    return {
        show: false,
        options: {
            name: 'ta-alert',
            delay: 1500,
            interval: 1 / 24,
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

            this.options.interval = parseFloat(this.options.interval);
            this.options.delay = parseInt(this.options.delay);

            // checks if options are defined by data
            for (let [key, value] of Object.entries(this.$el.dataset)) {
                if (typeof this.options[key] !== 'undefined') {
                    this.options[key] = value;
                }
            }

            const storage = this.getStorage(this.options.name);
            var date_now = new Date().getTime();
            var date_last = date_now;
            if (!isNaN(storage)) {
                date_last = parseInt(storage);
            }

            if (date_now < date_last + this.options.interval * 60 * 60 * 1000) {
                return;
            }

            setTimeout(() => {
                this.show = true;
            }, this.options.delay);
        },
        hide() {
            this.show = false;
            this.setStorage(this.options.name, new Date().getTime());
        },
        setStorage(item, value) {
            try {
                localStorage.setItem(item, value);
                return true;
            } catch (e) {
                if (e.name == 'NS_ERROR_FILE_CORRUPTED') {
                    alert(this.message);
                }
                this.setCookie(item, value);
                return false;
            }
        },
        getStorage(item) {
            try {
                return localStorage.getItem(item).replace(/(<([^>]+)>)/gi, '');
            } catch (e) {
                if (e.name == 'NS_ERROR_FILE_CORRUPTED') {
                    alert(this.message);
                }
                return this.getCookie(item);
            }
        },
        setCookie(item, value) {
            var expires = '';
            var date = new Date();
            date.setTime(date.getTime() + 12 * 30 * 24 * 60 * 60 * 1000);
            expires = '; expires=' + date.toUTCString();
            document.cookie = item + '=' + value + expires + '; path=/';
        },
        getCookie(item) {
            var itemValue = document.cookie.match('(^|;) ?' + item + '=([^;]*)(;|$)');
            return itemValue ? itemValue[2].replace(/(<([^>]+)>)/gi, '') : null;
        },
    };
};
