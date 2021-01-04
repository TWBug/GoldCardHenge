window.languageDetection = {
    language: 'en',
    default_language: 'en',
    supported_languages: ['en', 'zh'],
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
        // var path = location.pathname
        var old_language = location.pathname.substring(1, 3);
        if (old_language !== this.language) {
            this.redirect(old_language);
        }
        return this.language;
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

        var location_path_name = location.pathname.substr(3);
        var location_new = location.origin + '/' + this.language + location_path_name;
        // var new_location = location.pathname.substring(1, 3).replace(old_language, this.language) + location.pathname.substring(location.pathname.length - 3)
        // var new_href = location.origin + new_location
        if (this.checkDestination(location_new) === true) {
            window.location.href = location_new;
        } else {
            window.location.href = location.origin + '/' + this.language + '/';
        }
        return true;
    },
    checkDestination(url) {
        var request;
        if (window.XMLHttpRequest) request = new XMLHttpRequest();
        else request = new ActiveXObject('Microsoft.XMLHTTP');
        request.open('GET', url, false);
        request.send();
        if (request.status === 404) {
            return false;
        }
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
