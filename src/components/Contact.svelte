<div class="w-full flex gap-24 md:px-12 items-center">
  <div class="contact-image sm:hidden md:block w-1/2 aspect-[3/4] bg-slate-600" />
  <div class="md:w-1/2 flex flex-col gap-8">
    <h3 class="sm:text-center">Contact Us</h3>
    <p class="sm:text-center">menajerie.band@gmail.com for bookings</p>
    <form>
      <div class="w-full flex flex-col sm:gap-2 md:gap-3">
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
