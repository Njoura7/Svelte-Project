<script lang="ts">
  let title = "";
  let maxAttendance = 0;
  let location = "";

  async function handleSubmit(event: SubmitEvent) {
    event.preventDefault();

    // Construct form data
    const formData = new FormData();
    formData.append("title", title);
    formData.append("maxAttendance", maxAttendance.toString());
    formData.append("location", location);

    // Send form data to your server endpoint
    const response = await fetch("/create-event", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      // Redirect to main route after successful submission
      window.location.href = "/all-events";
    } else {
      console.error("Submission failed");
    }
    console.log(formData);
  }
</script>

<form on:submit|preventDefault={handleSubmit} class="event-form">
  <div class="form-group">
    <input
      type="text"
      bind:value={title}
      name="title"
      placeholder="Event Title"
      required
    />
  </div>

  <div class="form-group">
    <label for="maxAttendance"> Max Attendance</label>
    <input
      type="number"
      bind:value={maxAttendance}
      name="maxAttendance"
      required
    />
  </div>

  <div class="form-group">
    <input
      type="text"
      bind:value={location}
      name="location"
      placeholder="Location"
      required
    />
  </div>

  <button type="submit" class="submit-button">Create Event</button>
</form>

<style>
  .event-form {
    max-width: 500px;
    margin: auto;
    padding: 2rem;
    background: #f8f8f8;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .form-group {
    margin-bottom: 1rem;
  }

  input {
    width: 100%;
    padding: 0.8rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
    box-sizing: border-box; /* Include padding and border in the element's total width and height */
  }

  input:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }

  .submit-button {
    width: 100%;
    padding: 1rem;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: white;
    font-size: 1.2rem;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  .submit-button:hover {
    background-color: #0056b3;
  }
</style>
