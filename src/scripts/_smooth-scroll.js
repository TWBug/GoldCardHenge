function smoothScroll() {
    const links = document.querySelectorAll("#tableofcontents a[href^='#']")
    for (const link of links) {
        link.addEventListener('click', (e) => {
            e.preventDefault()
            const href = e.target.getAttribute('href')
            const scrollNavHeight = document.documentElement.style.getPropertyValue('--navigationScroll')
            const offsetTop = document.querySelector(href).offsetTop + parseInt(scrollNavHeight.substring(0, scrollNavHeight.indexOf('px')))
            scroll({
                top: offsetTop,
                behavior: "smooth"
              });
        })
    }
}
