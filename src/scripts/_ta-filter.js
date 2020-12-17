window.taFilter = function () {
    return {
        initialized: false,
        filter: '',
        is_empty: true,
        index: [],
        result: [],
        init() {
            const url = location.origin + location.pathname + 'data.json';
            if (typeof this.$fetch !== 'undefined') {
                this.$fetch(url)
                    .then((response) => {
                        this.index = response;
                        this.initialized = true;
                        this.resetResult();
                    })
                    .catch((error) => {
                        console.warn(error);
                    });
            } else {
                fetch(url)
                    .then((response) => response.json())
                    .then((json) => {
                        this.index = json;
                        this.initialized = true;
                        this.resetResult();
                    })
                    .catch((error) => {
                        console.warn(error);
                    });
            }
            this.$watch('filter', (value) => {
                if (value.length === 0) {
                    this.is_empty = true;
                    return this.resetResult();
                }
                this.is_empty = false;
                this.findContent();
            });

            setTimeout(() => {
                this.$refs.input.focus();
            }, 200);
        },
        resetFilter() {
            this.filter = '';
            document.getElementById('filter').focus();
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
            var result = [];
            for (let index = 0; index < this.index.length; index++) {
                result.push(index);
            }
            this.result = result;
            return true;
        },
        isInResult(index) {
            if (this.initialized) {
                return this.result.indexOf(index) !== -1 ? true : false;
            }
            return true;
        },
        isNoResult() {
            if (this.initialized === false) return false;
            return this.result.length === 0 ? true : false;
        },
        isFiltered() {
            return this.result.length !== this.index.length ? true : false;
        },
    };
};
