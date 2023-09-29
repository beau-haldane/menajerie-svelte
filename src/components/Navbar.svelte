<script>
  import InstagramIcon from "../icons/InstagramIcon.svelte";
  import PatreonIcon from "../icons/PatreonIcon.svelte";
  import SpotifyIcon from "../icons/SpotifyIcon.svelte";
  import YoutubeIcon from "../icons/YoutubeIcon.svelte";
  export let light = true;
</script>

<div
  class="h-auto mt-2 lg:pt-4 w-11/12 flex justify-between items-center z-10"
>
  <div class="flex-1">
    <h3
      class={light
        ? "text-xl sm:text-4xl md:text-4xl light-text z-10"
        : "text-xl sm:text-4xl z-10"}
    >
      Menajerie
    </h3>
  </div>
  <div class="flex items-center">
    <a
      href="https://open.spotify.com/artist/3oGVt5PhRBGNiDkanRjrp3"
      target="_blank"
      class="btn btn-square btn-sm sm:btn-md btn-ghost"
    >
      <SpotifyIcon {light} />
    </a>
    <a
      href="https://www.youtube.com/@menajerie5746"
      target="_blank"
      class="btn btn-square btn-sm sm:btn-md btn-ghost"
    >
      <YoutubeIcon {light} />
    </a>
    <a
      href="https://www.patreon.com/menajerie"
      target="_blank"
      class="btn btn-square btn-sm sm:btn-md btn-ghost"
    >
      <PatreonIcon {light} />
    </a>
    <a
      href="https://www.instagram.com/menajerie.band/"
      target="_blank"
      class="btn btn-square btn-sm sm:btn-md btn-ghost"
    >
      <InstagramIcon {light} />
    </a>
  </div>
</div>
