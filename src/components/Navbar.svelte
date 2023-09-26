<script>
    import InstagramIcon from "../icons/InstagramIcon.svelte";
import PatreonIcon from "../icons/PatreonIcon.svelte";
import SpotifyIcon from "../icons/SpotifyIcon.svelte";
    import YoutubeIcon from "../icons/YoutubeIcon.svelte";

</script>
<div class="navbar z-10">
  <div class="flex-1">
    <h3 class="light-text z-10">Menajerie</h3>
  </div>
  <div class="flex-none">
    <button class="btn btn-square btn-ghost">
      <SpotifyIcon />
    </button>
    <button class="btn btn-square btn-ghost">
      <YoutubeIcon />
    </button>
    <button class="btn btn-square btn-ghost">
      <PatreonIcon />
    </button>
    <button class="btn btn-square btn-ghost">
      <InstagramIcon />
    </button>
  </div>
</div>