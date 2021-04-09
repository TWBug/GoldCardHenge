window.taForm = function () {
    return {
        language: 'en',
        options: {
            language: 'en',
            supported: ['en', 'zh'],
        },
        loading: false,
        valid: false,
        sent: false,
        message: '',
        form: {},
        error: {},
        filled: {},
        default: {},
        init(options) {
            if (typeof options !== 'undefined') {
                if (typeof options !== 'object' || options instanceof Array) {
                    console.warn(
                        'Options are in wrong type - should be object - default options been used'
                    );
                }
                for (const property in options) {
                    this.form[property] = options[property];
                }
            }

            // checks if options are defined by data
            for (const property in this.$el.dataset) {
                this.form[property] = this.$el.dataset[property];
            }

            // defines error object
            // + set default value
            for (const property in this.form) {
                this.error[property] = false;
                this.default[property] = this.form[property];
            }
        },
        submit() {
            if (this.check() === false) {
                return;
            }
            this.loading = true;
            this.$fetch({
                url: 'https://ticket.taiwan-gold-card-office.workers.dev',
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': window.TGC_SESSION_ID,
                },
                data: JSON.stringify(this.form),
            })
                .then(() => {
                    this.valid = true;
                    this.reset();
                })
                .catch(() => {
                    this.valid = false;
                })
                .finally(() => {
                    this.loading = false;
                    this.sent = true;
                });
        },
        check() {
            for (const property in this.error) {
                this.error[property] = false;
                this.filled[property] = false;
            }

            if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.form.email) === false) {
                this.error.email = true;
            } else {
                this.filled.email = true;
            }
            if (this.form.type.length === 0) {
                this.error.type = true;
            } else {
                this.filled.type = true;
            }
            if (this.form.name.length === 0) {
                this.error.name = true;
            } else {
                this.filled.name = true;
            }
            if (this.form.subject.length === 0) {
                this.error.subject = true;
            } else {
                this.filled.subject = true;
            }
            if (this.form.description.length === 0) {
                this.error.description = true;
            } else {
                this.filled.description = true;
            }

            for (const property in this.error) {
                if (this.error[property] === true) {
                    return false;
                }
            }
            return true;
        },
        reset() {
            // set form to default values
            for (const property in this.default) {
                this.form[property] = this.default[property];
            }
        },
    };
};
