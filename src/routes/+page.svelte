<script lang="ts">
  import { createClient } from "@supabase/supabase-js";
  import { onMount } from "svelte";

  interface Gig {
    id: string;
    name: string;
    date: string;
    location: string;
    description: string;
    image: string;
    link: string;
  }

  let gigs: Gig[] = [];

  // Create a single supabase client for interacting with your database
  const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_API_KEY
  );

  const getGigs = async () => {
    let { data: gigs, error } = await supabase.from("gigs").select("*");
    if (error) {
      console.error("Error fetching gigs:", error);
    }
    return gigs;
  };

  onMount(async () => {
    gigs = await getGigs() as Gig[];
    console.log("Fetched gigs:", gigs);
  });
</script>

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
  <div>
    {#each gigs as gig}
    <div>{gig.name}</div>
    {/each}
  </div>
</div>

<style>
  h1 {
    color: #f6f1eb;
    font-size: 2.5em;
    font-family: "Caprasimo";
  }

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
