export default function ContactUs() {
  return (
    <section className="contact-section">
      <div className="container">
        <h2 className="contact-heading">Contact Us</h2>
        <p className="contact-text">
          We would love to hear from you! Whether you have questions about adopting a cat,
          want to donate, or simply want to learn more about our organization, feel free to
          reach out. Our team is dedicated to providing prompt and helpful responses to all inquiries.
        </p>

        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-input"
              id="name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone" className="form-label">
              Phone
            </label>
            <input
              type="tel"
              className="form-input"
              id="phone"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-input"
              id="email"
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
