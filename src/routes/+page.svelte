<script lang="ts">
  import { createClient } from "@supabase/supabase-js";
  import { onMount } from "svelte";
  import format from "date-fns/format";
  import type { Gig } from "../types/types";
  import Hero from "../components/Hero.svelte";
  import AlbumCard from "../components/AlbumCard.svelte";
  import MusicVideo from "../components/MusicVideo.svelte";
  import Gallery from "../components/Gallery.svelte";
  import Contact from "../components/Contact.svelte";
  import Footer from "../components/Footer.svelte";
  import BlurbAndGigs from "../components/BlurbAndGigs.svelte";
  import InstaFeed from "../components/InstaFeed.svelte";

  let gigs: Gig[] = [];

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
      gigs = gigs
        .filter((gig) => {
          return new Date(gig.date) > new Date() && gig.publish;
        })
        .map((gig) => {
          gig.date = format(new Date(gig.date), "eee MMM d");
          gig.time = convertTo12HourFormat(gig.time);
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

<div
  class="w-screen flex flex-col sm:gap-12 lg:gap-0 items-center overflow-hidden"
>
  <Hero />
  <!-- Content Container -->
  <div
    class="w-10/12 lg:w-9/12 z-10 flex flex-col items-center gap-24 sm:gap-32"
  >
    <AlbumCard />
    <BlurbAndGigs {gigs} />
    <MusicVideo />
    <InstaFeed />
    <Footer />
  </div>
</div>
