export default function Contact() {
  return (
    <section className="contact">
      <h2>Contact Us</h2>
      <p>
        We'd love to hear from you! Reach out with any questions, suggestions, or feedback.
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
