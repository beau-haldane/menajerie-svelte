<script lang="ts">
  import LocationIcon from "../icons/LocationIcon.svelte";
  import TimeIcon from "../icons/TimeIcon.svelte";
  import type { Gig } from "../types/types";
  export let gigs: Gig[] = [];
</script>

<div class="sm:w-11/12 lg:w-full items-center flex flex-col gap-20 lg:px-12">
  <h3 class="sm:text-3xl lg:text-5xl">Come see us play!</h3>
  <div class="w-full flex flex-col gap-8">
    {#each gigs as gig}
      <div class="card w-full bg-secondary outline outline-1.5 shadow-xl">
        <div class="flex sm:flex-col sm:gap-5 lg:flex-row sm:w-full sm:px-6 sm:py-8 p-8 justify-between items-center">
          <div class="flex sm:text-center lg:text-left sm:gap-4 lg:gap-8 sm:w-full lg:w-10/12 flex-col justify-between">
            <h5>{gig.name}</h5>
            {#if gig.blurb}
              <p>{gig.blurb}</p>
            {/if}
            <div class="flex sm:flex-col lg:flex-row items-center sm:gap-4 lg:gap-8">
              <div class="flex sm:flex-col lg:flex-row sm:items-center sm:gap-1 lg:gap-4 lg:w-32">
                <TimeIcon />{gig.date}
                {#if gig.time}
                  {gig.time}
                {/if}
              </div>

              <div class="flex sm:flex-col lg:flex-row sm:items-center sm:gap-1 lg:gap-4">
                <LocationIcon />
                <div class="flex flex-col gap-0">
                  <div class="font-semibold">{gig.venue_name}</div>
                  {#if gig.venue_address}
                    <div class="sm:hidden md:block">{gig.venue_address}</div>
                  {/if}
                </div>
              </div>
            </div>
          </div>
          <div class="flex lg:flex-col gap-4">
            <button
              class="btn btn-primary shadow-lg normal-case text-lg font-medium"
              >Buy Tickets</button
            >
            <!-- <button
              class="btn bg-secondary lg:w-full outline outline-1 shadow-lg normal-case text-lg font-medium"
              >More Info</button
            > -->
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>
