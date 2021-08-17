const { assert } = console;

assert(window.lunr, 'Lunr.js not found. Search cannot be supported without Lunr.js.');

const isChineseUI = window.location.pathname.startsWith('/zh/');

function escapeJSONSpecialChars(str) {
    return String(str).replace(/[\b\f\n\r\t]/g, function (char) {
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

// This lovely regex initially came from here: https://github.com/stkevintan/hugo-lunr-zh#readme
const hasChineseCharacters = (str) => /[\u4E00-\u9FA5\uF900-\uFA2D]/.test(str);

const el = (tagName, props = {}, ...children) => {
    const node = document.createElement(tagName);

    for (const [k, v] of Object.entries(props)) {
        // Attach event listeners directly
        if (typeof v === 'function') {
            node[k] = v;
        } else {
            node.setAttribute(k, v);
        }
    }

    for (const child of children) {
        const c = typeof child === 'string' ? document.createTextNode(child) : child;
        node.appendChild(c);
    }

    return node;
};

let lunrIndex, $results, pagesIndex;

// Set up support for chinese
lunr.zh = function () {
    this.pipeline.reset();
    this.pipeline.add(lunr.zh.trimmer, lunr.stopWordFilter, lunr.stemmer);
};

lunr.zh.trimmer = function (token) {
    return token.update((str) => {
        if (hasChineseCharacters(str)) return str;
        return str.replace(/^\W+/, '').replace(/\W+$/, '');
    });
};

lunr.Pipeline.registerFunction(lunr.zh.trimmer, 'trimmer-zh');

/**
 * Trigger a search in lunr and transform the result
 *
 * @param  {String} query
 * @return {Array}  results
 */
const search = (query) => {
    // Find the item in our index corresponding to the lunr one to have more info
    // Lunr result:
    //  {ref: "/section/page1", score: 0.2725657778206127}
    // Our result:
    //  {title:"Page1", href:"/section/page1", ...}
    return lunrIndex.search(query).map((result) => {
        return pagesIndex.find((page) => {
            return page.href === result.ref;
        });
    });
};

/**
 * Display the 10 first results
 *
 * @param  {Array} results to display
 */
const renderResults = (results, query) => {
    // Clear any existing results
    emptyEl($results);

    if (!results.length) {
        const msg = isChineseUI ? `找不到結果` : `No results found for "${query}"`;

        const children = [
            el('h1', { style: 'padding:10px;font-size:36px;text-align:center;' }, msg),
        ];

        // If this is the english UI but the user searches in chinese
        if (!isChineseUI && hasChineseCharacters(query)) {
            children.push(
                el(
                    'p',
                    { class: 'text-center' },
                    '想用中文搜尋嗎？',
                    el(
                        'a',
                        {
                            href: '/zh/',
                            class: 'inline-block px-2 py-3 mx-1 text-blue-700 underline',
                            title: 'Change Language',
                            onclick: (e) => {
                                e.preventDefault();
                                window.taLanguage().switchLanguage('zh');
                            },
                        },
                        '點此處來換成中文'
                    )
                )
            );
        }

        $results.appendChild(el('div', {}, ...children));
        return;
    }

    console.log('Rendering results', results);

    const excerptSize = 300;

    // For indexing purposes the Chinese entries included spaced chinese words,
    // which is very unnatural fo reading. So we strip the spaces out for
    // display.
    const stripSpaces = (str) => {
        return str.replace(/ +/g, '');
    };

    // Only show the ten first results
    const links = results.slice(0, 10).map((x) => {
        const title = isChineseUI ? stripSpaces(x.title) : x.title;
        const content = isChineseUI ? stripSpaces(x.content) : x.content;
        const matchIndex = content.indexOf(query);

        // The "excerpt" is a bit of text with a span highlighting the search
        // text. That's what all this logic is for.
        const excerpt = x.summary
            ? [x.summary] // Default to the manually-created summary if present
            : matchIndex === -1
            ? [content.slice(0, excerptSize)]
            : [
                  content.slice(Math.max(0, matchIndex - excerptSize / 2), matchIndex),
                  el('span', {}, query),
                  content.slice(matchIndex + query.length, matchIndex + excerptSize / 2),
              ];

        // Add "..." if the excerpt was chopped (i.e. most of the time)
        if (excerpt.length < content.length) {
            excerpt.push('…');
        }

        return el(
            'a',
            {
                href: x.href,
            },
            el('h4', {}, title),
            el('p', {}, ...excerpt)
        );
    });
    $results.appendChild(el('div', { class: 'search-result-list' }, ...links));
};

// Initialize lunrjs using our generated index file
const initLunr = () => {
    console.log('[INFO] 啟動Lunr搜尋引擎');
    // First retrieve the index file
    fetch('/lunr_index.json')
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
            pagesIndex = index;

            // Set up lunrjs by declaring the fields we use
            // Also provide their boost level for the ranking
            lunrIndex = lunr(function () {
                if (isChineseUI) {
                    console.log('[INFO] 中文頁面，開啟Lunr中文支援');
                    this.use(lunr.zh); // Set up Chinese support
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
                for (const page of pagesIndex) {
                    this.add(page);
                }
            });

            // TOOD: Remove this later
            window.lunrIndex = lunrIndex;
        })
        .catch((err) => {
            console.error('Error getting Hugo index file:', err);
        });
};

const emptyEl = (elt) => {
    for (const child of elt.children) {
        elt.removeChild(child);
    }
};

// Nothing crazy here, just hook up a listener on the input field
function initUI() {
    console.log('[INFO] 啟動搜尋介面');
    $results = el('div', { id: 'search-results' });

    const styles = el(
        'style',
        {},
        `
#search-results {
  position: absolute;
  top: 40px; /* The height of the upper header */
  left: 10%;
  right: 10%;
  z-index: 11;
  box-shadow: 0 0 15px rgba(0,0,0,0.6);
  background: white;
  border-radius: 0 0 3px 3px;
}
@media screen and (max-width: 1024px) {
    #search-results {
        top: 130px;
    }
}
.search-result-list a h4 {
  font-weight: bold;
}
.search-result-list a span {
  background: gold;
  padding: 2px 4px;
  display: inline;
}
.search-result-list a {
  padding:10px;
  display:block;
}
.search-result-list a:hover {
  color: navy;
  background: gold;
}
.search-result-list a:last-child {
  border-radius: 0 0 3px 3px;
}
    `.trim()
    );

    document.head.appendChild(styles);
    document.body.appendChild($results);

    const $inputs = [].slice.call(document.querySelectorAll('.search-box'));

    // Attach search handler to all search boxes.
    $inputs.forEach(($input) => {
        $input.addEventListener('keyup', (e) => {
            const query = e.target.value;
            if (query.length < 2) {
                emptyEl($results);
                return;
            }
            var results = search(query);

            // Try to avoid stutters by putting this in a raf
            requestAnimationFrame(() => {
                renderResults(results, query);
            });
        });
    });
}

// Let's get started
initLunr();

document.addEventListener('DOMContentLoaded', initUI);
