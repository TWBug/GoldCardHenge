/** @jsx window.h */

/**
 * This file is for customizing netlify CMS.
 * NOTE: Netlify CMS exposes React.createElement as window.h
 */

// 在此自訂CMS
;(function () {
    ///
    // Helper Functions
    //

    var _config = null

    // The CMS doesn't seem to expose this for us... so we'll just grab it ourselves
    // NOTE: There is currently no event listener to make it easier to use the config directly.
    fetch('config.yml')
        .then(function (x) {
            return x.text()
        })
        .then(function (x) {
            return jsyaml.load(x)
        })
        .then(function (x) {
            _config = x
            window._config = x
        })

    var $ = function (sel) {
        return document.querySelector(sel)
    }

    // 目前沒在用，本來覺得我們可能會需要等待render後
    var pollFor = function (sel, fn, interval, timeout) {
        if (interval === undefined) interval = 200 // 200毫秒
        if (timeout === undefined) timeout = 10000 // 10秒
        var timedOut = false
        var t = setTimeout(function () {
            timedOut = true
        }, timeout)
        var attempt = function () {
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
})()
