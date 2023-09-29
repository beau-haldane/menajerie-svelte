<script>
  import ScrollDownIcon from "../icons/ScrollDownIcon.svelte";
  import Navbar from "./Navbar.svelte";
</script>

<!-- Hero/Nav -->
<div class="relative md:h-screen w-screen flex flex-col items-center">
  <!-- Curved DIVs - do not place content inside -->
  <div class="curved-bottom-border-hero" />
  <div class="curved-bottom-border-hero outline-01" />
  <div class="curved-bottom-border-hero outline-02" />
  <div class="curved-bottom-border-hero outline-03" />
  <!-- End Curved DIVs -->

  <!-- Hero Container -->
  <div class="w-11/12 lg:w-9/12 lg:h-full flex flex-col justify-between items-center">
    <Navbar />
    <div class="h-36 md:h-60 hidden sm:block lg:hidden" />
    <div class="mt-80 sm:mt-96 lg:mt-0 z-10 mb-2 flex flex-col gap-2.5 items-center">
      <!-- <h2 class="light-text">Debut EP</h2>
      <h1 class="light-text">Selective Deafness</h1>
      <h2 class="light-text">Out Now</h2>-->
      <ScrollDownIcon /> 
    </div>
  </div>
</div>

<style>
  /* Extra small devices (phones, 640px and down) */
  @media only screen and (max-width: 639px) {
    .curved-bottom-border-hero {
      position: absolute;
      top: 0;
      left: -50%;
      height: 60vh;
      width: 200vw;
      border-radius: 0% 0% 50% 50%/0% 0% 50% 50%;
      background-image: url("../img/hero.jpg");
      background-position: center;
      background-size: 100%;
      background-position-y: 30%;
      z-index: 5;
    }
    .outline-01 {
      width: calc(200vw + 6em);
      height: calc(60vh + 6em);
      background-image: none;
      background-color: #ca604f;
      top: -3em;
      left: calc(-50% - 3em);
      z-index: 4;
    }
    .outline-02 {
      width: calc(200vw + 12em);
      height: calc(60vh + 12em);
      background-image: none;
      background-color: #e68953;
      top: -6em;
      left: calc(-50% - 6em);
      z-index: 3;
    }
    .outline-03 {
      width: calc(200vw + 18em);
      height: calc(60vh + 18em);
      background-image: none;
      background-color: #f0ac5d;
      top: -9em;
      left: calc(-50% - 9em);
      z-index: 2;
    }
  }
  /* Small devices (portrait tablets and large phones, 640px and up) */
  @media only screen and (min-width: 640px) {
    .curved-bottom-border-hero {
      position: absolute;
      top: 0;
      left: -50%;
      height: 65vh;
      width: 200vw;
      border-radius: 0% 0% 50% 50%/0% 0% 50% 50%;
      background-image: url("../img/hero.jpg");
      background-position: center;
      background-size: 100%;
      background-position-y: 10%;
      z-index: 5;
    }
    .outline-01 {
      width: calc(200vw + 9em);
      height: calc(65vh + 9em);
      background-image: none;
      background-color: #ca604f;
      top: -4.5em;
      left: calc(-50% - 4.5em);
      z-index: 4;
    }
    .outline-02 {
      width: calc(200vw + 18em);
      height: calc(65vh + 18em);
      background-image: none;
      background-color: #e68953;
      top: -9em;
      left: calc(-50% - 9em);
      z-index: 3;
    }
    .outline-03 {
      width: calc(200vw + 27em);
      height: calc(65vh + 27em);
      background-image: none;
      background-color: #f0ac5d;
      top: -13.5em;
      left: calc(-50% - 13.5em);
      z-index: 2;
    }
  }
  /* Large devices (laptops/desktops, 1024px and up) */
  @media only screen and (min-width: 1024px) {
    /* Curved-bottom Hero BG Styling */
    .curved-bottom-border-hero {
      position: absolute;
      top: 0;
      left: -50%;
      height: 100%;
      width: 200vw;
      border-radius: 0% 0% 50% 50%/0% 0% 50% 50%;
      background-image: url("../img/hero.jpg");
      background-position: center;
      background-size: 65%;
      background-position-y: 30%;
      z-index: 5;
    }
    .outline-01 {
      width: calc(200% + 6em);
      height: calc(100% + 6em);
      background-image: none;
      background-color: #ca604f;
      top: -3em;
      left: calc(-50% - 3em);
      z-index: 4;
    }
    .outline-02 {
      width: calc(200% + 12em);
      height: calc(100% + 12em);
      background-image: none;
      background-color: #e68953;
      top: -6em;
      left: calc(-50% - 6em);
      z-index: 3;
    }
    .outline-03 {
      width: calc(200% + 18em);
      height: calc(100% + 18em);
      background-image: none;
      background-color: #f0ac5d;
      top: -9em;
      left: calc(-50% - 9em);
      z-index: 2;
    }
  }
</style>
