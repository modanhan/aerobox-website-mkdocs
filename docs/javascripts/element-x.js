function elementXPage() {
    const root = document.querySelector('.element-x-page');
    if (!root) return;

    const bg = root.querySelector('.element-x-bg');
    const parallaxSpeed = -0.05;

    function updateParallax() {
        if (!bg) return;
        const y = window.scrollY * parallaxSpeed;
        root.style.setProperty('--element-x-bg-y', `${y.toFixed(2)}px`);
    }

    const viewport = root.querySelector('#element-x-carousel-viewport');
    const prev = root.querySelector('.element-x-carousel-btn.prev');
    const next = root.querySelector('.element-x-carousel-btn.next');
    if (!viewport || !prev || !next) return;

    const slides = Array.from(viewport.querySelectorAll('.element-x-carousel-slide'));
    if (!slides.length) return;

    let index = 0;

    function normalizeIndex(value) {
        return (value + slides.length) % slides.length;
    }

    function goTo(nextIndex, behavior = 'smooth') {
        index = normalizeIndex(nextIndex);
        const left = viewport.clientWidth * index;
        viewport.scrollTo({ left, behavior });
    }

    next.addEventListener('click', () => {
        goTo(index + 1);
    });

    prev.addEventListener('click', () => {
        goTo(index - 1);
    });

    let syncTimer = null;
    viewport.addEventListener('scroll', () => {
        if (syncTimer) clearTimeout(syncTimer);
        syncTimer = setTimeout(() => {
            if (!viewport.clientWidth) return;
            index = Math.round(viewport.scrollLeft / viewport.clientWidth);
        }, 80);
    }, { passive: true });

    window.addEventListener('resize', () => {
        goTo(index, 'auto');
        updateParallax();
    }, { passive: true });

    window.addEventListener('scroll', updateParallax, { passive: true });

    updateParallax();
    goTo(0, 'auto');
}

elementXPage();
