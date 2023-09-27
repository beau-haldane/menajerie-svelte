<script lang="ts">
  import BandBlurb from "./BandBlurb.svelte";
  import UpcomingGigs from "./UpcomingGigs.svelte";
  import type { Gig } from "../types/types";
  export let gigs: Gig[] = [];
</script>

<div class="relative flex flex-col items-center gap-32">
  <div class="white-circle bg-secondary aspect-square rounded-full absolute" />
  <div class="outline-01 aspect-square rounded-full absolute" />
  <div class="outline-02 aspect-square rounded-full absolute" />
  <div class="outline-03 aspect-square rounded-full absolute" />
  <BandBlurb />
  <UpcomingGigs {gigs} />
</div>

<style>
  .white-circle {
    width: 120vw;
    top: -30vh;
    z-index: -1;
  }
  .outline-01 {
    width: calc(120vw + 12em);
    top: calc(-30vh - 6em);
    background-color: #ca604f;
    z-index: -2;
  }
  .outline-02 {
    width: calc(120vw + 24em);
    top: calc(-30vh - 12em);
    background-color: #e68953;
    z-index: -3;
  }
  .outline-03 {
    width: calc(120vw + 36em);
    top: calc(-30vh - 18em);
    background-color: #f0ac5d;
    z-index: -4;
  }
</style>
