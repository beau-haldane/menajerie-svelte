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
          <div class="flex w-10/12 flex-col justify-between">
            <h5>{gig.name}</h5>
            {#if gig.blurb}
              <p class="py-8">{gig.blurb}</p>
            {/if}
            <div class="flex items-center gap-8">
              <div class="flex gap-4 w-32">
                <TimeIcon />{gig.date}
                {#if gig.time}
                  {gig.time}
                {/if}
              </div>

              <div class="flex items-center gap-4">
                <LocationIcon />
                <div class="flex flex-col gap-0">
                  <div class="font-semibold">{gig.venue_name}</div>
                  {#if gig.venue_address}
                    <div>{gig.venue_address}</div>
                  {/if}
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-4">
            <button
              class="btn btn-primary shadow-lg normal-case text-lg font-medium"
              >Buy Tickets</button
            >
            <button
              class="btn bg-secondary w-full outline outline-1 shadow-lg normal-case text-lg font-medium"
              >More Info</button
            >
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>
