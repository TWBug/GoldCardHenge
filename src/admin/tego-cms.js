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

const NestedStringControl = createClass({
    // The selection to maintain for the input element
    _sel: 0,

    // The input element ref
    _el: null,

    // NOTE: This prevents the cursor from jumping to the end of the text for
    // nested inputs. In other words, this is not an issue on top-level text
    // fields such as the `title` of a collection post. However, it becomes an
    // issue on fields nested within other components, namely widgets nested
    // within a `markdown` widget. For example, the alt text on a block image
    // within markdown.
    // SEE: https://github.com/netlify/netlify-cms/issues/4539
    // SEE: https://github.com/netlify/netlify-cms/issues/3578
    // SEE: https://github.com/netlify/netlify-cms/pull/4607
    componentDidUpdate() {
        if (this._el && this._el.selectionStart !== this._sel) {
            this._el.setSelectionRange(this._sel, this._sel);
        }
    },

    // Update selection so that we can reinstate it after update
    handleChange(e) {
        this._sel = e.target.selectionStart;
        this.props.onChange(e.target.value);
    },

    render() {
        return (
            <div>
                {/* NOTE: This can be augmented with markdown controls if needed */}
                <input
                    ref={(el) => {
                        this._el = el;
                    }}
                    type="text"
                    value={this.props.value}
                    id={this.props.forID}
                    className={this.props.classNameWrapper}
                    onChange={this.handleChange}
                />
            </div>
        );
    },
});

const NestedStringPreview = createClass({
    render() {
        return <p>{this.props.value}</p>;
    },
});

// Like a text component, but hopefully doesn't ruin everyone's day by snapping
// the cursor to the end of the line.
CMS.registerWidget('nested-string', NestedStringControl, NestedStringPreview, { properties: {} });

// NOTE: The point of limiting string lenght is Netlify's build process. They
// disallow filenames that are too long. To get around this, we're simply
// disallowing the creation of titles that are too long and will instead use a
// different field for the display title.
const MaxLengthString = createClass({
    isValid() {
        const maxLength = this.props.field.get('maxLength', 200);

        // ERROR!
        // See NOTE
        if (this.props.value.length > maxLength) {
            return { error: { message: `過度長 Must be shorter than ${maxLength}` } };
        }

        return true;
    },

    handleChange(e) {
        this.props.onChange(e.target.value);
    },

    render() {
        return (
            <input
                id={this.props.forID}
                className={this.props.classNameWrapper}
                type="text"
                value={this.props.value}
                onChange={this.handleChange}
            />
        );
    },
});

// NOTE: We're going to use the same nested string preview here since the previw
// should just be a normal string. THe point of this widget is to limit the max
// length, not to do anything with presentation.
CMS.registerWidget('max-length-string', MaxLengthString, NestedStringPreview, {
    properties: {
        maxLength: { type: 'number' },
    },
});

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
        { name: 'title', label: 'Title 標題', widget: 'nested-string' },
        { name: 'suffix', label: 'Suffix 標題', widget: 'nested-string', required: false },
        { name: 'bottomless', label: 'Bottomless 標題', widget: 'boolean', default: false },
        { name: 'body', label: 'Inner Text 內容', widget: 'text' },
    ],
    pattern: /^{{< accordion title="(.+?)" suffix="(.+?)" bottemless="(.+?)" >}}\n([\s\S]+?)\n{{< \/accordion >}}/,
    fromBlock: (match) => ({
        title: Props.unescape(match[1]),
        suffix: Props.unescape(match[2]),
        bottemless: Props.unescape(match[3]),
        body: match[4],
    }),
    toBlock: (obj) => {
        return `{{< accordion title="${Props.escape(obj.title)}" suffix="${Props.escape(
            obj.suffix
        )}" bottomless="${obj.bottomless ? 'true' : 'false'}" >}}\n${
            obj.body || ''
        }\n{{< /accordion >}}`;
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
        let borderClass =
            'my-12 border-t-2 border-b-2 border-secondary border-dashed -ml-4 -mr-4 p-4';
        if (obj.bottemless === 'true') {
            borderClass = 'my-12 border-t-2 border-secondary border-dashed -ml-4 -mr-4 p-4';
        }
        console.info('bottemless', obj.bottemless);
        console.info('borderClass', borderClass);
        return (
            <div
                class={borderClass}
                x-data="taAccordion()"
                dangerouslySetInnerHTML={{ __html }}
            ></div>
        );
    },
});

