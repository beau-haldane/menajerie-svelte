<script>
    import Navbar from "./Navbar.svelte";
</script>
<!-- Hero/Nav -->
<!-- <div class="h-screen w-screen flex flex-col items-center"> -->
  <!-- Curved DIVs - do not place content inside -->
  <!-- <div class="curved-top-border-footer" />
  <div class="curved-top-border-footer outline-footer-01" />
  <div class="curved-top-border-footer outline-footer-02" />
  <div class="curved-top-border-footer outline-footer-03" /> -->
  <!-- End Curved DIVs -->

  <div class="w-full flex flex-col gap-4 items-center pb-8">
    <Navbar light={false} />
    <div class="h-px w-full bg-primary"></div>
    <p class="text-sm">© Menajerie 2023. Designed and built by Beau Jorgensen</p>
  </div>
<!-- </div> -->

<style>
  /* Curved-bottom Hero BG Styling */
  .curved-top-border-footer {
    position: absolute;
    height: 100%;
    width: 200%;
    border-radius: 50% 50% 0% 0%/100% 100% 0% 0%;
    background-image: none;
    background-color: #F6F1EB;
    z-index: 5;
  }
  .outline-footer-01 {
    position: relative;
    width: calc(200%);
    height: calc(1200% + 6em);
    background-image: none;
    background-color: #ca604f;
    top: -3em;
    /* left: calc(-50% - 3em); */
    z-index: 4;
  }
  .outline-footer-02 {
    position: relative;
    width: calc(200% + 12em);
    height: calc(2400% + 12em);
    background-image: none;
    background-color: #e68953;
    top: -16em;
    /* left: calc(-50% - 6em); */
    z-index: 3;
  }
  .outline-footer-03 {
    position: relative;
    width: calc(200% + 18em);
    height: calc(3600% + 18em);
    background-image: none;
    background-color: #f0ac5d;
    top: -32em;
    /* left: calc(-50% - 9em); */
    z-index: 2;
  }
</style>
