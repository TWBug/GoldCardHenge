"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
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

var Props = {
  // Given keyword args parse them into an object. This is (currently) for the
  // inner arguments to a shortcode,
  // Ex: `name="hey" title="wee"` => { name: "hey", title: "wee" }
  fromString: function fromString(str, shouldDecode) {
    var result = {};
    var dec = shouldDecode ? decodeURIComponent : function (x) {
      return x;
    };

    // Turn string into a flat list of keys and values. Exmaple:
    // `title="How to apply" link="url.com" image="/file.jpg"`
    // => ["title", "How to apply", "link", "url.com", "image", "/file.jpg"]
    var xs = str.split(/(.+?)="(.+?)"/) // NOTE: We count on double quotes, NOT single
    .filter(Boolean).map(function (x) {
      return x.trim();
    });

    // NOTE: This is iteration by two. See structure of xs for reasoning
    for (var i = 0; i < xs.length - 1; i += 2) {
      var k = xs[i];
      var v = xs[i + 1];
      result[k] = dec(v);
    }
    return result;
  },
  toString: function toString(obj) {
    var shouldEncode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var result = [];
    var enc = shouldEncode ? encodeURIComponent : function (x) {
      return x;
    };
    for (var _i = 0, _Object$entries = Object.entries(obj); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        k = _Object$entries$_i[0],
        v = _Object$entries$_i[1];
      result.push("".concat(k, "=\"").concat(enc(v), "\""));
    }
    return result.join(' ');
  },
  // Escape strings which will be used within a property value. Example:
  // escape('some "quoted" text') => 'some \"\"quoted text'
  // NOTE: str could be undefined
  escape: function escape() {
    var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    return str.replace(/"/g, '\\"');
  },
  unescape: function unescape() {
    var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    return str.replace(/\\"/g, '"');
  }
};
var $ = function $(sel) {
  return document.querySelector(sel);
};

// 目前沒在用，本來覺得我們可能會需要等待render後
// 200毫秒
// 10秒
var pollFor = function pollFor(sel, fn) {
  var interval = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 200;
  var timeout = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 10000;
  var timedOut = false;
  var t = setTimeout(function () {
    timedOut = true;
  }, timeout);
  var attempt = function attempt() {
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

var I18nKeyValueWidget = {
  name: 'i18n-key-value-pairs'
};

// Unfortunately we do not control serialization. However, objects and arrays
// and primatives both map to yaml without surprises, so we might be able to get
// this to work. The question is, how can we get it to modify the top-level
// file, rather than a key within the file?

// NOTE Netlify CMS uses Immutable.js but doesn't seem to expose it. Rather than
// importing a second copy, we grab the constructor from a known existing map.
var CategoriesControl = createClass({
  handleChange: function handleChange(e) {
    var ImmutableMap = this.props.collection.constructor; // See NOTE
    var separator = this.props.field.get('separator', ', ');
    this.props.onChange(ImmutableMap(JSON.parse(e.target.value)));
  },
  render: function render() {
    var separator = this.props.field.get('separator', ', ');
    var value = this.props.value;
    var str = value ? JSON.stringify(value.toJS(), null, 2) : '';
    return window.h("textarea", {
      style: {
        whiteSpace: 'pre'
      },
      id: this.props.forID,
      className: this.props.classNameWrapper,
      type: "text",
      value: str,
      onChange: this.handleChange
    });
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
  }
});

// THIS will be rendered in the preview window of the browser
var CategoriesPreview = createClass({
  render: function render() {
    return h('ul', {}, this.props.value && this.props.value.toJS().toString());
  }
});

// This is ... what? The properties allows passing options to the react
// component as this.props.field.get('key_name'), but what have that on the
// `properties` sub object then?
var schema = {
  properties: {
    separator: {
      type: 'string'
    }
  }
};

// NOTE: This widget is just for testing out the API, not actually part of the product
CMS.registerWidget('categories', CategoriesControl, CategoriesPreview, schema);
var NestedStringControl = createClass({
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
  componentDidUpdate: function componentDidUpdate() {
    if (this._el && this._el.selectionStart !== this._sel) {
      this._el.setSelectionRange(this._sel, this._sel);
    }
  },
  // Update selection so that we can reinstate it after update
  handleChange: function handleChange(e) {
    this._sel = e.target.selectionStart;
    this.props.onChange(e.target.value);
  },
  render: function render() {
    var _this = this;
    console.log('PROPS', this.props);
    var isTextarea = this.props.field.get('textarea', false);
    var FieldComponent = isTextarea ? 'textarea' : 'input';
    var innerProps = isTextarea ? {
      style: {
        fontFamily: 'sans-serif' // For some reason text areas are getting monospace by default...
      }
    } : {
      type: 'text'
    };
    return window.h("div", null, window.h(FieldComponent, _extends({
      ref: function ref(el) {
        _this._el = el;
      },
      value: this.props.value,
      id: this.props.forID,
      className: this.props.classNameWrapper,
      onChange: this.handleChange
    }, innerProps)));
  }
});
var NestedStringPreview = createClass({
  render: function render() {
    return window.h("p", null, this.props.value);
  }
});

// Like a text component, but hopefully doesn't ruin everyone's day by snapping
// the cursor to the end of the line.
CMS.registerWidget('nested-string', NestedStringControl, NestedStringPreview, {
  properties: {
    textarea: {
      type: 'boolean'
    }
  }
});

// NOTE: The point of limiting string lenght is Netlify's build process. They
// disallow filenames that are too long. To get around this, we're simply
// disallowing the creation of titles that are too long and will instead use a
// different field for the display title.
var MaxLengthString = createClass({
  isValid: function isValid() {
    var maxLength = this.props.field.get('maxLength', 200);

    // ERROR!
    // See NOTE
    if (this.props.value.length > maxLength) {
      return {
        error: {
          message: "\u904E\u5EA6\u9577 Must be shorter than ".concat(maxLength)
        }
      };
    }
    return true;
  },
  handleChange: function handleChange(e) {
    this.props.onChange(e.target.value);
  },
  render: function render() {
    return window.h("input", {
      id: this.props.forID,
      className: this.props.classNameWrapper,
      type: "text",
      value: this.props.value,
      onChange: this.handleChange
    });
  }
});

// NOTE: We're going to use the same nested string preview here since the previw
// should just be a normal string. THe point of this widget is to limit the max
// length, not to do anything with presentation.
CMS.registerWidget('max-length-string', MaxLengthString, NestedStringPreview, {
  properties: {
    maxLength: {
      type: 'number'
    }
  }
});

/// Configure CMS
//

CMS.registerEditorComponent({
  id: 'quote',
  label: 'Quote',
  fields: [{
    name: 'body',
    label: 'Quote Text',
    widget: 'markdown'
  }],
  // NOTE: It's EXTREMELY(!) important that the pattern begins with ^,
  // otherwise shortcode patterns will conflict with each other. See:
  // https://github.com/netlify/netlify-cms/issues/3328#issuecomment-591234910
  pattern: /^{{< quote >}}\n?([\s\S]+?)\n?{{< \/quote >}}/,
  // Given the match object for the above regex, return the relevant data shape
  fromBlock: function fromBlock(match) {
    return {
      body: match[1]
    };
  },
  // Serialize to Hugo shortcode for placement in markdown doc
  toBlock: function toBlock(obj) {
    return "{{< quote >}}\n".concat(obj.body || '', "\n{{< /quote >}}");
  },
  // NOTE The css for these will not be meaningful without a preview css file loaded
  toPreview: function toPreview(obj) {
    return window.h("div", {
      className: "border-t-2 border-b-2 border-secondary border-dashed font-medium text-secondary text-center italic -ml-4 -mr-4 mb-12 mt-8 py-4 px-8"
    }, obj.body);
  }
});
CMS.registerEditorComponent({
  id: 'teaser',
  label: 'Teaser',
  fields: [{
    name: 'prefix',
    label: 'Prefix 字首',
    widget: 'nested-string',
    required: false
  }, {
    name: 'body',
    label: 'Teaser Text',
    widget: 'markdown'
  }],
  pattern: /^{{< teaser prefix="(.*?)" >}}\n?([\s\S]+?)\n?{{< \/teaser >}}/,
  fromBlock: function fromBlock(match) {
    return {
      prefix: match[1],
      body: match[2]
    };
  },
  toBlock: function toBlock(obj) {
    return "{{< teaser prefix=\"".concat(Props.escape(obj.prefix), "\" >}}\n").concat(obj.body || '', "\n{{< /teaser >}}");
  },
  toPreview: function toPreview(obj) {
    return window.h("div", {
      className: "font-medium text-xl leading-relaxed mb-6"
    }, obj.prefix, " ", obj.body);
  }
});
CMS.registerEditorComponent({
  id: 'accordion',
  label: 'Accordion 折疊選單',
  fields: [{
    name: 'title',
    label: 'Title 標題',
    widget: 'nested-string'
  },
  // NOTE: This is called suffix so as not to disrupt the data, but as of
  // this commit its actually displayed as a prefix in the output HTML.
  {
    name: 'suffix',
    label: 'Prefix 號碼',
    widget: 'nested-string',
    required: false
  }, {
    name: 'bottomless',
    label: 'Bottomless 無底',
    widget: 'boolean',
    "default": false
  }, {
    name: 'body',
    label: 'Inner Text 內容',
    widget: 'markdown',
    textarea: true
  }],
  pattern: /^{{< accordion title="(.*?)" suffix="(.*?)" bottomless="(.*?)" >}}\n?([\s\S]+?)\n?{{< \/accordion >}}/,
  fromBlock: function fromBlock(match) {
    return {
      title: Props.unescape(match[1]),
      suffix: Props.unescape(match[2]),
      bottomless: Props.unescape(match[3]),
      body: match[4]
    };
  },
  toBlock: function toBlock(obj) {
    return "{{< accordion title=\"".concat(Props.escape(obj.title), "\" suffix=\"").concat(Props.escape(obj.suffix), "\" bottomless=\"").concat(obj.bottomless ? 'true' : 'false', "\" >}}\n").concat(obj.body || '', "\n{{< /accordion >}}");
  },
  toPreview: function toPreview(obj) {
    // NOTE: The use of syntax incompatible with react requires using a string for this
    var __html = "\n            <div class=\"flex items-center justify-between\">\n                <h3 class=\"text-xl font-bold\">".concat(obj.title, "</h3>\n                <button type=\"button\" @click.prevent=\"toggle()\" class=\"text-primary\">\n                    <span x-show=\"show\"> \u25B2 </span>\n                </button>\n            </div>\n            <div\n                class=\"-mb-2\"\n                x-cloak\n                x-show=\"show\"\n                x-transition:enter=\"transition transform ease-out duration-200\"\n                x-transition:enter-start=\"opacity-0 -translate-y-5\"\n                x-transition:enter-end=\"opacity-100\"\n                x-transition:leave=\"transition transform ease-in duration-100\"\n                x-transition:leave-start=\"opacity-100\"\n                x-transition:leave-end=\"opacity-0 -translate-y-5\"\n            >\n                <p class=\"text-base font-regular\">").concat(obj.body, "</p>\n            </div>\n        ");
    var borderClass = 'my-12 border-t-2 border-b-2 border-secondary border-dashed -ml-4 -mr-4 p-4';
    if (obj.bottomless === 'true') {
      borderClass = 'my-12 border-t-2 border-secondary border-dashed -ml-4 -mr-4 p-4';
    }
    console.info('bottomless', obj.bottomless);
    console.info('borderClass', borderClass);
    return window.h("div", {
      "class": borderClass,
      "x-data": "taAccordion()",
      dangerouslySetInnerHTML: {
        __html: __html
      }
    });
  }
});
CMS.registerEditorComponent({
  id: 'action',
  label: 'Action',
  fields: [{
    name: 'headline',
    label: 'Title',
    widget: 'nested-string'
  }, {
    name: 'href',
    label: 'Link',
    widget: 'nested-string',
    required: true
  }, {
    name: 'blank',
    label: 'New window 標題',
    widget: 'boolean',
    "default": false
  }, {
    name: 'button',
    label: 'Button',
    widget: 'nested-string',
    required: true
  }, {
    name: 'body',
    label: 'Text',
    widget: 'markdown'
  }],
  pattern: /^{{< action headline="(.+)" href="(.*)" blank="(.*)" button="(.*)" >}}\n?([\s\S]+?)\n?{{< \/action >}}/,
  fromBlock: function fromBlock(match) {
    return {
      headline: match[1],
      href: match[2],
      blank: match[3],
      button: match[4],
      body: match[5]
    };
  },
  toBlock: function toBlock(obj) {
    return "{{< action headline=\"".concat(obj.headline, "\" href=\"").concat(obj.href || '', "\" blank=\"").concat(obj.blank ? 'true' : 'false', "\" button=\"").concat(obj.button, "\" >}}\n").concat(obj.body || '', "\n{{< /action >}}");
  },
  toPreview: function toPreview(obj) {
    return window.h("div", {
      className: "relative bg-secondary-medium bg-gradient-to-b from-secondary-light to-secondary-medium rounded-md shadow-xl text-white -ml-4 -mr-4 mb-12 mt-8 p-8 sm:p-12 z-0 overflow-hidden"
    }, window.h("div", {
      "class": "text-4xl font-regular text-center"
    }, obj.headline), window.h("div", {
      "class": "grid grid-cols-1 sm:grid-cols-3 items-center gap-8 sm:gap-12 mt-8"
    }, window.h("div", {
      "class": "sm:col-span-2 font-semibold text-center sm:text-right"
    }, obj.body), window.h("div", {
      "class": "text-center"
    }, window.h("a", {
      href: obj.href,
      "class": "inline-block whitespace-no-wrap bg-primary font-bold text-white leading-none rounded-md shadow-xl px-6 py-4",
      target: "_blank"
    }, obj.button))));
  }
});
CMS.registerEditorComponent({
  id: 'file-download',
  label: 'File 檔案',
  fields: [{
    name: 'title',
    label: 'Title',
    widget: 'nested-string'
  }, {
    name: 'path',
    label: 'File',
    widget: 'file'
  }],
  pattern: /^{{< file-download title="(.+?)" path="(.*?)" >}}/,
  fromBlock: function fromBlock(match) {
    return {
      title: match[1],
      path: match[2]
    };
  },
  toBlock: function toBlock(obj) {
    return "{{< file-download title=\"".concat(obj.title, "\" path=\"").concat(obj.path, "\" >}}");
  },
  toPreview: function toPreview(obj) {
    return window.h("div", {
      "class": "my-6 -ml-2"
    }, window.h("a", {
      href: obj.path,
      className: "inline-flex items-center text-primary font-bold text-xl focus-primary hover:text-black p-2"
    }, window.h("span", {
      "class": "ml-2"
    }, obj.title)));
  }
});
CMS.registerEditorComponent({
  id: 'card',
  label: 'Card',
  fields: [{
    name: 'title',
    label: 'Title',
    widget: 'nested-string'
  }, {
    name: 'link',
    label: 'Link',
    widget: 'nested-string',
    required: false
  }, {
    name: 'image',
    label: 'Image',
    widget: 'image',
    required: false
  }, {
    name: 'body',
    label: 'Text',
    widget: 'markdown'
  }],
  pattern: /^{{< card title="(.+)" link="(.*)" image="(.*)" >}}\n?([\s\S]+?)\n?{{< \/card >}}/,
  fromBlock: function fromBlock(match) {
    return {
      title: match[1],
      link: match[2],
      image: match[3],
      body: match[4]
    };
  },
  toBlock: function toBlock(obj) {
    return "{{< card title=\"".concat(obj.title, "\" link=\"").concat(obj.link || '', "\" image=\"").concat(obj.image || '', "\" >}}\n").concat(obj.body || '', "\n{{< /card >}}");
  },
  toPreview: function toPreview(obj) {
    return window.h("div", {
      className: "inline-block w-1/2"
    }, window.h("a", {
      href: obj.link || '#',
      className: "flex flex-col justify-center items-center text-center border-2 border-gray-500 rounded-lg overflow-hidden shadow-xl mr-8 mb-8 transition duration-300 transform hover:scale-105"
    }, window.h("div", {
      className: "relative w-full min-h-32"
    }, window.h("img", {
      src: obj.image || '/img/image-not-defined.png',
      className: "block absolute inset-0 w-full h-full object-cover"
    })), window.h("div", {
      className: "px-6 pt-4"
    }, window.h("h2", {
      className: "text-xl font-bold text-primary mb-1"
    }, obj.title), window.h("p", {
      className: "text-center text-md font-regular"
    }, obj.body))));
  }
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
  fields: [{
    name: 'title',
    label: 'Title',
    widget: 'nested-string'
  }, {
    name: 'body',
    label: 'Text',
    widget: 'markdown'
  }],
  pattern: /^{{< note title="(.+)" >}}\n?([\s\S]+?)\n?{{< \/note >}}/,
  fromBlock: function fromBlock(match) {
    return {
      title: match[1],
      body: match[2]
    };
  },
  toBlock: function toBlock(obj) {
    return "{{< note title=\"".concat(obj.title, "\" >}}\n").concat(obj.body || '', '\n{{< /note >}}');
  },
  toPreview: function toPreview(obj) {
    return window.h("div", {
      className: "my-6"
    }, window.h("div", {
      "class": "text-lg font-bold text-secondary border-b-2 border-dashed border-secondary border-opacity-50 pl-1"
    }, obj.title), window.h("div", {
      "class": " border-l-2 border-dashed border-secondary border-opacity-50 font-medium leading-relaxed text-md text-left italic pl-4 pt-3"
    }, obj.body));
  }
});
CMS.registerEditorComponent({
  id: 'message',
  label: 'Message 顏色',
  fields: [{
    name: 'style',
    label: 'Style 文字顏色',
    widget: 'select',
    options: ['warning', 'help', 'info', 'danger'],
    required: false
  }, {
    name: 'body',
    label: 'Text',
    widget: 'markdown'
  }],
  pattern: /^{{< message style="(.*)" >}}\n?([\s\S]+?)\n?{{< \/message >}}/,
  fromBlock: function fromBlock(match) {
    return {
      style: match[1],
      body: match[2]
    };
  },
  toBlock: function toBlock(obj) {
    return "{{< message style=\"".concat(obj.style, "\" >}}\n").concat(obj.body || '', '\n{{< /message >}}');
  },
  toPreview: function toPreview(obj) {
    var styleClassNames = 'text-red-800 font-medium leading-relaxed text-md text-left italic pl-2 py-4';
    switch (obj.style) {
      case 'warning':
        styleClassNames = 'text-yellow-700 font-medium leading-relaxed text-md text-left italic pl-2 py-4';
        break;
      case 'help':
        styleClassNames = 'text-blue-900 font-medium leading-relaxed text-md text-left italic pl-2 py-4';
        break;
      case 'info':
        styleClassNames = 'text-blue-900 font-medium leading-relaxed text-md text-left italic pl-2 py-4';
        break;
    }
    return window.h("div", {
      className: "my-6"
    }, window.h("div", {
      className: "".concat(styleClassNames)
    }, obj.body));
  }
});
CMS.registerEditorComponent({
  id: 'base',
  label: 'Base 顏色',
  fields: [{
    name: 'body',
    label: 'Text',
    widget: 'markdown'
  }],
  pattern: /^{{< base >}}\n?([\s\S]+?)\n?{{< \/base >}}/,
  fromBlock: function fromBlock(match) {
    return {
      body: match[1]
    };
  },
  toBlock: function toBlock(obj) {
    return '{{< base >}}\n'.concat(obj.body || '', '\n{{< /base >}}');
  },
  toPreview: function toPreview(obj) {
    return window.h('div', {
      className: 'border-2 border-dashed border-secondary border-opacity-75 rounded-xl font-semibold text-secondary text-left italic my-6 px-6 py-4'
    }, obj.body);
  }
});
CMS.registerEditorComponent({
  id: 'color',
  label: 'Color 顏色',
  fields: [{
    name: 'color',
    label: 'Text Color 文字顏色',
    widget: 'select',
    options: ['red', 'green', 'orange', 'yellow', 'teal', 'blue', 'indigo', 'purple', 'pink'],
    required: false
  }, {
    name: 'body',
    label: 'Text',
    widget: 'markdown'
  }],
  pattern: /^{{< color color="(.*?)" >}}\n?([\s\S]+?)\n?{{< \/color >}}/,
  fromBlock: function fromBlock(match) {
    return {
      color: match[1],
      body: match[2]
    };
  },
  toBlock: function toBlock(obj) {
    return "{{< color color=\"".concat(obj.color || '', "\" >}}\n").concat(obj.body || '', "\n{{< /color >}}");
  },
  toPreview: function toPreview(obj) {
    return window.h("p", {
      className: "text-".concat(obj.color, "-700")
    }, obj.body);
  }
});
CMS.registerEditorComponent({
  id: 'gallery',
  label: 'Gallery 畫廊',
  fields: [{
    label: 'Teaser',
    name: 'teaser',
    widget: 'string',
    required: false,
    "default": ''
  }, {
    name: 'images',
    label: 'Images',
    widget: 'list',
    summary: '{{alt}} -> {{src}}',
    fields: [{
      label: 'Image',
      name: 'src',
      widget: 'image'
    }, {
      label: 'Title',
      name: 'title',
      widget: 'string',
      required: false
    }, {
      label: 'Alt',
      name: 'alt',
      widget: 'string',
      required: false
    }, {
      label: 'Description',
      name: 'description',
      widget: 'string',
      // NOTE: For now, having newlines in the description would be troublesome
      required: false
    }]
  }],
  pattern: /^{{< gallery (.*?)\s?>}}\n?([\s\S]+?)\n?{{< \/gallery >}}/,
  fromBlock: function fromBlock(match) {
    var re = /^{{< gallery-image (.+)\s*>}}/; // @note Do NOT use the `g` flag while matching with regex. Will fail, JS quirk.
    var fromGalleryImageShortcode = function fromGalleryImageShortcode(s) {
      try {
        var kwargs = s.match(re)[1];
        return Props.fromString(kwargs);
      } catch (err) {
        console.warn('[WARN!] Unhandled inner gallery string', s);
        return null;
      }
    };
    var props = Props.fromString(match[1] || '');
    var innerText = match[2] || '';
    var images = innerText.split('\n').map(fromGalleryImageShortcode).filter(Boolean);
    return _objectSpread(_objectSpread({}, props), {}, {
      images: images
    });
  },
  toBlock: function toBlock(obj) {
    var teaser = obj.teaser,
      _obj$images = obj.images,
      images = _obj$images === void 0 ? [] : _obj$images;
    var serializeImageShortcodes = function serializeImageShortcodes(images) {
      return images.map(function (x) {
        return '{{< gallery-image ' + Props.toString(x) + ' >}}';
      }).join('\n');
    };
    return "{{< gallery ".concat(Props.toString({
      teaser: teaser
    }), " >}}\n") + serializeImageShortcodes(images) + '\n{{< /gallery >}}';
  },
  toPreview: function toPreview(obj) {
    return '<h1>Gallery</h1>';
  }
});
CMS.registerEditorComponent({
  id: 'helpdesk-from',
  label: 'Helpdesk Form 求助表格',
  fields: [],
  pattern: /^{{< form >}}/,
  fromBlock: function fromBlock() {
    return {};
  },
  toBlock: function toBlock(obj) {
    return '{{< form >}}';
  },
  toPreview: function toPreview(obj) {
    return window.h("p", {
      className: "text-".concat(obj.color, "-700 p-4 border border-gray-300 bg-gray-200")
    }, "HELPDESK FORM");
  }
});
CMS.registerEditorComponent({
  id: 'separator',
  label: 'Separator 分隔線',
  fields: [],
  pattern: /^{{< separate >}}/,
  fromBlock: function fromBlock() {
    return {};
  },
  toBlock: function toBlock(obj) {
    return '{{< separate >}}';
  },
  toPreview: function toPreview(obj) {
    return window.h("div", {
      className: "separate separate-top h-6 -ml-2 -mr-2"
    });
  }
});
CMS.registerEditorComponent({
  id: 'youtube',
  label: 'Youtube',
  fields: [{
    name: 'id',
    label: 'Youtube Video ID'
  }],
  pattern: /^{{<\s?youtube (\S+)\s?>}}/,
  fromBlock: function fromBlock(match) {
    return {
      id: match[1]
    };
  },
  toBlock: function toBlock(obj) {
    return '{{< youtube ' + obj.id + ' >}}';
  },
  toPreview: function toPreview(obj) {
    return '<img src="http://img.youtube.com/vi/' + obj.id + '/maxresdefault.jpg" alt="Youtube Video"/>';
  }
});

// Register our custom styles
CMS.registerPreviewStyle('/css/wysiwyg.min.css');
var zh = CMS.getLocale('zh_Hant');
CMS.registerLocale('zh', zh);
CMS.registerLocale('zh_Hant', zh);

// NOTE: The main website stores the user's locale on this key, so the way to
// change the locale is via the main website, not via the CMS interface.
var locale = 'en';
try {
  var storedLocale = localStorage.getItem('language'); // See NOTE
  if (storedLocale) {
    locale = storedLocale;
  } else {
    locale = window.navigator.language.split('-')[0];
  }
} catch (err) {
  console.warn('[WARN] Could not set CMS locale due to error:', err);
}

// The CMS doesn't seem to expose this for us... so we'll just grab it ourselves
// NOTE: There is currently no event listener to make it easier to use the config directly.
fetch('config.yml').then(function (x) {
  return x.text();
}).then(function (x) {
  return jsyaml.load(x);
}).then(function (x) {
  x.locale = locale;
  if (locale !== 'en') {
    console.info('[INFO] 以中文為主');
    x.i18n = _objectSpread(_objectSpread({}, x.i18n), {}, {
      locales: ['zh', 'en'],
      default_locale: 'zh'
    });
  }
  var config = _objectSpread(_objectSpread({}, x), {}, {
    load_config_file: false
  });

  // Init the CMS
  // NOTE: This works because we set window.CMS_MANUAL_INIT before the CMS file
  // was loaded.
  window.cmsConfig = config;
  window.initCMS({
    config: config
  });
});