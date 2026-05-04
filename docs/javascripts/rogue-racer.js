function rogueRacerPage() {
    const page = document.querySelector('.rogue-racer-page');
    const logo = document.getElementById('rogue-racer-logo-float');
    const bg = document.querySelector('.rogue-racer-bg');
    if (!page || !logo || !bg) return;

    function onScroll() {
        const progress = Math.max(0, Math.min(1, window.scrollY / 240));
        const scale = 1 - progress;
        const opacity = 1 - progress;

        const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
        const pageProgress = Math.max(0, Math.min(1, window.scrollY / maxScroll));
        const bgStartY = 20;
        const bgEndY = 80;
        const bgY = bgStartY + (bgEndY - bgStartY) * pageProgress;

        page.style.setProperty('--rr-logo-scale', scale.toFixed(3));
        page.style.setProperty('--rr-logo-opacity', opacity.toFixed(3));
        bg.style.setProperty('--rr-bg-y', `${bgY.toFixed(2)}%`);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    onScroll();
}

rogueRacerPage();