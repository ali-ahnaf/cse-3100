export default function Contact() {
  return (
    <section className="section">
      <h2>Contact us</h2>

      <p className="contact-intro">
            At Purrfect Adoption, we value open communication and meaningful connections.
            Whether you have questions about the adoption process, want to learn more
            about a specific cat, or simply wish to reach out, our team is here to help.
            Fill out the form below and we’ll get back to you as soon as possible.

      </p>

      <form className="contact-form">
        <label className="contact-label" htmlFor="name">
          Name
        </label>
        <input className="contact-input" id="name" type="text" />

        <label className="contact-label" htmlFor="phone">
          Phone
        </label>
        <input className="contact-input" id="phone" type="text" />

        <label className="contact-label" htmlFor="email">
          Email
        </label>
        <input className="contact-input" id="email" type="email" />

        <button className="btn contact-btn" type="button">
          Submit
        </button>
      </form>
    </section>
  );
}
