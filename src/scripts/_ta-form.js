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
            for (const property in this.form) {
                this.error[property] = false;
            }
        },
        submit() {
            if (this.check() === false) {
                return;
            }
            this.loading = true;
            this.$fetch('https://plain-grass-a9c0.taiwan-gold-card-office.workers.dev/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(this.form),
            })
                .then(() => {
                    console.info('fetch', this);
                    this.valid = true;
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
            }

            if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.form.email) === false) {
                this.error.email = true;
            }
            if (this.form.topic.length === 0) {
                this.error.topic = true;
            }
            if (this.form.subject.length === 0) {
                this.error.subject = true;
            }
            if (this.form.description.length === 0) {
                this.error.description = true;
            }

            for (const property in this.error) {
                if (this.error[property] === true) {
                    return false;
                }
            }
            return true;
        },
    };
};

// window.taForm = function () {
//     return {
//         language: 'en',
//         options: {
//             language: 'en',
//             supported: ['en', 'zh'],
//         },
//         data: {
//             authenticity_token: 'UIrYBi5cp2iO8HaN9W3v/brtWrCDstDI4LkCk6QbYX8=',
//             'helpdesk_ticket[email]': 'test@futureward.com',
//             'helpdesk_ticket[name]': 'Test Name',
//             'helpdesk_ticket[subject]': 'Test Subject',
//             'helpdesk_ticket[ticket_body_attributes][description_html]': 'Description',
//             'meta[user_agent]':
//                 'Mozilla/5.0 (Macintosh; Intel Mac OS X 11_1_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36',
//             'meta[referrer]': 'help-desk-form',
//             utf8: '&#x2713',
//             'helpdesk_ticket[source]': '9',
//             retainParams: '{"widgetType":"embedded","submitTitle":"Send"}',
//         },
//         init(options) {
//             if (typeof options !== 'undefined') {
//                 if (typeof options !== 'object' || options instanceof Array) {
//                     console.warn(
//                         'Options are in wrong type - should be object - default options been used'
//                     );
//                 }
//                 for (let [key, value] of Object.entries(options)) {
//                     this.options[key] = value;
//                 }
//             }

//             console.info(this.$refs.iframe);
//             setTimeout(function(){

//                 console.info('window.freshdesk', window.freshdesk.document.head);
//             }, 3000);

//             // Array.prototype.forEach.call(window.parent.document.querySelectorAll("link[rel=stylesheet]"), function(link) {
//             //     var newLink = document.createElement("link");
//             //     newLink.rel  = link.rel;
//             //     newLink.href = link.href;
//             //     document.head.appendChild(newLink);
//             // });

//             const styles = document.createElement("link");
//             styles.rel  = 'stylesheet';
//             styles.href = 'http://localhost:1313/css/helpdesk.css';
//             window.freshdesk.document.head.appendChild(styles);
//             // this.$refs.iframe.document.head.appendChild(styles);

//             // this.$refs.iframe.contents().find("head").append($('<link rel="stylesheet" type="text/css" href="http://localhost:1313/css/helpdesk.css">')

//             // this.$fetch({
//             //     url: 'https://help.taiwangoldcard.tw/widgets/feedback_widget?widgetType=embedded',
//             //     method: 'post',
//             //     headers: { 'Content-Type': 'application/json' },
//             //     body: JSON.stringify(this.data),
//             // }).then(({ data }) => console.log(data));
//         },
//     };
// };
