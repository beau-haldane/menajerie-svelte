<script>
  import InstagramIcon from "../icons/InstagramIcon.svelte";
  import PatreonIcon from "../icons/PatreonIcon.svelte";
  import SpotifyIcon from "../icons/SpotifyIcon.svelte";
  import YoutubeIcon from "../icons/YoutubeIcon.svelte";
  export let light = true;
</script>

<div class="h-auto sm:pt-2 md:pt-6 w-11/12 flex justify-between items-center xl:mt-8 z-10">
  <div class="flex-1">
    <h3
      class={light
        ? "sm:text-xl md:text-4xl light-text z-10"
        : "sm:text-xl md:text-4xl z-10"}
    >
      Menajerie
    </h3>
  </div>
  <div class="flex items-center">
    <button class="btn btn-square sm:btn-xs md:btn-md lg:btn-md btn-ghost">
      <SpotifyIcon {light} />
    </button>
    <button class="btn btn-square sm:btn-xs md:btn-md lg:btn-md btn-ghost">
      <YoutubeIcon {light} />
    </button>
    <button class="btn btn-square sm:btn-xs md:btn-md lg:btn-md btn-ghost">
      <PatreonIcon {light} />
    </button>
    <button class="btn btn-square sm:btn-xs md:btn-md lg:btn-md btn-ghost">
      <InstagramIcon {light} />
    </button>
  </div>
</div>
