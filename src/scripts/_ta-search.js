let __shouldDebug = false;

function escapeJSONSpecialChars(str) {
    return String(str)
        .replace(/\\+&/gim, '') // Replace malformed ampersand escape sequences. See https://github.com/tego-tech/www/blob/9ce5e41a68db437d883aa47d43ece14633a0ef8e/content/why-taiwan/taiwan%E2%80%99s-offshore-islands-tourist-attractions.en.md#L22-L23
        .replace(/[\b\f\n\r\t]/g, function (char) {
            switch (char) {
                case '\b': // backspace
                    return '\\b';
                case '\f': // formfeed
                    return '\\f';
                case '\n': // newline
                    return '\\n';
                case '\r': // carriage return
                    return '\\r';
                case '\t': // tab
                    return '\\t';
                default:
                    console.warn('Unhandled special character', char);
                    return char;
            }
        });
}

window.taSearchDebug = (activated = true) => {
    __shouldDebug = activated;
    localStorage.setItem('@@TEGO_DBG', activated);
};

window.taSearch = function () {
    try {
        __shouldDebug = localStorage.getItem('@@TEGO_DBG') === 'true';
    } catch (err) {
        console.warn('Could not init debugger.');
    }

    const shouldUseChinese = window.location.pathname.startsWith('/zh/');

    const dbg = (...args) => {
        if (__shouldDebug) {
            console.info('[TA-SEARCH]', ...args);
        }
    };

    // not needed min length defined in the template
    // var is_chinese_ui = window.location.pathname.startsWith('/zh/');
    const searcher = {
        initialized: false,
        visible: false,
        query: '',
        // is_chinese_ui: false,
        has_chinese_characters: false,
        result: [],
        active: -1,
        trigger: '',
        is_dirty: false,
        is_enough: false,
        is_empty: true,
        has_results: false,
        excerpt_length: 200,
        // not needed min length defined in the template
        // minimum_length: is_chinese_ui ? 2 : 3,
        highlight: true,
        highlight_style: 'font-weight:bold;',
        options: {
            file: '',
            excerpt_length: 200,
            minimum_length: 3,
        },
        init(options = {}) {
            if (typeof options !== 'undefined') {
                if (typeof options !== 'object' || options instanceof Array) {
                    console.warn(
                        'Options are in wrong type - should be object - options been used'
                    );
                }
                for (let [key, value] of Object.entries(options)) {
                    this.options[key] = value;
                }
            }

            // checks if options are defined by data
            for (let [key, value] of Object.entries(this.$el.dataset)) {
                if (typeof this.options[key] !== 'undefined') {
                    if (isNaN(value)) {
                        this.options[key] = value;
                    } else {
                        this.options[key] = parseInt(value);
                    }
                }
            }

            const { assert } = console;
            assert(window.lunr, 'Lunr.js not found. Search cannot be supported without Lunr.js.');

            // not needed min length defined in the template
            // this.is_chinese_ui = is_chinese_ui;

            this.loadIndex();
            this.initLunr();

            this.$watch('visible', (value) => {
                if (value === true) {
                    setTimeout(() => {
                        this.$refs.input.focus();
                    }, 300);
                }
            });
            window.addEventListener('ta-search-show', (event) => {
                this.visible = true;
                this.trigger = event.detail;
                setTimeout(() => {
                    this.$refs.input.focus();
                }, 300);
            });

            this.$watch('query', (value) => {
                this.query = value.replace(/(<([^>]+)>)/gi, '');
                if (this.query.length === 0) {
                    this.reset();
                    return;
                }
                this.is_empty = false;
                if (this.query.length < this.options.minimum_length) {
                    this.reset(false);
                    return;
                }
                this.is_enough = true;
                this.is_dirty = true;
                this.search(this.query);
            });
        },
        reset(query = true) {
            this.result = [];
            this.has_results = false;
            this.is_enough = false;
            this.active = -1;
            this.is_dirty = false;
            if (query === true) {
                this.$refs.input.focus();
                this.is_empty = true;
                this.query = '';
            }
        },
        up() {
            if (this.active > 0) {
                this.active -= 1;
            }
        },
        down() {
            if (this.active < this.result.length - 1) {
                this.active += 1;
            }
        },
        enter() {
            if (this.active === -1 && this.result.length === 0) {
                return false;
            }
            const url = this.result[this.active].href;
            location.href = url;
        },
        esc() {
            if (this.query.length < 1) {
                this.visible = false;
                this.eventSearchHide();
            }
            this.reset();
        },
        away() {
            if (this.initialized === true && this.visible === true) {
                this.visible = false;
                this.eventSearchHide();
            }
        },
        show(details) {
            this.visible = true;
            this.trigger = details;
            setTimeout(() => {
                this.$refs.input.focus();
            }, 300);
        },
        hide() {
            this.reset(true);
            this.visible = false;
            this.eventSearchHide();
        },
        eventSearchHide() {
            setTimeout(() => {
                const event = new CustomEvent('ta-search-hide', { detail: this.trigger });
                window.dispatchEvent(event);
            }, 300);
        },
        excerpt(string, length = 0) {
            if (length === 0) {
                length = this.options.excerpt_length;
            }
            const string_lower = string.toLowerCase();
            const matchIndex = string_lower.indexOf(this.query.toLowerCase());
            var excerpt = '';
            if (matchIndex === -1) {
                excerpt = string.slice(0, length);
            } else {
                excerpt =
                    string.slice(Math.max(0, matchIndex - length / 2), matchIndex) +
                    string.slice(matchIndex + this.query.length, matchIndex + length / 2);
            }

            if (this.highlight) {
                excerpt = this.replace(excerpt);
            }

            if (excerpt.length < string.length) {
                return excerpt + '…';
            }
            return excerpt;
        },
        replace(string) {
            const query = string.substr(
                string.toLowerCase().indexOf(this.query.toLowerCase()),
                this.query.length
            );
            if (query.length !== this.query.length) {
                return string;
            }
            const regex = new RegExp(this.query, 'gi');
            return string.replaceAll(
                regex,
                '<span style="' + this.highlight_style + '">' + query + '</span>'
            );
        },
        initLunr() {
            // Set up support for chinese
            window.lunr.zh = function () {
                this.pipeline.reset();
                this.pipeline.add(
                    window.lunr.zh.trimmer,
                    window.lunr.stopWordFilter,
                    window.lunr.stemmer
                );
            };
            window.lunr.zh.trimmer = function (token) {
                return token.update((str) => {
                    if (
                        (str) => {
                            /[\u4E00-\u9FA5\uF900-\uFA2D]/.test(str);
                        }
                    )
                        return str;
                    return str.replace(/^\W+/, '').replace(/\W+$/, '');
                });
            };
            window.lunr.Pipeline.registerFunction(lunr.zh.trimmer, 'trimmer-zh');
        },
        loadIndex() {
            dbg('Lunr index loading:', this.$el.dataset.file);

            // First retrieve the index file
            fetch(this.options.file)
                .then((x) => x.text())
                .then((s) => {
                    try {
                        return JSON.parse(s);
                    } catch (err) {
                        console.warn('JSON appears malformed. Trying again with escaping.');
                        return JSON.parse(escapeJSONSpecialChars(s));
                    }
                })
                .then((index) => {
                    window.lunrPages = index;
                    // Set up lunrjs by declaring the fields we use
                    // Also provide their boost level for the ranking
                    window.lunrIndex = window.lunr(function () {
                        dbg('Lunr index loaded');
                        if (shouldUseChinese) {
                            dbg('Lunr chinese mode');
                            this.use(window.lunr.zh); // Set up Chinese support
                        }

                        this.field('title', {
                            boost: 10,
                        });
                        this.field('tags', {
                            boost: 5,
                        });
                        this.field('categories', {
                            boost: 8,
                        });
                        this.field('content');
                        // ref is the result item identifier (I chose the page URL)
                        this.ref('href');

                        // Feed lunr with each file and let lunr actually index them
                        for (const page of window.lunrPages) {
                            this.add(page);
                        }
                    });
                    this.initialized = true;
                })
                .catch((err) => {
                    console.error('Error getting Hugo index file.', err);
                });
        },
        search(query) {
            if (query.length < this.minimum_length) {
                this.reset(false);
                dbg('Query not long enough.');
                return false;
            }

            dbg('Stemmed query', lunrIndex.pipeline.runString(query));

            // @note Search query is built up here
            // Initially we were constructing a query using the `search(string)`
            // approach. This is fine, however, it was giving us issues with the
            // wildcards. Namely, typing an exact term would cause the search
            // results to disappear, because unlike regex a Lunr `*` wildcard
            // tries to match at least one char. So searching "licens" would
            // turn up results for the english word "license" but searching the
            // whole word would result in an empty result set since it was
            // looking for "license_" with at least one character in the place
            // of the underscore. Initial search approach was as follows:
            //     this.result = window.lunrIndex.search('*' + query + '*')
            // To test manually:
            // - "183" -> has results
            // - "183 days" -> has results
            // - "如何" -> has results
            // - "如何申請" -> has results
            // For additional guidance on the query API see this issue: https://github.com/olivernn/lunr.js/issues/256
            let xs = [];
            if (shouldUseChinese) {
                dbg('zh: 中文搜尋 ->', query);
                xs = window.lunrIndex.query((q /* lunr.Query */) => {
                    q.term(query, { usePipeline: true, boost: 100 });
                    q.term(query + '*', { usePipeline: false, boost: 10 });
                    q.term(query, { usePipeline: false, editDistance: 2, boost: 2 });
                    q.term(query);
                });
            } else {
                dbg('en: English search ->', query);
                xs = window.lunrIndex.search(query);
            }

            this.result = xs
                .map((result) => {
                    return window.lunrPages.find((page) => {
                        return page.href === result.ref;
                    });
                })
                .slice(0, 10);

            if (this.result.length > 0) {
                this.has_results = true;
            } else {
                this.has_results = false;
            }

            return this.result;
        },
    };

    window.searcher = searcher;
    return searcher;
};

window.taSearchTrigger = function () {
    return {
        trigger: '',
        show() {
            const event = new CustomEvent('ta-search-show', { detail: this.trigger });
            window.dispatchEvent(event);
        },
        init(trigger) {
            this.trigger = trigger;
            window.addEventListener('ta-search-hide', (event) => {
                if (event.detail === this.trigger) {
                    this.$el.focus();
                }
            });
        },
    };
};
