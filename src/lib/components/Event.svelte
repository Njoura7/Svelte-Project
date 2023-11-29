<script lang="ts">
  import type { PageData } from "./$types";
  export let event: EventType;
  import { goto } from '$app/navigation';

  function navigateToEvent() {
    goto(`/event/${event.id}`);
  }
  function handleKeydown(event) {
    if (event.key === 'Enter' || event.key === ' ') {
      navigateToEvent();
    }
  }
</script>
<div on:click={navigateToEvent}  
 on:keydown={handleKeydown} 
tabindex="0" 
 >
  <article class="event-card" >
    <h2>{event.title}</h2>
    <p class="max-attendance">Max Attendance: {event.maxAttendance}</p>
    <p class="location">Location: {event.location}</p>
  </article>
</div>


<style>

  .event-card {
    cursor: pointer;
    display: flex;
    background-color: rgba(0, 50, 103,0.3);
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem;
    margin: 1rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
    max-width: 300px;
  }

  .event-card h2 {
    color: rgb(5, 5, 24);
    margin: 0;
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
  }

  .event-card p {
    margin: 0.25rem 0;
    color: rgb(14, 14, 62);
    font-size: 1rem;
  }

  .max-attendance, .location {
    font-style: italic;
  }

  @media (max-width: 768px) {
    .event-card {
      max-width: 100%;
    }
  }
</style>
