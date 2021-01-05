window.taCheckTrigger = function () {
    return {
        id: '',
        initialized: false,
        checked: false,
        storage: false,
        name: false,
        options: {
            id: '',
            namespace: 'application',
            prefix: 'ta-check',
        },
        init() {
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

            this.id = location.pathname.replace(/\//gi, '');
            if (this.options.id.length !== 0) {
                this.id = this.options.id;
            }

            this.name = this.options.prefix + '.' + this.options.namespace;
            this.storage = this.getStorage(this.name);
            if (this.storage === null) {
                this.storage = [];
            } else {
                try {
                    this.storage = JSON.parse(this.storage);
                } catch (e) {
                    console.warn('TA-Check - storage file corrupted');
                    this.storage = [];
                }
            }
            if (this.storage.length === 0) {
                this.setStorage(this.name, JSON.stringify(this.storage));
            }

            if (this.storage.indexOf(this.id) !== -1) {
                this.checked = true;
            }

            this.initialized = true;

            this.$watch('checked', (value) => {
                if (value === true) {
                    if (this.storage.indexOf(this.id) === -1) {
                        this.storage.push(this.id);
                    }
                } else {
                    const index = this.storage.indexOf(this.id);
                    if (index !== -1) {
                        this.storage.splice(index, 1);
                    }
                }
                this.setStorage(this.name, JSON.stringify(this.storage));
            });
        },
        toggleCheck() {
            this.checked = !this.checked;
        },
        // setStorage(item, value) {
        //     try {
        //         localStorage.setItem(item, value);
        //         return true;
        //     } catch (e) {
        //         if (e.name == 'NS_ERROR_FILE_CORRUPTED') {
        //             alert(this.message);
        //         }
        //         this.setCookie(item, value);
        //         return false;
        //     }
        // },
        // getStorage(item) {
        //     try {
        //         return localStorage.getItem(item).replace(/(<([^>]+)>)/gi, '');
        //     } catch (e) {
        //         if (e.name == 'NS_ERROR_FILE_CORRUPTED') {
        //             alert(this.message);
        //         }
        //         return this.getCookie(item);
        //     }
        // },
        // setCookie(item, value) {
        //     var expires = '';
        //     var date = new Date();
        //     date.setTime(date.getTime() + 12 * 30 * 24 * 60 * 60 * 1000);
        //     expires = '; expires=' + date.toUTCString();
        //     document.cookie = item + '=' + value + expires + '; path=/';
        // },
        // getCookie(item) {
        //     var itemValue = document.cookie.match('(^|;) ?' + item + '=([^;]*)(;|$)');
        //     return itemValue ? itemValue[2].replace(/(<([^>]+)>)/gi, '') : null;
        // },
    };
};

window.taCheckList = function () {
    return {
        initialized: false,
        trigger_id: '',
        trigger_checked: false,
        checked: {},
        storage: false,
        name: false,
        elements: [],
        has_resume: false,
        has_finished: false,
        resume: {},
        options: {
            id: '',
            namespace: 'application',
            prefix: 'ta-check',
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

            this.name = this.options.prefix + '.' + this.options.namespace;
            this.storage = this.getStorage(this.name);
            if (this.storage === null) {
                this.storage = [];
            } else {
                try {
                    this.storage = JSON.parse(this.storage);
                } catch (e) {
                    console.warn('TA-Check - storage file corrupted');
                    this.storage = [];
                }
            }
        },
        list(options) {

            this.init(options)

            const elements = this.$el.querySelectorAll('[data-id]');
            for (let index = 0; index < elements.length; index++) {
                const id = elements[index].dataset.id;
                const checked = this.storage.indexOf(id) !== -1 ? true : false;
                this.checked[elements[index].dataset.id] = checked;
                this.elements.push({
                    index: index,
                    id: id,
                    checked: checked,
                    href: elements[index].dataset.href,
                    text: elements[index].dataset.text,
                });
            }

            let index = 0;
            for (index = 0; index < this.elements.length; index++) {
                if (this.elements[index].checked === false) {
                    break;
                }
            }
            if (index > 0) {
                if (index >= this.elements.length) {
                    this.has_finished = true;
                } else {
                    this.resume = this.elements[index];
                    if (this.resume.href !== location.pathname) {
                        this.has_resume = true;
                    }
                }
            }

            this.initialized = true;

            // this.checkResume();
        },
        trigger(options) {

            this.init(options)

            this.trigger_id = location.pathname.replace(/\//gi, '');
            if (this.options.id.length !== 0) {
                this.trigger_id = this.options.id;
            }

            if (this.storage.length === 0) {
                this.setStorage(this.name, JSON.stringify(this.storage));
            }

            if (this.storage.indexOf(this.trigger_id) !== -1) {
                this.trigger_checked = true;
            }

            this.initialized = true;

            this.$watch('trigger_checked', (value) => {
                if (value === true) {
                    if (this.storage.indexOf(this.trigger_id) === -1) {
                        this.storage.push(this.trigger_id);
                    }
                } else {
                    const index = this.storage.indexOf(this.trigger_id);
                    if (index !== -1) {
                        this.storage.splice(index, 1);
                    }
                }
                this.setStorage(this.name, JSON.stringify(this.storage));
            });

        },
        toggleCheck() {
            this.trigger_checked = !this.trigger_checked;
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

window.taCheckList2 = function () {
    return {
        id: '',
        initialized: false,
        checked: false,
        storage: false,
        name: false,
        // elements: [],
        options: {
            id: '',
            namespace: 'application',
            prefix: 'ta-check',
        },
        init() {
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

            this.id = location.pathname.replace(/\//gi, '');
            if (this.options.id.length !== 0) {
                this.id = this.options.id;
            }
            const name = this.options.prefix + '.' + this.options.namespace;
            var storage = this.getStorage(name);
            try {
                storage = JSON.parse(storage);
            } catch (e) {
                console.warn('TA-Check - storage file corrupted');
                storage = [];
            }
            if (storage === null) {
                storage = [];
            }
            if (storage.indexOf(this.id) !== -1) {
                this.checked = true;
            }

            // console.info('rel', this.$el.querySelectorAll(".check"));
        },
    };
};

window.taCheckFnc = {
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
