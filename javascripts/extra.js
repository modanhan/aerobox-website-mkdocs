function mainPage() {
    const _mainPage = document.querySelector('.main-page');
    if (!_mainPage) return;

    const bgSpeed = -0.25; // smaller value = slower background movement
    const charsSpeed = -1.0; // 1.0 = full page scroll speed
    const baseY = 0;

    const bg = document.getElementById('nos-bg');
    const mask = document.getElementById('nos-bg-mask');
    const gradient = document.getElementById('nos-bg-gradient');
    const chars = document.getElementById('nos-chars');
    const glow = document.getElementById('nos-chars-glow');
    const scrollIndicator = document.getElementById('nos-scroll-indicator');
    const root = document.documentElement;
    function onScroll() {
        const bgY = baseY + window.scrollY * bgSpeed;
        const charsY = window.scrollY * charsSpeed + 60;

        root.style.setProperty('--bgY', `${bgY}`);
        root.style.setProperty('--charsY', `${charsY}px`);
        root.style.setProperty('--charsX', `${window.innerWidth / window.innerHeight}`);

        const charsBottom = chars.getBoundingClientRect().bottom;
        const maskTop = Math.max(0, Math.min(window.innerHeight, charsBottom));
        const contentTop = Math.max(0, Math.min(window.innerHeight, charsBottom - window.scrollY * charsSpeed));
        const gradientHeight = 520;
        const gradientTop = maskTop - gradientHeight;
        const gradientOpacity = Math.min(1, window.scrollY / 900);
        const scrollIndicatorOpacity = Math.max(0, 1 - window.scrollY / 180);
        mask.style.top = `${maskTop}px`;
        gradient.style.top = `${gradientTop}px`;
        gradient.style.opacity = gradientOpacity.toFixed(3);
        if (scrollIndicator) {
            scrollIndicator.style.setProperty('--scroll-indicator-opacity', scrollIndicatorOpacity.toFixed(3));
            scrollIndicator.style.pointerEvents = scrollIndicatorOpacity < 0.12 ? 'none' : 'auto';
        }
        root.style.setProperty('--nos-content-offset', `${contentTop - window.innerHeight * 0.5}px`);

    }
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    onScroll();
}
mainPage();