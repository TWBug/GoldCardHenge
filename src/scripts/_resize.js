function handleResize() {
    
    // get the scroll navigations height and store it in a css custom propperty
    var navigationScrollHeight = document.getElementById('navigationScroll').offsetHeight
    if (navigationScrollHeight === 0) {
        navigationScrollHeight = 58
    }
    document.documentElement.style.setProperty('--navigationScroll', `${navigationScrollHeight}px`)
    
    // view port height fix for mobile browsers
    const vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
    
}
