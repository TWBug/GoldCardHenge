function handleResize() {
    // get the scroll navigations height and store it in a css custom propperty
    var navigationScroll = document.getElementById('navigationScroll');
    var navigationScrollHeight = 0;
    if (navigationScroll !== null) {
        navigationScrollHeight = navigationScroll.offsetHeight;
    }
    if (navigationScrollHeight === 0) {
        navigationScrollHeight = 58;
    }
    document.documentElement.style.setProperty('--navigationScroll', `${navigationScrollHeight}px`);

    const w_aspect = Math.round((window.innerWidth / window.innerHeight) * 100) / 100;
    var home_hero = 'calc(var(--vh) * 75)';
    if (window.innerWidth < 1024) {
        home_hero = 'calc(var(--vh) * 100)';
    } else {
        if (w_aspect > 1.64) {
            home_hero = 'calc(var(--vh) * 100)';
        } else if (w_aspect < 1.2) {
            home_hero = 'calc(var(--vh) * 50)';
        }
    }
    document.documentElement.style.setProperty('--homeHero', `${home_hero}`);

    // view port height fix for mobile browsers
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}
