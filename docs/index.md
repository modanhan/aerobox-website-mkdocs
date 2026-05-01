---
hide:
  - navigation
  - toc
  - footer
---

<style>
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
    z-index: -1;
    background-image: url('assets/nos-bg-1.png');
    background-size: max(100%, 1800px) auto;
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
    z-index: 1;
    background: var(--md-default-bg-color, #fff);
  }

  #nos-chars {
    position: fixed;
    right: 0;
    bottom: 0;
    pointer-events: none;
    z-index: 10;
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
    z-index: 11;
    transform-origin: bottom right;
    mix-blend-mode: color-dodge;
    height: clamp(360px, 110vh, 1280px);
    width: auto;
    max-width: none;
  }

  @media (max-aspect-ratio: 3/4) {
    #nos-chars,
    #nos-chars-glow {
      right: -24vw;
      height: clamp(260px, 72vh, 840px);
    }
  }

</style>

<div id="nos-bg" aria-hidden="true"></div>
<div id="nos-bg-mask" aria-hidden="true"></div>

<img id="nos-chars" src="assets/nos-chars.png" alt="">
<img id="nos-chars-glow" src="assets/nos-chars-glow.png" alt="">

<script>
  (function () {
    var bgSpeed = -0.25; // smaller value = slower background movement
    var charsSpeed = -1.0; // 1.0 = full page scroll speed
    var baseY = 0;

    var bg = document.getElementById('nos-bg');
    var mask = document.getElementById('nos-bg-mask');
    var chars = document.getElementById('nos-chars');
    var glow = document.getElementById('nos-chars-glow');
    function onScroll() {
      var bgY = baseY + window.scrollY * bgSpeed;
      var charsY = window.scrollY * charsSpeed + 100;
      bg.style.backgroundPosition = 'center calc(70% + ' + bgY + 'px)';
      chars.style.transform = 'translateY(' + charsY + 'px)';
      glow.style.transform = 'translateY(' + charsY + 'px)';
      var charsBottom = chars.getBoundingClientRect().bottom;
      var maskTop = Math.max(0, Math.min(window.innerHeight, charsBottom));
      mask.style.top = maskTop + 'px';
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    onScroll();
  })();
</script>

<div style="height: 300vh;"></div>
