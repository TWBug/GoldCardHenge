window.taFilter = function () {
    return {
        initialized: false,
        filter: '',
        index: [],
        result: [],
        init() {
            const url = location.origin + location.pathname + 'data.json';
            fetch(url)
                .then((response) => response.json())
                .then((json) => {
                    this.index = json;
                    this.initialized = true;
                    this.resetResult()
                })
                .catch((error) => {
                    console.warn(error);
                });
            this.$watch('filter', (value) => {
                if (value.length === 0) {
                    return this.resetResult()
                }
                this.findContent();
            });
        },
        resetFilter() {
            this.filter = ''
            document.getElementById("filter").focus();
        },
        findContent() {
            var result = [];
            this.index.forEach((element) => {
                if (element.summary.indexOf(this.filter) !== -1) {
                    if (result.indexOf(element.index) === -1) {
                        result.push(parseInt(element.index));
                    }
                }
            });
            result.sort((a, b) => {
                if (a < b) {
                    return -1;
                }
                return 1;
            });
            this.result = result;
        },
        resetResult() {
            var result = []
            for (let index = 0; index < this.index.length; index++) {
                result.push(index)
            }
            this.result = result
            return true
        },
        isInResult(index) {
            if (this.initialized) {
                return this.result.indexOf(index) !== -1 ? true : false
            }
            return true
        },
        isNoResult() {
            if (this.initialized === false) return false
            return this.result.length === 0 ? true : false
        },
        isFiltered() {
             return this.result.length !== this.index.length ? true : false
        }
    };
};