CMS.registerEditorComponent({
    id: 'action',
    label: 'Action',
    fields: [
        { name: 'headline', label: 'Title', widget: 'nested-string' },
        { name: 'href', label: 'Link', widget: 'nested-string', required: true },
        { name: 'blank', label: 'New window 標題', widget: 'boolean', default: false },
        { name: 'button', label: 'Button', widget: 'nested-string', required: true },
        { name: 'body', label: 'Text', widget: 'markdown' },
    ],
    pattern: /^{{< action headline="(.+)" href="(.*)" blank="(.*)" button="(.*)" >}}\n([\s\S]+?)\n{{< \/action >}}/,
    fromBlock: (match) => {
        return {
            headline: match[1],
            href: match[2],
            blank: match[3],
            button: match[4],
            body: match[5],
        };
    },
    toBlock: (obj) => {
        return `{{< action headline="${obj.headline}" href="${obj.href || ''}" blank="${
            obj.blank ? 'true' : 'false'
        }" button="${obj.button}" >}}\n${obj.body || ''}\n{{< /action >}}`;
    },
    toPreview: (obj) => (
        <div className="relative bg-secondary-medium bg-gradient-to-b from-secondary-light to-secondary-medium rounded-md shadow-xl text-white -ml-4 -mr-4 mb-12 mt-8 p-8 sm:p-12 z-0 overflow-hidden">
            <div class="text-4xl font-regular text-center">{obj.headline}</div>
            <div class="grid grid-cols-1 sm:grid-cols-3 items-center gap-8 sm:gap-12 mt-8">
                <div class="sm:col-span-2 font-semibold text-center sm:text-right">{obj.body}</div>
                <div class="text-center">
                    <a
                        href={obj.href}
                        class="inline-block whitespace-no-wrap bg-primary font-bold text-white leading-none rounded-md shadow-xl px-6 py-4"
                        target="_blank"
                    >
                        {obj.button}
                    </a>
                </div>
            </div>
        </div>
    ),
});

CMS.registerEditorComponent({
    id: 'file-download',
    label: 'File download',
    fields: [
        { name: 'title', label: 'Title', widget: 'nested-string' },
        { name: 'path', label: 'File', widget: 'file' },
    ],
    pattern: /^{{< file-download title="(.+?)" path="(.*?)" >}}/,
    fromBlock: (match) => {
        return { title: match[1], path: match[2] };
    },
    toBlock: (obj) => {
        return `{{< file-download title="${obj.title}" path="${obj.path}" >}}`;
    },
    toPreview: (obj) => (
        <div class="my-6 -ml-2">
            <a
                href={obj.path}
                className="inline-flex items-center text-primary font-bold text-xl focus-primary hover:text-black p-2"
            >
                <span class="ml-2">{obj.title}</span>
            </a>
        </div>
    ),
});

