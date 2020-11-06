window.taWelcome = function () {
    return {
        show: false,
        language: 'en',
        available_languages: ['de','es', 'ar'],
        supported_languages: ['en','zh'],
        headline: '',
        description: '',
        init() {
            var welcome = localStorage.getItem("welcome")
            if (welcome === null) {
                this.checkBrowserLanguage()
                return false
            }
            var timestamp = Date.parse(welcome)
            if (Number.isNaN(timestamp)) {
                this.checkBrowserLanguage()
                return false
            }
            var date = new Date(welcome)
            var today = new Date()
            var difference = Math.round((today - date) / 1000)
            if (difference > 2592000) {
                this.checkBrowserLanguage()
                return false
            }
            return true
        },
        setLanguage(language) {
            if (this.supported_languages.indexOf(language) === -1) {
                return false
            }
            this.hide()
            localStorage.setItem('language', language)
            window.location.href = location.origin + '/' + language + '/'
        },
        hide() {
            this.show = false
            localStorage.setItem("welcome", new Date().toString())
        },
        fetchData(language) {
            const url = location.origin + '/' + language + '/welcome.json'
            fetch(url)
                .then((response) => response.json())
                .then((json) => {
                    if (typeof json.headline !== 'undefined' && typeof json.description !== 'undefined') {
                        this.headline = json.headline
                        this.description = json.description
                        this.show = true
                    }
                })
                .catch((error) => {
                    console.warn(error)
                })
        },
        checkBrowserLanguage() {
            const browser_language = navigator.language || navigator.userLanguage
            const user_language = browser_language.split('-')
            this.language = user_language[0]
            if (this.available_languages.indexOf(this.language) === -1) {
                return false
            }
            this.fetchData(this.language)
            return true
        },
    }
}
