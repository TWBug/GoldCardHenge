window.linksTargetBlank = {
    wrapper: {},
    replace: function () {
        this.wrapper = document.getElementsByClassName('replace')
        if (this.wrapper === 0) {
            return false
        }
        this.wrapper = this.wrapper[0]
        if (typeof this.wrapper === 'undefined') {
            return false
        }
        this.wrapper.querySelectorAll('a').forEach((node) => {
            const files = ['pdf', 'doc', 'txt', 'docx']
            const last_dot = node.href.lastIndexOf('.') + 1
            const suffix = node.href.substring(last_dot, node.href.length)
            if (files.indexOf(suffix) === -1) {
                return false
            }
            node.setAttribute('target', '_blank')
        })
    }
}
