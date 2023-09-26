<script lang="ts">
  import LocationIcon from "../icons/LocationIcon.svelte";
  import TimeIcon from "../icons/TimeIcon.svelte";
  import type { Gig } from "../types/types";
  export let gigs: Gig[] = [];
</script>
<div class="w-full items-center flex flex-col gap-20 px-12">
  <h3>Come see us play!</h3>
  <div class="w-full flex flex-col gap-8">
    {#each gigs as gig}
      <div class="card w-full bg-secondary outline outline-1.5 shadow-xl">
        <div class="flex p-8 justify-between items-center">
          <div class="flex flex-col justify-between">
            <h5>{gig.name}</h5>
            {#if gig.blurb}
              <p class="py-8">{gig.blurb}</p>
            {/if}
            <div class="flex items-center gap-8">
              {#if gig.time}
                <div class="flex gap-4 w-32"><TimeIcon />{gig.time}</div>
              {/if}
  
              <div class="flex items-center gap-4">
                <LocationIcon />
                <span class="-mr-4 font-bold">{gig.venue_name}</span>{#if gig.venue_address}, {gig.venue_address}
                {/if}
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-4">
            <button
              class="flex-1 btn btn-primary shadow-lg normal-case text-lg font-medium"
              >Buy Tickets</button
            >
            <button
              class="flex-1 btn bg-secondary w-full outline outline-1 shadow-lg normal-case text-lg font-medium"
              >More Info</button
            >
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>
