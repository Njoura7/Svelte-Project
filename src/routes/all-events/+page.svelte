<!-- src/routes/all-events/+page.svelte -->
<script lang="ts">
  import Event from "$lib/components/Event.svelte";

  import type {PageData} from "./$types";

  export let data: PageData;
  $: events = data.events;
  </script>

<h1>All Events</h1>

{#if events.length > 0}


  <ul>
    {#each events as event}
    <li>
      <Event {event} />
    </li>

   {/each}
</ul>
{:else}

  <p>No events found.</p>
{/if}
<style>
  li{
    list-style-type: none;
   
  }
</style>