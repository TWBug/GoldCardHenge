function handleResize() {
    const navigationScrollHeight = document.getElementById('navigationScroll').offsetHeight
    document.documentElement.style.setProperty('--navigationScroll', `${navigationScrollHeight}px`)
    
    const vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
}
