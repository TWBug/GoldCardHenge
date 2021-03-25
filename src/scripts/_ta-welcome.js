window.taWelcome = function () {
    return {
        show: false,
        language: 'en',
        available_languages: ['de', 'es', 'ar', 'fr', 'hi', 'it', 'ko', 'ms', 'pa', 'ru', 'th', 'tr', 'he', 'pt', 'ja', 'bn', 'id'],
        supported_languages: ['en', 'zh'],
        headline: '',
        description: '',
        languages: {
          en: "",
          zh: "",
        },
        init() {
            var welcome = localStorage.getItem('welcome')
            if (welcome === null) {
                this.showModal()
                return false
            }
            var timestamp = Date.parse(welcome)
            if (Number.isNaN(timestamp)) {
                this.showModal()
                return false
            }
            var date = new Date(welcome)
            var today = new Date()
            var difference = Math.round((today - date) / 1000)
            if (difference > 2592000) {
                this.showModal()
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
            localStorage.setItem('welcome', new Date().toString())
        },
        fetchData(language) {
            const url = location.origin + '/welcome/' + language + '.json'
            fetch(url)
                .then((response) => response.json())
                .then((json) => {
                    if (typeof json.headline !== 'undefined' && typeof json.description !== 'undefined') {
                        this.headline = json.headline
                        this.description = json.description
                        this.languages.en = json.en
                        this.languages.zh = json.zh
                        this.show = true
                    }
                })
                .catch((error) => {
                    console.warn('Unable to load welcome message for language: ' + language)
                })
        },
        listenerKeyupEscape() {
            document.addEventListener('keyup', (event) => {
                var key = event.key || event.keyCode
                if (key === 27 || key === 'Escape') {
                    this.hide()
                }
            })
        },
        showModal() {
            const browser_language = navigator.language || navigator.userLanguage
            const user_language = browser_language.split('-')
            this.language = user_language[0]
            if (this.available_languages.indexOf(this.language) === -1) {
                return false
            }
            this.fetchData(this.language)
            this.listenerKeyupEscape()
            return true
        },
    }
}
