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
                    console.warn('Options are in wrong type - should be object - default options been used')
                }
                for (let [key, value] of Object.entries(options)) {
                    this.default[key] = value
                }
            }
            this.language = this.default.language
        },
        switchLanguage(language) {
            if (this.default.supported.indexOf(language) === -1) {
                return false
            }
            var location_path_name = location.pathname.substr(3)
            var location_new = location.origin + '/' + language + location_path_name
            localStorage.setItem('language', language)
            this.language = language
            if (this.checkDestination(location_new) === true) {
                window.location.href = location_new
            } else {
                window.location.href = location.origin + '/' + language + '/'
            }
        },
        checkDestination(url) {
            var request
            if (window.XMLHttpRequest) request = new XMLHttpRequest()
            else request = new ActiveXObject('Microsoft.XMLHTTP')
            request.open('GET', url, false)
            request.send()
            if (request.status === 404) {
                return false
            }
            return true
        },
    }
}
