<script lang="ts">
  import { createClient } from "@supabase/supabase-js";
  import { onMount } from "svelte";
    import Hero from "../components/Hero.svelte";

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

<Hero />

<style>
  :global(h1) {
    color: #f6f1eb;
    font-size: 2.5em;
    font-family: "Caprasimo";
  }
</style>
