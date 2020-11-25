window.highlight = {
    wrapper: {},
    replace: function () {
        this.wrapper = document.getElementsByClassName('replace')
        if (this.wrapper === 0) {
            return false
        }
        for (let index = 0; index < this.wrapper.length; index++) {
            if (typeof this.wrapper[index] === 'undefined') {
                continue
            }
            this.replaceInDocument(
                this.wrapper[index],
                /Taiwan Gold Card/g,
                '<span class="font-bold">Taiwan<span class="highlight">Gold Card</span></span>'
            );
            this.replaceInDocument(
                this.wrapper[index],
                /台灣就業金卡/g,
                '<span class="font-bold">台灣就業<span class="highlight">金卡</span></span>'
            );
        }
        this.wrapper = this.wrapper[0]
        
        // this.replaceInDocument(
        //     /Taiwan Gold Card/g,
        //     '<span class="font-bold text-black">Taiwan <span class="highlight">Gold Card</span></span>'
        // )
        // this.replaceInDocument(
        //     /Gold Card/g,
        //     '<span class="tinline-block bg-highlight text-black rounded-md px-2">Gold Card</span>'
        // )
        // this.replaceInDocument(
        //     /Gold-Card/g,
        //     '<span class="inline-block bg-highlight text-black rounded-md px-2">Gold Card</span>'
        // )
    },
    replaceInDocument: function (wrapper, pattern, string) {
        ;[wrapper, ...wrapper.querySelectorAll('*:not(script):not(noscript):not(style)')].forEach(
            ({ childNodes: [...nodes] }) =>
                nodes
                    .filter(({ nodeType }) => nodeType === document.ELEMENT_NODE)
                    .forEach((textNode) => {
                        textNode.innerHTML = textNode.innerHTML.replace(pattern, string)
                    })
        )
    },
}
