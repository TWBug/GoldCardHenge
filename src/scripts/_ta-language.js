window.taLanguage = function () {
    return {
        language: 'en',
        default: {
            language: 'en',
            supported: ['en', 'zh'],
            validCharacters: '0123456789abcdefghijklmnopqrstuvwxyz-/:%=_#&.@()+*,;'
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
            if (process.env.NODE_ENV !== 'production') {
                console.warn('%cDev URLs enabled', 'color:red;background:yellow;');
                whitelist.push('localhost:1313');
            }
            if (!whitelist.includes(u.host)) {
                console.warn(`%cNon whitelisted URL: ${str}!`, 'color:red;background:yellow;');
                u.host = 'goldcard.nat.gov.tw';
            }

            // NOTE: The string is automatically URI encoded, so no need for manual
            // encoding logic.
            return u.toString();
        },

        getCleanLocationPathname() {
            const source = location.pathname.substr(3).toString();
            let destination = '';
            for (let i = 0; i < source.length; i++) {
                if (this.default.validCharacters.indexOf(source[i].toLowerCase()) !== -1) {
                    destination += source[i]
                }
            }
            return destination;
        },

        switchLanguage(language) {
            if (this.default.supported.indexOf(language) === -1) {
                return false;
            }
            var location_path_name = this.getCleanLocationPathname();
            var location_new = location.origin + '/' + language + location_path_name;
            localStorage.setItem('language', language);
            this.language = language;

            window.location.href = this.cleanURL(location_new);
        },
    };
};
