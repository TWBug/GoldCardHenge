window.highlight = {
    wrapper: {},
    replace: function () {
        this.wrapper = document.getElementsByClassName('copy')
        if (this.wrapper === 0) {
            return false
        }
        this.wrapper = this.wrapper[0]
        this.replaceInDocument(
            /Taiwan Gold Card/g,
            '<span class="font-bold text-black">Taiwan <span class="text-highlight">Gold Card</span></span>'
        )
        this.replaceInDocument(
            /Gold Card/g,
            '<span class="font-bold text-black"><span class="text-highlight">Gold Card</span></span>'
        )
        this.replaceInDocument(
            /Gold-Card/g,
            '<span class="font-bold text-black"><span class="text-highlight">Gold Card</span></span>'
        )
    },
    replaceInDocument: function (pattern, string) {
        ;[this.wrapper, ...this.wrapper.querySelectorAll('*:not(script):not(noscript):not(style)')].forEach(
            ({ childNodes: [...nodes] }) =>
                nodes
                    .filter(({ nodeType }) => nodeType === document.ELEMENT_NODE)
                    .forEach((textNode) => {
                        textNode.innerHTML = textNode.innerHTML.replace(pattern, string)
                    })
        )
    },
}
