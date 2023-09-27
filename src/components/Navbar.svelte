<script>
  import InstagramIcon from "../icons/InstagramIcon.svelte";
  import PatreonIcon from "../icons/PatreonIcon.svelte";
  import SpotifyIcon from "../icons/SpotifyIcon.svelte";
  import YoutubeIcon from "../icons/YoutubeIcon.svelte";

  export let light = true;
</script>

<div class="navbar xl:mt-8 z-10">
  <div class="flex-1">
    <h3 class={light ? 'light-text z-10' : 'z-10'}>Menajerie</h3>
  </div>
  <div class="flex-none">
    <button class="btn btn-square btn-sm btn-ghost">
      <SpotifyIcon light={light} />
    </button>
    <button class="btn btn-square btn-sm btn-ghost">
      <YoutubeIcon light={light} />
    </button>
    <button class="btn btn-square btn-sm btn-ghost">
      <PatreonIcon light={light} />
    </button>
    <button class="btn btn-square btn-sm btn-ghost">
      <InstagramIcon light={light} />
    </button>
  </div>
</div>
