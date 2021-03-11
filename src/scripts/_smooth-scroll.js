function smoothScroll() {
    const links = document.querySelectorAll(".copy a[href^='#']");
    for (const link of links) {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            var href = e.target.getAttribute('href');
            href = `[id="${href.substr(1)}"]`;

            var scrollNavHeight = document.documentElement.style.getPropertyValue(
                '--navigationScroll'
            );
            scrollNavHeight = parseInt(
                scrollNavHeight.substring(0, scrollNavHeight.indexOf('px'))
            );
            if (scrollNavHeight < 40) {
                scrollNavHeight = 75;
            }

            const bodyRect = document.body.getBoundingClientRect();
            const elemRect = document.querySelector(href).getBoundingClientRect();
            const offsetTop = elemRect.top - bodyRect.top + scrollNavHeight - 20;
            scroll({
                top: parseInt(offsetTop),
                behavior: 'smooth',
            });
        });
    }
}
