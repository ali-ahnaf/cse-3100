export default function Contact() {
  return (
    <section className="mt-4">
      <h2>Contact Us</h2>

      <form style={{ display: 'grid', gap: '0.5rem', maxWidth: 600 }}>
        <label>
          Name
          <input name="name" type="text" />
        </label>

        <label>
          Email
          <input name="email" type="email" />
        </label>

        <label>
          Message
          <textarea name="message" rows={6} />
        </label>

        <button type="submit">Send Message</button>
      </form>

      <section style={{ marginTop: '1rem' }}>
        <h3>Other ways to reach us</h3>
        <p>Email: hello@purrfectadoption.example</p>
        <p>Phone: +1 (555) 123-4567</p>
      </section>
    </section>
  );
}