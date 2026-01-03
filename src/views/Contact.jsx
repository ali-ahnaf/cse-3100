export default function Contact() {
  return (
    <section className="mt-4">
      <h2>Contact Us</h2>
      <form style={{ maxWidth: 600, margin: '0 auto' }} onSubmit={(e) => e.preventDefault()}>
        <div style={{ marginBottom: 8 }}>
          <label>Name</label>
          <br />
          <input type="text" name="name" style={{ width: '100%' }} />
        </div>
        <div style={{ marginBottom: 8 }}>
          <label>Email</label>
          <br />
          <input type="email" name="email" style={{ width: '100%' }} />
        </div>
        <div style={{ marginBottom: 8 }}>
          <label>Message</label>
          <br />
          <textarea name="message" rows={6} style={{ width: '100%' }} />
        </div>
        <button type="submit">Send</button>
      </form>

      <div style={{ marginTop: 24 }}>
        <p>Or reach us at: contact@purrfect.adopt</p>
      </div>
    </section>
  );
}
