<script lang="ts">
    import type { PageData } from "./$types";
  
    export let data: PageData;
    const { event } = data;
  </script>
  <div class="page">
    {#if event}
    <main>
      <h2>{event.title}</h2>
      <p>Max Attendance: {event.maxAttendance}</p>
      <p>Location: {event.location}</p>
      <form method="post" class="actions">
        <button formaction="?/deleteEvent">Delete Event</button>
      </form>
    </main>
    {:else}
    <p>Event not found.</p>
{/if}
  </div>
  
  <style>
    .page {
      background: white;
      padding: 2rem;
      max-width: 800px;
      margin: auto;
    }
  
    .actions {
      margin-top: 2rem;
      text-align: right;
    }
  
    button {
      background: #dc3545; /* Red color for delete action */
      color: white;
      border: 0;
      border-radius: 0.125rem;
      padding: 0.5rem 1rem;
      cursor: pointer;
      transition: background-color 0.2s;
    }
  
    button:hover {
      background: #c82333; /* Darker shade on hover */
    }
  </style>
  