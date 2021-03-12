window.highlight = {
    wrapper: {},
    replace: function () {
        this.wrapper = document.getElementsByClassName('replace');
        if (this.wrapper === 0) {
            return false;
        }
        for (let index = 0; index < this.wrapper.length; index++) {
            if (typeof this.wrapper[index] === 'undefined') {
                continue;
            }
            this.replaceInDocument(
                this.wrapper[index],
                /Gold Card/g,
                '<span class="font-bold">Gold Card</span>'
            );
            this.replaceInDocument(
                this.wrapper[index],
                /金卡/g,
                '<span class="font-bold">金卡</span>'
            );
        }
        this.wrapper = this.wrapper[0];
    },
    replaceInDocument: function (wrapper, pattern, string) {
        [wrapper, ...wrapper.querySelectorAll('*:not(script):not(noscript):not(style)')].forEach(
            ({ childNodes: [...nodes] }) =>
                nodes
                    .filter(({ nodeType }) => {
                        return nodeType === document.ELEMENT_NODE;
                    })
                    .forEach((textNode) => {
                        if (textNode.classList.contains('nohighlight')) {
                            return;
                        }
                        if (textNode.innerHTML.substr(0, 1) === '<') {
                            return;
                        }
                        if (textNode.innerHTML.indexOf(string) !== -1) {
                            return;
                        }
                        if (
                            [
                                'OPTION',
                                'SELECT',
                                'path',
                                'INPUT',
                                'TEXTAREA',
                                'animateTransform',
                            ].indexOf(textNode.nodeName) !== -1
                        ) {
                            return;
                        }
                        textNode.innerHTML = textNode.innerHTML.replace(pattern, string);
                    })
        );
    },
};
