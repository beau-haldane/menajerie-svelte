<script lang="ts">
  import { createClient } from "@supabase/supabase-js";
  import { onMount } from "svelte";
    import Hero from "../components/Hero.svelte";
    import Navbar from "../components/Navbar.svelte";

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

<div class="h-screen w-screen flex flex-col items-center">
  <Hero />
  <!-- Content Container -->
  <div class="w-10/12">
    
  </div>
</div>

<style>
  :global(h1) {
    
  }
</style>
