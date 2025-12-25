export default function Contact() {
  return (
    <section className="contact">
      <h2>Contact Us</h2>
      <p>
        If you have any questions, feel free to reach out to us.
      </p>

      <form className="contact-form">
        <label>
          Name
          <input type="text" />
        </label>

        <label>
          Phone
          <input type="text" />
        </label>

        <label>
          Email
          <input type="email" />
        </label>

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
