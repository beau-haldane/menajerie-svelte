<div class="w-full flex flex-col lg:flex-row gap-12 lg:px-12 items-center">
  <div class="contact-image hidden lg:block w-1/2 aspect-[3/4] bg-slate-600" />
  <div class="w-full sm:w-2/3 lg:w-1/2 flex flex-col gap-8">
    <h3 class="text-center lg:text-left">Contact Us</h3>
    <p class="text-center lg:text-left">menajerie.band@gmail.com for bookings</p>
    <form>
      <div class="w-full flex flex-col gap-2 sm:gap-3">
        <label for="name">Name </label>
        <input
          type="text"
          name="name"
          class="input input-md border-primary w-full"
        />
        <label for="email">Email </label>
        <input
          type="email"
          name="email"
          class="input input-md border-primary w-full"
        />
        <label for="message">Message </label>
        <textarea
          name="message"
          class="textarea textarea-bordered border-primary w-full h-40"
        />
        <button
          class="btn btn-primary shadow-lg normal-case text-lg font-normal"
          >Submit</button
        >
      </div>
    </form>
  </div>
</div>

<style>
  .contact-image {
    background-image: url("../img/contact.jpg");
    background-position: center;
    background-position-x: 30%;
    background-size: cover;
  }
</style>
