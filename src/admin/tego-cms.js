/** @jsx window.h */

/**
 * This file is for customizing netlify CMS.
 * NOTE: Netlify CMS exposes React.createElement as window.h
 */

// 在此自訂CMS
///
// Helper Functions
//

// Parse a property string of the form: `title="How to apply" key="value"`. In
// other words, JSX-style properties. Hugo shortcodes use the same property
// format.

const Props = {
    fromString: (str) => {
        const result = {};

        // Turn string into a flat list of keys and values. Exmaple:
        // `title="How to apply" link="url.com" image="/file.jpg"`
        // => ["title", "How to apply", "link", "url.com", "image", "/file.jpg"]
        const xs = s
            .split(/(.+?)="(.+?)"/) // NOTE: We count on double quotes, NOT single
            .filter(Boolean)
            .map((x) => x.trim());

        // NOTE: This is iteration by two. See structure of xs for reasoning
        for (let i = 0; i < kvs.length - 1; i += 2) {
            const k = xs[i];
            const v = xs[i + 1];
            result[k] = v;
        }

        return result;
    },
    toString: (obj) => {
        const result = [];
        for (const [k, v] of Object.entries(obj)) {
            result.push(`${k}="${v}"`);
        }
        return result.join(' ');
    },

    // Escape strings which will be used within a property value. Example:
    // escape('some "quoted" text') => 'some \"\"quoted text'
    // NOTE: str could be undefined
    escape: (str = '') => {
        return str.replace(/"/g, '\\"');
    },
    unescape: (str = '') => {
        return str.replace(/\\"/g, '"');
    },
};

let _config = null;

// The CMS doesn't seem to expose this for us... so we'll just grab it ourselves
// NOTE: There is currently no event listener to make it easier to use the config directly.
fetch('config.yml')
    .then((x) => x.text())
    .then((x) => jsyaml.load(x))
    .then((x) => {
        _config = x;
        window._config = x;
    });

const $ = (sel) => {
    return document.querySelector(sel);
};

// 目前沒在用，本來覺得我們可能會需要等待render後
// 200毫秒
// 10秒
var pollFor = (sel, fn, interval = 200, timeout = 10000) => {
    let timedOut = false;
    const t = setTimeout(() => {
        timedOut = true;
    }, timeout);
    var attempt = () => {
        if (timedOut) {
            console.warn('找不到... ' + sel);
            return;
        }

        if ($(sel)) {
            clearTimeout(t);
            fn($(sel));
        } else {
            setTimeout(attempt, interval);
        }
    };

    // 第一次執行
    attempt();
};

/// Register custom widgets
//

const I18nKeyValueWidget = {
    name: 'i18n-key-value-pairs',
};

// Unfortunately we do not control serialization. However, objects and arrays
// and primatives both map to yaml without surprises, so we might be able to get
// this to work. The question is, how can we get it to modify the top-level
// file, rather than a key within the file?

// NOTE Netlify CMS uses Immutable.js but doesn't seem to expose it. Rather than
// importing a second copy, we grab the constructor from a known existing map.
var CategoriesControl = createClass({
    handleChange: function (e) {
        const ImmutableMap = this.props.collection.constructor; // See NOTE
        const separator = this.props.field.get('separator', ', ');
        this.props.onChange(ImmutableMap(JSON.parse(e.target.value)));
    },

    render: function () {
        const separator = this.props.field.get('separator', ', ');
        var value = this.props.value;
        const str = value ? JSON.stringify(value.toJS(), null, 2) : '';
        return (
            <textarea
                style={{ whiteSpace: 'pre' }}
                id={this.props.forID}
                className={this.props.classNameWrapper}
                type="text"
                value={str}
                onChange={this.handleChange}
            />
        );
        // return (
        //     <input
        //         id={this.props.forID}
        //         className={this.props.classNameWrapper}
        //         type="text"
        //         value={value ? (value.get ? value.get('k') : value.k) : ''}
        //         onChange={this.handleChange}
        //     />
        // )
        // return h('input', {
        //     id: this.props.forID,
        //     className: this.props.classNameWrapper,
        //     type: 'text',
        //     value: value ? (value.get ? value.get('k') : value.k) : '',
        //     onChange: this.handleChange,
        // })
    },
});

// THIS will be rendered in the preview window of the browser
var CategoriesPreview = createClass({
    render: function () {
        return h('ul', {}, this.props.value && this.props.value.toJS().toString());
    },
});

// This is ... what? The properties allows passing options to the react
// component as this.props.field.get('key_name'), but what have that on the
// `properties` sub object then?
var schema = {
    properties: {
        separator: { type: 'string' },
    },
};

// NOTE: This widget is just for testing out the API, not actually part of the product
CMS.registerWidget('categories', CategoriesControl, CategoriesPreview, schema);

const InlineMarkdownControl = createClass({
    handleChange(e) {
        this.props.onChange(e.target.value);
    },

    render() {
        return (
            <div>
                <p>Hey there</p>
                <input
                    type="text"
                    // value={this.props.value}
                    id={this.props.forID}
                    className={this.props.classNameWrapper}
                    // onChange={this.handleChange}
                />
            </div>
        );
    },
});

const InlineMarkdownPreview = createClass({
    render() {
        return <p>{this.props.value}</p>;
    },
});

// Like a text component, but hopefully doesn't ruin everyone's day by snapping
// the cursor to the end of the line.
CMS.registerWidget('inline-markdown', InlineMarkdownControl, InlineMarkdownPreview, { properties: {} });

/// Configure CMS
//

const zh = CMS.getLocale('zh_Hant');
if (true /* TODO: What should be the check for zh user lang? */) {
    CMS.registerLocale('zh', zh);
    CMS.registerLocale('zh_Hant', zh);
}

const comp = () => {
    return <div>Hey there you</div>;
};

CMS.registerEditorComponent({
    id: 'quote',
    label: 'Quote',
    fields: [
        {
            name: 'body',
            label: 'Quote Text',
            widget: 'markdown',
        },
    ],

    // NOTE: It's EXTREMELY(!) important that the pattern begins with ^,
    // otherwise shortcode patterns will conflict with each other. See:
    // https://github.com/netlify/netlify-cms/issues/3328#issuecomment-591234910
    pattern: /^{{< quote >}}\n([\s\S]+?)\n{{< \/quote >}}/,

    // Given the match object for the above regex, return the relevant data shape
    fromBlock: function (match) {
        return {
            body: match[1],
        };
    },

    // Serialize to Hugo shortcode for placement in markdown doc
    toBlock: function (obj) {
        return `{{< quote >}}\n${obj.body || ''}\n{{< /quote >}}`;
    },

    // NOTE The css for these will not be meaningful without a preview css file loaded
    toPreview: function (obj) {
        return (
            <div className="border-t-2 border-b-2 border-secondary border-dashed font-medium text-secondary text-center italic -ml-4 -mr-4 mb-12 mt-8 py-4 px-8">
                {obj.body}
            </div>
        );
    },
});

CMS.registerEditorComponent({
    id: 'teaser',
    label: 'Teaser',
    fields: [{ name: 'body', label: 'Teaser Text', widget: 'markdown' }],
    pattern: /^{{< teaser >}}\n([\s\S]+?)\n{{< \/teaser >}}/,
    fromBlock: (match) => ({ body: match[1] }),
    toBlock: (obj) => {
        return `{{< teaser >}}\n${obj.body || ''}\n{{< /teaser >}}`;
    },
    toPreview: (obj) => <div className="font-medium text-xl leading-relaxed mb-6">{obj.body}</div>,
});
CMS.registerEditorComponent({
    id: 'accordion',
    label: 'Accordion',
    fields: [
        { name: 'title', label: 'Title', widget: 'string' },
        { name: 't2', label: 'Inline Markdown', widget: 'inline-markdown' },
        { name: 'body', label: 'Inner Text', widget: 'markdown' },
    ],
    pattern: /^{{< accordion title="(.+?)" t2="(.+?)" >}}\n([\s\S]+?)\n{{< \/accordion >}}/,
    fromBlock: (match) => ({ title: Props.unescape(match[1]), t2: match[2], body: match[3] }),
    toBlock: (obj) => {
        return `{{< accordion title="${Props.escape(obj.title)}" >}}\n${obj.body || ''}\n{{< /accordion >}}`;
    },
    toPreview: (obj) => {
        // NOTE: The use of syntax incompatible with react requires using a string for this
        const __html = `
            <div class="flex items-center justify-between">
                <h3 class="text-xl font-bold">${obj.title}</h3>
                <button type="button" @click.prevent="toggle()" class="text-primary">
                    <span x-show="show"> ▲ </span>
                </button>
            </div>
            <div
                class="-mb-2"
                x-cloak
                x-show="show"
                x-transition:enter="transition transform ease-out duration-200"
                x-transition:enter-start="opacity-0 -translate-y-5"
                x-transition:enter-end="opacity-100"
                x-transition:leave="transition transform ease-in duration-100"
                x-transition:leave-start="opacity-100"
                x-transition:leave-end="opacity-0 -translate-y-5"
            >
                <p class="text-base font-regular">${obj.body}</p>
            </div>
        `;
        return (
            <div
                class="my-12 border-t-2 border-b-2 border-secondary border-dashed -ml-4 -mr-4 p-4"
                x-data="taAccordion()"
                dangerouslySetInnerHTML={{ __html }}
            ></div>
        );
    },
});
CMS.registerEditorComponent({
    id: 'card',
    label: 'Card',
    fields: [
        { name: 'title', label: 'Title', widget: 'string' },
        { name: 'link', label: 'Link', widget: 'string', required: false },
        { name: 'image', label: 'Image', widget: 'image', required: false },
        { name: 'body', label: 'Text', widget: 'markdown' },
    ],
    pattern: /^{{< card title="(.+)" link="(.*)" image="(.*)" >}}\n([\s\S]+?)\n{{< \/card >}}/,
    fromBlock: (match) => {
        return { title: match[1], link: match[2], image: match[3], body: match[4] };
    },
    toBlock: (obj) => {
        return `{{< card title="${obj.title}" link="${obj.link || ''}" image="${obj.image || ''}" >}}\n${
            obj.body || ''
        }\n{{< /card >}}`;
    },
    toPreview: (obj) => (
        <div className="inline-block w-1/2">
            <a
                href={obj.link || '#'}
                className="flex flex-col justify-center items-center text-center border-2 border-gray-500 rounded-lg overflow-hidden shadow-xl mr-8 mb-8 transition duration-300 transform hover:scale-105"
            >
                <div className="relative w-full min-h-32">
                    <img
                        src={obj.image || '/img/image-not-defined.png'}
                        className="block absolute inset-0 w-full h-full object-cover"
                    />
                </div>
                <div className="px-6 pt-4">
                    <h2 className="text-xl font-bold text-primary mb-1">{obj.title}</h2>
                    <p className="text-center text-md font-regular">{obj.body}</p>
                </div>
            </a>
        </div>
    ),
});

// Register our custom styles
CMS.registerPreviewStyle('/css/wysiwyg.css');
