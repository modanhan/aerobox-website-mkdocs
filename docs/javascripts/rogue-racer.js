function rogueRacerPage() {
    const page = document.querySelector('.rogue-racer-page');
    const bg = document.querySelector('.rogue-racer-bg');
    if (!page || !bg) return;

    const revealTargets = Array.from(document.querySelectorAll('.rr-reveal'));
    if ('IntersectionObserver' in window && revealTargets.length > 0) {
        const observer = new IntersectionObserver((entries, io) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('is-visible');
                io.unobserve(entry.target);
            });
        }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });

        revealTargets.forEach((el) => observer.observe(el));
    } else {
        revealTargets.forEach((el) => el.classList.add('is-visible'));
    }

    function onScroll() {
        const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
        const progress = Math.max(0, Math.min(1, window.scrollY / maxScroll));
        const bgShift = progress * 40;
        bg.style.setProperty('--rr-bg-shift', `${bgShift.toFixed(2)}px`);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    onScroll();
}

rogueRacerPage();