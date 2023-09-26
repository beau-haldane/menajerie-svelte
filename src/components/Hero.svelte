<!-- Hero/Nav -->
<div class="h-screen w-screen flex flex-col items-center">
  <!-- Curved DIVs - do not place content inside -->
  <div class="curved-bottom-border-hero" />
  <div class="curved-bottom-border-hero outline-01" />
  <div class="curved-bottom-border-hero outline-02" />
  <div class="curved-bottom-border-hero outline-03" />

  <!-- Hero Container -->
  <div class="hero-container">
    <h1>Menajerie</h1>
  </div>
</div>

<style>
  /* Curved-bottom Hero BG Styling */
  .curved-bottom-border-hero {
    position: absolute;
    top: 0;
    left: -50%;
    height: 100%;
    width: 200%;
    border-radius: 0% 0% 50% 50%/0% 0% 50% 50%;
    background-image: url("../img/hero.jpg");
    background-position: center;
    background-size: 65%;
    background-position-y: 30%;
    z-index: -10;
  }

  .outline-01 {
    width: calc(200% + 6em);
    height: calc(100% + 6em);
    background-image: none;
    background-color: #ca604f;
    top: -3em;
    left: calc(-50% - 3em);
    z-index: -11;
  }

  .outline-02 {
    width: calc(200% + 12em);
    height: calc(100% + 12em);
    background-image: none;
    background-color: #e68953;
    top: -6em;
    left: calc(-50% - 6em);
    z-index: -12;
  }

  .outline-03 {
    width: calc(200% + 18em);
    height: calc(100% + 18em);
    background-image: none;
    background-color: #f0ac5d;
    top: -9em;
    left: calc(-50% - 9em);
    z-index: -13;
  }

  /* Hero */
  .hero-container {
    width: 90em;
    height: 90%;
  }
</style>