window.languageDetection = {
    language: 'en',
    default_language: 'en',
    supported_languages: ['en', 'zh'],
    validCharacters: '0123456789abcdefghijklmnopqrstuvwxyz-/:%=_#&.@()+*,;',
    message:
        "Sorry, it looks like your browser storage has been corrupted. Please clear your storage by going to Tools -> Clear Recent History -> Cookies and set time range to 'Everything'. This will remove the corrupted browser storage across all sites.",
    init() {
        // checks always the language - if not valid reset it to default english
        this.language = this.getStorage('language');
        if (this.supported_languages.indexOf(this.language) === -1) {
            this.language = this.default_language;
        }
        if (this.language !== null) {
            if (this.checkValidLanguage(this.language) === false) {
                this.language = 'en';
                this.setStorage('language', this.language);
            }
        } else {
            this.language = this.getBrowserLanguage();
        }

        // if not redirect to a valid and checked destination
        var old_language = location.pathname.substring(1, 3);
        if (old_language !== this.language) {
            this.redirect(old_language);
        }
        return this.language;
    },

    /**
     * Given a URL, ensure that it is under a whitelisted hostname and url
     * encoded.
     * @note This is duplicated in _ta-language.js
     * @param {string} str
     * @returns str
     */
    cleanURL(str) {
        const u = new URL(str);
        const whitelist = ['hengetech.website'];
        if (process.env.NODE_ENV !== 'production') {
            console.warn('%cDev URLs enabled', 'color:red;background:yellow;');
            whitelist.push('localhost:1313');
        }
        if (!whitelist.includes(u.host)) {
            console.warn(`%cNon whitelisted URL: ${str}!`, 'color:red;background:yellow;');
            u.host = 'hengetech.website';
        }

        // NOTE: The string is automatically URI encoded, so no need for manual
        // encoding logic.
        return u.toString();
    },

    getCleanLocationPathname() {
        const source = location.pathname.substr(3).toString();
        let destination = '';
        for (let i = 0; i < source.length; i++) {
            if (this.validCharacters.indexOf(source[i].toLowerCase()) !== -1) {
                destination += source[i]
            } else {
                console.warn(`%cStriped out character: ${source[i]}!`, 'color:red;background:yellow;');
            }
        }
        return destination;
    },

    getBrowserLanguage() {
        const browser_language = navigator.language || navigator.userLanguage;
        const user_language = browser_language.split('-');
        var language = user_language[0];
        if (this.checkValidLanguage(language) === false) {
            language = 'en';
        }
        this.setStorage('language', language);
        return language;
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
    redirect(old_language) {
        if (this.supported_languages.indexOf(old_language) === -1) {
            old_language = this.default_language;
        }

        var location_path_name = this.getCleanLocationPathname();
        var location_new = location.origin + '/' + this.language + location_path_name;
        window.location.href = this.cleanURL(location_new);
        return true;
    },
    checkValidLanguage(language) {
        const valid_languages = ['en', 'zh'];
        if (valid_languages.indexOf(language) !== -1) {
            return true;
        }
        return false;
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
