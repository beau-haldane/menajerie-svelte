<script lang="ts">
  import { createClient } from "@supabase/supabase-js";
  import { onMount } from "svelte";
  import format from "date-fns/format";
  import type { Gig } from "../types/types";
  import Hero from "../components/Hero.svelte";
  import AlbumCard from "../components/AlbumCard.svelte";
  import MusicVideo from "../components/MusicVideo.svelte";
  import BandBlurb from "../components/BandBlurb.svelte";
  import UpcomingGigs from "../components/UpcomingGigs.svelte";
  import Gallery from "../components/Gallery.svelte";
  import Contact from "../components/Contact.svelte";
  import Footer from "../components/Footer.svelte";
    import BlurbAndGigs from "../components/BlurbAndGigs.svelte";

  let gigs: Gig[] = [];

  // Create a single supabase client for interacting with your database
  const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_API_KEY
  );

  const getGigs = async () => {
    let { data: gigs, error } = await supabase
      .from("gigs")
      .select("*")
      .order("date", { ascending: true });
    if (error) {
      console.error("Error fetching gigs:", error);
    } else if (gigs) {
      gigs.map((gig) => {
        gig.date = format(new Date(gig.date), "eee MMM d");
        gig.time = convertTo12HourFormat(gig.time);
        // gig.date = new Date(gig.date);
        return gig;
      });
      return gigs;
    }
  };

  const convertTo12HourFormat = (timestamp: string) => {
    const [hours, minutes] = timestamp.split(":");
    let formattedHour = parseInt(hours, 10);
    let period = "am";
    if (formattedHour >= 12) {
      period = "pm";
      if (formattedHour > 12) {
        formattedHour -= 12;
      }
    }
    return `${formattedHour}:${minutes}${period}`;
  };

  onMount(async () => {
    gigs = (await getGigs()) as Gig[];
  });
</script>

<div class="w-screen flex flex-col items-center overflow-hidden">
  <Hero />
  <!-- Content Container -->
  <div class="w-9/12 z-10 flex flex-col items-center gap-32">
    <AlbumCard />
    <MusicVideo />
    <BlurbAndGigs gigs={gigs} />
    <Gallery />
    <Contact />
    <Footer />
  </div>
</div>
