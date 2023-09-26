<script lang="ts">
  import { createClient } from "@supabase/supabase-js";
  import { onMount } from "svelte";
  import type { Gig } from "../types/types";
  import Hero from "../components/Hero.svelte";
  import AlbumCard from "../components/AlbumCard.svelte";
  import MusicVideo from "../components/MusicVideo.svelte";
  import BandBlurb from "../components/BandBlurb.svelte";
  import UpcomingGigs from "../components/UpcomingGigs.svelte";
    import Gallery from "../components/Gallery.svelte";

  let gigs: Gig[] = []

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
    gigs = (await getGigs()) as Gig[];
    console.log("Fetched gigs:", gigs);
  });
</script>

<div class="w-screen flex flex-col items-center">
  <Hero />
  <!-- Content Container -->
  <div class="w-9/12 z-10 flex flex-col items-center gap-32">
    <AlbumCard />
    <MusicVideo />
    <BandBlurb />
    <UpcomingGigs gigs={gigs} />
    <Gallery />
  </div>
</div>
