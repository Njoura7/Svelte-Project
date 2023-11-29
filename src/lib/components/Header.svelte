<script lang="ts">
  import { page } from '$app/stores';
</script>

<nav>
  <div class="left">
    <div class="logo">
      
      <a class:active={$page.url.pathname === '/'} href="/">Event Info</a>
    </div>
  </div>
  <div class="right">
    <a href="/create-event">+ Create Event</a>
  </div>
</nav>

<style>
  nav {
    display: flex;
    padding: 1rem;
    align-items: center;
    background-color: #f5f5f5; /* Adjust as per your brand color */
  }

  a {
    text-decoration: none;
    color: #333; /* Darker text for better readability */
    display: inline-block;
    transition: color 0.3s;
  }

  a:hover {
    color: #007bff; /* Color changes on hover */
  }

  a + a {
    margin-left: 1rem;
  }

  .logo a{
    font-weight: bold;
    font-size: larger;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    color: #52AD9C ; 
  }

  .right {
    margin-left: auto;
  }

  .right a {
    border: 2px solid #007bff; /* Border color similar to hover state */
    padding: 0.5rem 1rem;
    border-radius: 5px; /* Slightly rounded corners */
    background-color: white;
    transition: background-color 0.3s, color 0.3s;
  }

  .right a:hover {
    background-color: #007bff; /* Change background on hover */
    color: white; /* Text color on hover */
  }

  @media (max-width: 768px) {
    /* Responsive design for smaller screens */
    nav {
      flex-direction: column;
    }

    .right {
      margin-left: 0;
      margin-top: 1rem;
    }
  }
</style>
