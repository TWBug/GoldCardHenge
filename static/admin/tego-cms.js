/**
 * This file is for customizing netlify CMS.
 */

// 在此自訂CMS
;(function () {
    ///
    // Helper Functions

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
})()
