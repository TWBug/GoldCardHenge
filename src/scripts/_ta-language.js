window.taLanguage = function () {
    return {
        language: 'en',
        default: {
            language: 'en',
            supported: ['en', 'zh'],
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
            this.language = this.default.language;
        },

        /**
         * Given a URL, ensure that it is under a whitelisted hostname and url
         * encoded.
         * @note This is duplicated in _language-detection.js
         * @param {string} str
         * @returns str
         */
        cleanURL(str) {
            const u = new URL(str);
            const whitelist = ['staging.taiwangoldcard.tw', 'goldcard.nat.gov.tw'];
            if (process.env.NODE_ENV === 'development') {
                console.warn('%cDev URLs enabled', 'color:red;background:yellow;');
                whitelist.push('localhost:1313');
            }

            if (!whitelist.includes(u.host)) {
                console.warn(`%cNon whitelisted URL: ${str}!`, 'color:red;background:yellow;');
                return 'goldcard.nat.gov.tw';
            }

            // NOTE: The string is automatically URI encoded, so no need for manual
            // encoding logic.
            return u.toString();
        },

        switchLanguage(language) {
            if (this.default.supported.indexOf(language) === -1) {
                return false;
            }
            var location_path_name = location.pathname.substr(3);
            var location_new = location.origin + '/' + language + location_path_name;
            localStorage.setItem('language', language);
            this.language = language;

            window.location.href = this.cleanURL(location_new);
        },
    };
};
