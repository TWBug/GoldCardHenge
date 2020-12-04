function smoothScroll() {
    const links = document.querySelectorAll("#tableofcontents a[href^='#'], .copy a[href^='#']")
    console.info('links', links);
    for (const link of links) {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            var href = e.target.getAttribute('href');

            // fix for leading numbers
            // if ( !isNaN(href.substring(1,2))  ) {
            //     href = '#\\3' + href.substr(1)
            // }
            href = `[id="${href.substr(1)}"]`;

            const scrollNavHeight = document.documentElement.style.getPropertyValue('--navigationScroll');
            const offsetTop =
                document.querySelector(href).offsetTop +
                parseInt(scrollNavHeight.substring(0, scrollNavHeight.indexOf('px')));
            scroll({
                top: offsetTop -20,
                behavior: 'smooth',
            });
        })
    }
}
