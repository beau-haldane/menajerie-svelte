<script>
  import { onMount } from "svelte";

  onMount(() => {
    const d = document,
      s = d.createElement("script");
    s.type = "module";
    s.src = "https://w.behold.so/widget.js";
    d.head.append(s);
  });
</script>

<div class="w-full items-center flex flex-col gap-16 lg:px-12">
  <h3 class="text-3xl sm:text-5xl md:text-6xl lg:text-5xl">
    Latest From Instagram
  </h3>
  <div data-behold-id="z2DCcHc0YK7RyWQYvzuH"></div>
</div>
