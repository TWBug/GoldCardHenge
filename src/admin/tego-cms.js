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
