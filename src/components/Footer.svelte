<script>
  import Navbar from "./Navbar.svelte";
</script>

<div class="relative w-full flex flex-col gap-4 items-center pb-8">
  <div class="white-circle bg-secondary aspect-square rounded-full absolute" />
  <div class="outline-01 aspect-square rounded-full absolute" />
  <div class="outline-02 aspect-square rounded-full absolute" />
  <div class="outline-03 aspect-square rounded-full absolute" />
  <Navbar />
  <div class="h-px w-full bg-primary" />
  <div class="w-full flex flex-col items-center gap-0">
    <p class="text-sm pb-1">© Menajerie 2025.</p>
    <!-- <p class="text-sm pt-1">Designed and built by Beau Jorgensen</p> -->
  </div>
</div>

<style>
  .white-circle {
    width: 300vw;
    top: -25vh;
    z-index: -1;
  }
  .outline-01 {
    width: calc(300vw + 12em);
    top: calc(-25vh - 6em);
    background-color: #ca604f;
    z-index: -2;
  }
  .outline-02 {
    width: calc(300vw + 24em);
    top: calc(-25vh - 12em);
    background-color: #e68953;
    z-index: -3;
  }
  .outline-03 {
    width: calc(300vw + 36em);
    top: calc(-25vh - 18em);
    background-color: #f0ac5d;
    z-index: -4;
  }
</style>
