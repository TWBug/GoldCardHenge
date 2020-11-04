window.highlight = {
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
        this.replaceInDocument(
            /Taiwan Gold Card/g,
            '<span class="font-bold text-black">Taiwan <span class="highlight">Gold Card</span></span>'
        )
        // this.replaceInDocument(
        //     /Gold Card/g,
        //     '<span class="tinline-block bg-highlight text-black rounded-md px-2">Gold Card</span>'
        // )
        // this.replaceInDocument(
        //     /Gold-Card/g,
        //     '<span class="inline-block bg-highlight text-black rounded-md px-2">Gold Card</span>'
        // )
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
