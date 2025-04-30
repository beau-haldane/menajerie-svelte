<script lang="ts">
  import { tick } from "svelte";
  import LocationIcon from "../icons/LocationIcon.svelte";
  import TimeIcon from "../icons/TimeIcon.svelte";
  import type { Gig } from "../types/types";
  export let gigs: Gig[] = [];
</script>

{#if gigs.length > 0}
  <div class="w-full items-center flex flex-col gap-20 lg:px-12">
    <h3 class="text-3xl sm:text-5xl md:text-6xl lg:text-5xl">
      Come see us play!
    </h3>
    <div class="w-full flex flex-col gap-8">
      {#each gigs as gig}
        <div
          class="card w-full bg-secondary py-4 outline outline-1 shadow-xl"
        >
          <div
            class="flex flex-col gap-12 lg:gap-5 lg:flex-row w-full px-6 sm:px-12 sm:py-8 justify-between items-center"
          >
            <div
              class="flex text-center lg:text-left gap-4 lg:gap-8 w-full flex-col justify-between"
            >
              <h6>{gig.name}</h6>
              {#if gig.blurb}
                <p>{gig.blurb}</p>
              {/if}
              <div
                class="flex text-xl lg:text-lg md:flex-row md:justify-between lg:px-0 lg:justify-start gap-4"
              >
                <div
                  class="flex flex-col md:flex-row items-center gap-1 w-1/2 lg:w-64"
                >
                  <TimeIcon />{gig.date}
                  {#if gig.time}<br />
                    {gig.time}
                  {/if}
                </div>

                <div
                  class="flex flex-col w-1/2 md:flex-row items-center gap-1 sm:gap-4"
                >
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
            {#if gig.ticket_link || gig.event_link}
              <div class="flex md:flex-col gap-4 w-2/12">
                {#if gig.ticket_link}
                  <a
                    href={gig.ticket_link}
                    target="_blank"
                    class="btn lg:btn-md btn-primary shadow-lg normal-case font-medium"
                    >Buy Tickets</a
                  >
                {/if}
                {#if gig.event_link}
                  <a
                    href={gig.event_link}
                    target="_blank"
                    class="btn bg-secondary text-primary outline outline-1 lg:btn-md text-xl lg:text-lg btn-primary shadow-lg normal-case font-medium"
                    >More Info</a
                  >
                {/if}
              </div>
            {/if}
          </div>
        </div>
      {/each}
    </div>
  </div>
{/if}
