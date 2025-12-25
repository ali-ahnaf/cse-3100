import React from "react";

export default function Contact() {
  return (
    <section>
      <h2>Contact us</h2>
      <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert("Form submitted (demo)"); }}>
        <label>
          Name
          <input type="text" name="name" required />
        </label>

        <label>
          Phone
          <input type="tel" name="phone" />
        </label>

        <label>
          Email
          <input type="email" name="email" required />
        </label>

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