CMS.registerEditorComponent({
    id: 'card',
    label: 'Card',
    fields: [
        { name: 'title', label: 'Title', widget: 'nested-string' },
        { name: 'link', label: 'Link', widget: 'nested-string', required: false },
        { name: 'image', label: 'Image', widget: 'image', required: false },
        { name: 'body', label: 'Text', widget: 'markdown' },
    ],
    pattern: /^{{< card title="(.+)" link="(.*)" image="(.*)" >}}\n([\s\S]+?)\n{{< \/card >}}/,
    fromBlock: (match) => {
        return { title: match[1], link: match[2], image: match[3], body: match[4] };
    },
    toBlock: (obj) => {
        return `{{< card title="${obj.title}" link="${obj.link || ''}" image="${
            obj.image || ''
        }" >}}\n${obj.body || ''}\n{{< /card >}}`;
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

// CMS.registerEditorComponent({
//     id: 'color-block',
//     label: 'Color 顏色',
//     fields: [
//         { name: 'fg', label: 'Foreground 前景', widget: 'color', enableAlpha: true, required: false },
//         { name: 'bg', label: 'Background 背景', widget: 'color', enableAlpha: true, required: false },
//         { name: 'body', label: 'Text', widget: 'markdown' },
//     ],
//     pattern: /^{{< color-block fg="(.*?)" bg="(.*?)" >}}\n([\s\S]+?)\n{{< \/color-block >}}/,
//     fromBlock: (match) => {
//         return { fg: match[1], bg: match[2], body: match[3] };
//     },
//     toBlock: (obj) => {
//         return `{{< color-block fg="${obj.fg || ''}" bg="${obj.bg || ''}" >}}\n${obj.body || ''}\n{{< /color-block >}}`;
//     },
//     toPreview: (obj) => {
//         const style = {};
//         if (obj.fg) style.color = obj.fg;
//         if (obj.bg) style.backgroundColor = obj.bg;
//         return <div style={style}>{obj.body}</div>;
//     },
// });

CMS.registerEditorComponent({
    id: 'note',
    label: 'Note 顏色',
    fields: [
        { name: 'title', label: 'Title', widget: 'nested-string' },
        {
            name: 'body',
            label: 'Text',
            widget: 'markdown',
        },
    ],
    pattern: /^{{< note title="(.+)" >}}\n([\s\S]+?)\n{{< \/note >}}/,
    fromBlock: function fromBlock(match) {
        return {
            title: match[1],
            body: match[2],
        };
    },
    toBlock: function toBlock(obj) {
        return `{{< note title="${obj.title}" >}}\n`.concat(obj.body || '', '\n{{< /note >}}');
    },
    toPreview: (obj) => (
        <div className="my-6">
            <div class="text-lg font-bold text-secondary border-b-2 border-dashed border-secondary border-opacity-50 pl-1">
                {obj.title}
            </div>
            <div class=" border-l-2 border-dashed border-secondary border-opacity-50 font-medium leading-relaxed text-md text-left italic pl-4 pt-3">
                {obj.body}
            </div>
        </div>
    ),
});

CMS.registerEditorComponent({
    id: 'message',
    label: 'Message 顏色',
    fields: [
        {
            name: 'style',
            label: 'Style 文字顏色',
            widget: 'select',
            options: ['warning', 'help', 'info', 'danger'],
            required: false,
        },
        {
            name: 'body',
            label: 'Text',
            widget: 'markdown',
        },
    ],
    pattern: /^{{< message style="(.+)" >}}\n([\s\S]+?)\n{{< \/message >}}/,
    fromBlock: function fromBlock(match) {
        return {
            style: match[1],
            body: match[2],
        };
    },
    toBlock: function toBlock(obj) {
        return `{{< message style="${obj.style}" >}}\n`.concat(
            obj.body || '',
            '\n{{< /message >}}'
        );
    },
    toPreview: (obj) => {
        let styleClassNames =
            'text-red-800 font-medium leading-relaxed text-md text-left italic pl-2 py-4';
        switch (obj.style) {
            case 'warning':
                styleClassNames =
                    'text-yellow-700 font-medium leading-relaxed text-md text-left italic pl-2 py-4';
                break;
            case 'help':
                styleClassNames =
                    'text-blue-900 font-medium leading-relaxed text-md text-left italic pl-2 py-4';
                break;
            case 'info':
                styleClassNames =
                    'text-blue-900 font-medium leading-relaxed text-md text-left italic pl-2 py-4';
                break;
        }
        return (
            <div className="my-6">
                <div className={`${styleClassNames}`}>{obj.body}</div>
            </div>
        );
    },
});

CMS.registerEditorComponent({
    id: 'base',
    label: 'Base 顏色',
    fields: [
        {
            name: 'body',
            label: 'Text',
            widget: 'markdown',
        },
    ],
    pattern: /^{{< base >}}\n([\s\S]+?)\n{{< \/base >}}/,
    fromBlock: function fromBlock(match) {
        return {
            body: match[1],
        };
    },
    toBlock: function toBlock(obj) {
        return '{{< base >}}\n'.concat(obj.body || '', '\n{{< /base >}}');
    },
    toPreview: function toPreview(obj) {
        return window.h(
            'div',
            {
                className:
                    'border-2 border-dashed border-secondary border-opacity-75 rounded-xl font-semibold text-secondary text-left italic my-6 px-6 py-4',
            },
            obj.body
        );
    },
});

CMS.registerEditorComponent({
    id: 'color',
    label: 'Color 顏色',
    fields: [
        {
            name: 'color',
            label: 'Text Color 文字顏色',
            widget: 'select',
            options: [
                'red',
                'green',
                'orange',
                'yellow',
                'teal',
                'blue',
                'indigo',
                'purple',
                'pink',
            ],
            required: false,
        },
        { name: 'body', label: 'Text', widget: 'markdown' },
    ],
    pattern: /^{{< color color="(.*?)" >}}\n([\s\S]+?)\n{{< \/color >}}/,
    fromBlock: (match) => {
        return { color: match[1], body: match[2] };
    },
    toBlock: (obj) => {
        return `{{< color color="${obj.color || ''}" >}}\n${obj.body || ''}\n{{< /color >}}`;
    },
    toPreview: (obj) => <p className={`text-${obj.color}-700`}>{obj.body}</p>,
});

CMS.registerEditorComponent({
    id: 'youtube',
    label: 'Youtube',
    fields: [{ name: 'id', label: 'Youtube Video ID' }],
    pattern: /^{{<\s?youtube (\S+)\s?>}}/,
    fromBlock: (match) => {
        return { id: match[1] };
    },
    toBlock: (obj) => {
        return '{{< youtube ' + obj.id + ' >}}';
    },
    toPreview: (obj) => {
        return (
            '<img src="http://img.youtube.com/vi/' +
            obj.id +
            '/maxresdefault.jpg" alt="Youtube Video"/>'
        );
    },
});

// Register our custom styles
CMS.registerPreviewStyle('/css/wysiwyg.min.css');
