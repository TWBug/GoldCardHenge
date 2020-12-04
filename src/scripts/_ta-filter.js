window.taFilter = function () {
    return {
        initialized: false,
        filter: '',
        index: [],
        result: [],
        init() {
            this.fetchData();
            this.$watch('filter', (value) => {
                if (value.length === 0) {
                    return this.resetResult()
                }
                this.findContent();
            });
        },
        fetchData() {
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
            console.info('result', result);
            this.result = result;
        },
        resetResult() {
            var result = []
            for (let index = 0; index < this.index.length; index++) {
                result.push(index)
            }
            console.info('result', result);
            this.result = result
            return true
        },
        isInResult(index) {
            console.info('index', index);
            if (this.initialized) {
                return this.result.indexOf(index) === -1 ? false : true
            }
            return true
        }
    };
};
