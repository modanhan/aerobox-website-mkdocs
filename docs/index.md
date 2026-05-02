---
hide:
  - navigation
  - toc
  - footer
---

<style>
  .md-typeset h1,
  .md-content__button {
      display: none;
  }

  .main-page :root {
      --nos-content-offset: 0px;
  }

  .md-header,
  .md-tabs,
  .md-header--shadow {
      background: transparent !important;
      box-shadow: none !important;
  }

  .md-main__inner,
  .md-content__inner {
      padding-top: calc(var(--nos-content-offset) + 1rem);
  }
</style>

<div class="main-page">

<div id="nos-bg" aria-hidden="true"></div>
<div id="nos-bg-mask" aria-hidden="true"></div>
<div id="nos-bg-gradient" aria-hidden="true"></div>

<img id="nos-chars" src="assets/nos-chars.png" alt="">
<img id="nos-chars-glow" src="assets/nos-chars-glow.png" alt="">

<a id="nos-scroll-indicator" href="#nos-content-start" aria-label="Scroll down">
  <!-- <span class="nos-scroll-text">Scroll</span> -->
  <span class="nos-scroll-icon" aria-hidden="true"></span>
</a>

<!-- <div style="height: 300vh;"></div> -->

<div id="nos-content-start"></div>

<section class="games-section" aria-labelledby="games-title">
  <h2 id="games-title">Games</h2>
  <div class="games-grid">
    <a class="game-button" href="rogue-racer/" aria-label="Play Rogue Racer NOS">
      <span class="game-button-bg-wrap" aria-hidden="true">
        <img class="game-button-bg" src="assets/nos-bg-1.png" alt="">
      </span>
      <span class="game-button-chars-wrap" aria-hidden="true">
        <img class="game-button-chars" src="assets/nos-chars.png" alt="">
      </span>
    </a>
    <a class="game-button" href="rogue-racer/" aria-label="Play Rogue Racer EX">
      <span class="game-button-bg-wrap" aria-hidden="true">
        <img class="game-button-bg" src="assets/button-ex-bg.png" alt="">
      </span>
      <span class="game-button-chars-wrap" aria-hidden="true">
        <img class="game-button-chars" src="assets/button-ex-chars.png" alt="">
      </span>
    </a>
  </div>
</section>

<div style="height: 60vh;"></div>
</div>
