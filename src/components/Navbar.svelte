<script>
  import InstagramIcon from "../icons/InstagramIcon.svelte";
  import PatreonIcon from "../icons/PatreonIcon.svelte";
  import SpotifyIcon from "../icons/SpotifyIcon.svelte";
  import YoutubeIcon from "../icons/YoutubeIcon.svelte";
  export let light = true;
</script>

<div class="h-auto pt-2 sm:pt-6 w-11/12 flex justify-between items-center lg:mt-8 z-10">
  <div class="flex-1">
    <h3
      class={light
        ? "text-xl sm:text-4xl light-text z-10"
        : "text-xl sm:text-4xl z-10"}
    >
      Menajerie
    </h3>
  </div>
  <div class="flex items-center">
    <button class="btn btn-square btn-xs sm:btn-md md:btn-md btn-ghost">
      <SpotifyIcon {light} />
    </button>
    <button class="btn btn-square btn-xs sm:btn-md md:btn-md btn-ghost">
      <YoutubeIcon {light} />
    </button>
    <button class="btn btn-square btn-xs sm:btn-md md:btn-md btn-ghost">
      <PatreonIcon {light} />
    </button>
    <button class="btn btn-square btn-xs sm:btn-md md:btn-md btn-ghost">
      <InstagramIcon {light} />
    </button>
  </div>
</div>
