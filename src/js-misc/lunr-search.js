const { assert } = console;

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

window.el = el;

let lunrIndex, $results, pagesIndex;

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
        $results.appendChild(
            el(
                'div',
                {},
                el(
                    'h1',
                    {
                        style: 'padding:10px;font-size:36px;text-align:center;',
                    },
                    `No resulst for "${query}"`
                )
            )
        );
        return;
    }

    console.log('Rendering results', results);

    const excerptSize = 300;

    // Only show the ten first results
    const links = results.slice(0, 10).map((x) => {
        const matchIndex = x.content.indexOf(query);

        // The "excerpt" is a bit of text with a span highlighting the search
        // text. That's what all this logic is for.
        const excerpt =
            matchIndex === -1
                ? [x.content.slice(0, excerptSize), '...']
                : [
                      x.content.slice(Math.max(0, matchIndex - excerptSize / 2), matchIndex),
                      el('span', {}, query),
                      x.content.slice(matchIndex + query.length, matchIndex + excerptSize / 2),
                  ];
        return el(
            'a',
            {
                href: x.href,
            },
            el('h4', {}, x.title),
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
        .then((x) => x.json())
        .then((index) => {
            pagesIndex = index;

            // Set up lunrjs by declaring the fields we use
            // Also provide their boost level for the ranking
            lunrIndex = lunr(function () {
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
            console.error('Error getting Hugo index file:', err.message);
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
/* TODO: These temp styles will likely be removed later */
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

    const $input = document.querySelector('#search-box');

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
}

// Let's get started
initLunr();

document.addEventListener('DOMContentLoaded', initUI);
