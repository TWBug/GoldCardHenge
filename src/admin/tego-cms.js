/** @jsx window.h */

/**
 * This file is for customizing netlify CMS.
 * NOTE: Netlify CMS exposes React.createElement as window.h
 */

// 在此自訂CMS
///
// Helper Functions
//

let _config = null

// The CMS doesn't seem to expose this for us... so we'll just grab it ourselves
// NOTE: There is currently no event listener to make it easier to use the config directly.
fetch('config.yml')
    .then((x) => x.text())
    .then((x) => jsyaml.load(x))
    .then((x) => {
        _config = x
        window._config = x
    })

const $ = (sel) => {
    return document.querySelector(sel)
}

// 目前沒在用，本來覺得我們可能會需要等待render後
// 200毫秒
// 10秒
var pollFor = (sel, fn, interval = 200, timeout = 10000) => {
    let timedOut = false
    const t = setTimeout(() => {
        timedOut = true
    }, timeout)
    var attempt = () => {
        if (timedOut) {
            console.warn('找不到... ' + sel)
            return
        }

        if ($(sel)) {
            clearTimeout(t)
            fn($(sel))
        } else {
            setTimeout(attempt, interval)
        }
    }

    // 第一次執行
    attempt()
}

/// Configure CMS
//

const zh = CMS.getLocale('zh_Hant')
if (true /* TODO: What should be the check for zh user lang? */) {
    CMS.registerLocale('zh', zh)
    CMS.registerLocale('zh_Hant', zh)
}

const comp = () => {
    return <div>Hey there you</div>
}

const I18nKeyValueWidget = {
    name: 'i18n-key-value-pairs',
}

// Unfortunately we do not control serialization. However, objects and arrays
// and primatives both map to yaml without surprises, so we might be able to get
// this to work. The question is, how can we get it to modify the top-level
// file, rather than a key within the file?

// NOTE Netlify CMS uses Immutable.js but doesn't seem to expose it. Rather than
// importing a second copy, we grab the constructor from a known existing map.
var CategoriesControl = createClass({
    handleChange: function (e) {
        const ImmutableMap = this.props.collection.constructor // See NOTE
        const separator = this.props.field.get('separator', ', ')
        this.props.onChange(ImmutableMap(JSON.parse(e.target.value)))
    },

    render: function () {
        const separator = this.props.field.get('separator', ', ')
        var value = this.props.value
        const str = value ? JSON.stringify(value.toJS(), null, 2) : ''
        return (
            <textarea
                style={{ whiteSpace: 'pre' }}
                id={this.props.forID}
                className={this.props.classNameWrapper}
                type="text"
                value={str}
                onChange={this.handleChange}
            />
        )
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
})

// THIS will be rendered in the preview window of the browser
var CategoriesPreview = createClass({
    render: function () {
        return h('ul', {}, this.props.value && this.props.value.toJS().toString())
    },
})

// This is ... what? The properties allows passing options to the react
// component as this.props.field.get('key_name'), but what have that on the
// `properties` sub object then?
var schema = {
    properties: {
        separator: { type: 'string' },
    },
}

// NOTE: This widget is just for testing out the API, not actually part of the product
CMS.registerWidget('categories', CategoriesControl, CategoriesPreview, schema)

// TODO: This is just some example code, we will need to modify and create more.
CMS.registerEditorComponent({
    id: 'gist',
    label: 'Gist',
    fields: [
        {
            name: 'username',
            label: 'Github Username',
            widget: 'string',
        },
        {
            name: 'gid',
            label: 'Gist ID',
            widget: 'markdown',
        },
    ],
    pattern: /{{< gist ([a-zA-Z0-9]+) ([a-zA-Z0-9]+) >}}/,
    fromBlock: function (match) {
        return {
            username: match[1],
            gid: match[2],
        }
    },
    toBlock: function (obj) {
        return `{{< gist ${obj.username} >}}\n${obj.gid}\n{{< /gist >}}`
    },
    toPreview: function (obj) {
        return `{{< gist ${obj.username} ${obj.gid} >}}`
    },
})
