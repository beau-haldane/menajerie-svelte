<script lang="ts">
  import LocationIcon from "../icons/LocationIcon.svelte";
  import TimeIcon from "../icons/TimeIcon.svelte";
  import type { Gig } from "../types/types";
  export let gigs: Gig[] = [];
</script>

<div class="w-full items-center flex flex-col gap-20 lg:px-12">
  <h3 class="text-3xl sm:text-5xl md:text-6xl lg:text-5xl">Come see us play!</h3>
  <div class="w-full flex flex-col gap-8">
    {#each gigs as gig}
      <div class="card w-full bg-secondary py-8 lg:py-0 outline outline-1 shadow-xl">
        <div class="flex flex-col gap-12 lg:gap-5 lg:flex-row w-full px-6 sm:px-12 sm:py-8 justify-between items-center ">
          <div class="flex text-center lg:text-left gap-4 lg:gap-8 w-full lg:w-10/12 flex-col justify-between">
            <h5>{gig.name}</h5>
            {#if gig.blurb}
              <p>{gig.blurb}</p>
            {/if}
            <div class="flex flex-col text-2xl md:flex-row md:justify-between px-24 lg:px-0 lg:justify-start gap-4 sm:gap-8">
              <div class="flex flex-col w-1/2 lg:flex-row items-center gap-1 sm:gap-4 md:w-32">
                <TimeIcon />{gig.date}
                {#if gig.time}
                  {gig.time}
                {/if}
              </div>

              <div class="flex flex-col w-1/2 lg:flex-row items-center gap-1 sm:gap-4">
                <LocationIcon />
                <div class="flex flex-col items-center lg:items-start gap-0">
                  <div class="font-semibold">{gig.venue_name}</div>
                  {#if gig.venue_address}
                    <div class="hidden sm:block">{gig.venue_address}</div>
                  {/if}
                </div>
              </div>
            </div>
          </div>
          <div class="flex md:flex-col gap-4">
            <button
              class="btn btn-lg lg:btn-md text-2xl lg:text-xl btn-primary shadow-lg normal-case font-medium"
              >Buy Tickets</button
            >
            <!-- <button
              class="btn bg-secondary md:w-full outline outline-1 shadow-lg normal-case text-lg font-medium"
              >More Info</button
            > -->
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>
