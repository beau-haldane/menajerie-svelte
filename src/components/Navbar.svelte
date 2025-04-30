<script>
  import InstagramIcon from "../icons/InstagramIcon.svelte";
  import PatreonIcon from "../icons/PatreonIcon.svelte";
  import SpotifyIcon from "../icons/SpotifyIcon.svelte";
  import YoutubeIcon from "../icons/YoutubeIcon.svelte";
  export let light = true;
</script>

<div class="h-auto mt-2 lg:pt-4 w-11/12 flex justify-between items-center z-10">
  <div class="flex-1">
    <div class="logo" />
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

<style>
  .logo {
    background-image: url("../img/logo.png");
    background-position: center;
    background-size: contain;
  }
  @media only screen and (max-width: 639px) {
    .logo {
      width: 140px;
      height: 35px;
    }
  }

  @media only screen and (min-width: 640px) {
    .logo {
      width: 160px;
      height: 40px;
    }
  }

  @media only screen and (min-width: 1024px) {
    .logo {
      width: 260px;
      height: 65px;
    }
  }
</style>
