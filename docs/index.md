---
hide:
  - navigation
  - toc
  - footer
---

<style>
  :root {
    --nos-content-offset: 0px;
  }

  .md-header,
  .md-tabs,
  .md-header--shadow {
    background: transparent !important;
    box-shadow: none !important;
  }

  #nos-bg {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: -100;
    background-image: url('assets/nos-bg-1.png');
    background-size: cover;
    background-position: bottom center;
    background-repeat: no-repeat;
    will-change: background-position;
  }

  #nos-bg-mask {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 100vh;
    pointer-events: none;
    z-index: -100;
    background: var(--md-default-bg-color, #fff);
  }

  #nos-bg-gradient {
    position: fixed;
    left: 0;
    right: 0;
    height: 520px;
    top: calc(100vh - 520px);
    pointer-events: none;
    z-index: -8;
    opacity: 0;
    background: linear-gradient(
    to bottom,
    color-mix(in srgb, var(--md-default-bg-color) 0%, transparent) 0%,
    color-mix(in srgb, var(--md-default-bg-color) 2%, transparent) 20%,
    color-mix(in srgb, var(--md-default-bg-color) 8%, transparent) 38%,
    color-mix(in srgb, var(--md-default-bg-color) 22%, transparent) 56%,
    color-mix(in srgb, var(--md-default-bg-color) 50%, transparent) 74%,
    color-mix(in srgb, var(--md-default-bg-color) 82%, transparent) 88%,
    var(--md-default-bg-color, #fff) 100%
    );
  }

  .md-main__inner,
  .md-content__inner {
    padding-top: calc(var(--nos-content-offset) + 1rem);
  }

  #nos-chars {
    position: fixed;
    right: 0;
    bottom: 0;
    pointer-events: none;
    z-index: -10;
    transform-origin: bottom right;
    height: clamp(360px, 110vh, 1280px);
    width: auto;
    max-width: none;
  }
  #nos-chars-glow {
    position: fixed;
    right: 0;
    bottom: 0;
    pointer-events: none;
    z-index: -9;
    transform-origin: bottom right;
    mix-blend-mode: color-dodge;
    height: clamp(360px, 110vh, 1280px);
    width: auto;
    max-width: none;
  }

  @media (max-aspect-ratio: 1) {
    #nos-chars,
    #nos-chars-glow {
      right: -20vw;
      height: clamp(280px, 80vh, 840px);
    }
  }

</style>

<div id="nos-bg" aria-hidden="true"></div>
<div id="nos-bg-mask" aria-hidden="true"></div>
<div id="nos-bg-gradient" aria-hidden="true"></div>

<img id="nos-chars" src="assets/nos-chars.png" alt="">
<img id="nos-chars-glow" src="assets/nos-chars-glow.png" alt="">

<script>
  (function () {
    var bgSpeed = -0.25; // smaller value = slower background movement
    var charsSpeed = -1.0; // 1.0 = full page scroll speed
    var baseY = 0;

    var bg = document.getElementById('nos-bg');
    var mask = document.getElementById('nos-bg-mask');
    var gradient = document.getElementById('nos-bg-gradient');
    var chars = document.getElementById('nos-chars');
    var glow = document.getElementById('nos-chars-glow');
    var root = document.documentElement;
    var mobileQuery = window.matchMedia('(max-aspect-ratio: 1)');
    function onScroll() {
      var bgY = baseY + window.scrollY * bgSpeed;
      var charsY = window.scrollY * charsSpeed + 100;
      var bgX = mobileQuery.matches ? 'calc(100%)' : 'center';
      bg.style.backgroundPosition = bgX + ' calc(70% + ' + bgY + 'px)';
      chars.style.transform = 'translateY(' + charsY + 'px)';
      glow.style.transform = 'translateY(' + charsY + 'px)';
      var charsBottom = chars.getBoundingClientRect().bottom;
      var maskTop = Math.max(0, Math.min(window.innerHeight, charsBottom));
      var contentTop = Math.max(0, Math.min(window.innerHeight, charsBottom - window.scrollY * charsSpeed));
      var gradientHeight = 520;
      var gradientTop = maskTop - gradientHeight;
      var gradientOpacity = Math.min(1, window.scrollY / 900);
      mask.style.top = maskTop + 'px';
      gradient.style.top = gradientTop + 'px';
      gradient.style.opacity = gradientOpacity.toFixed(3);
      root.style.setProperty('--nos-content-offset', contentTop - window.innerHeight * 0.5 + 'px');
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    onScroll();
  })();
</script>

<!-- <div style="height: 300vh;"></div> -->

#

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

<div style="height: 100vh;"></div>
