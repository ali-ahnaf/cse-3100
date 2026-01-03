export default function ContactUs() {
  return (
    <section className="contact-section">
      <div className="container">
        <h2
          className="contact-heading"
          style={{ fontStyle: 'normal', fontWeight: '700' }}
        >
          Contact Us
        </h2>
        <p
          className="contact-text"
          style={{ fontStyle: 'normal', fontWeight: '700' }}
        >
          We would love to hear from you! Whether you have questions about adopting a cat,
          want to donate, or simply want to learn more about our organization, feel free to
          reach out. Our team is dedicated to providing prompt and helpful responses to all inquiries.
        </p>

        <form className="contact-form">
          <div className="form-group">
            <label
              htmlFor="name"
              className="form-label"
              style={{ fontStyle: 'normal', fontWeight: '700' }}
            >
              Name
            </label>
            <input
              type="text"
              className="form-input"
              id="name"
              required
              style={{ fontStyle: 'normal', fontWeight: '700' }}
            />
          </div>

          <div className="form-group">
            <label
              htmlFor="phone"
              className="form-label"
              style={{ fontStyle: 'normal', fontWeight: '700' }}
            >
              Phone
            </label>
            <input
              type="tel"
              className="form-input"
              id="phone"
              style={{ fontStyle: 'normal', fontWeight: '700' }}
            />
          </div>

          <div className="form-group">
            <label
              htmlFor="email"
              className="form-label"
              style={{ fontStyle: 'normal', fontWeight: '700' }}
            >
              Email
            </label>
            <input
              type="email"
              className="form-input"
              id="email"
              required
              style={{ fontStyle: 'normal', fontWeight: '700' }}
            />
          </div>

          <button
            type="submit"
            className="submit-btn"
            style={{ fontStyle: 'normal', fontWeight: '700' }}
          >
            Submit
          </button>
        </form>

        {/* Address */}
        <div
          className="contact-address"
          style={{
            marginTop: '2rem',
            fontStyle: 'normal',
            fontWeight: '700',
            textAlign: 'center',
          }}
        >
          <p>123 Purr Street, Catville, CA 90210, USA</p>
        </div>

        {/* Social Media Icons */}
        <div
          className="social-icons"
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            marginTop: '0.5rem',
          }}
        >
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
              alt="Facebook"
              style={{ width: '30px', height: '30px' }}
            />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
              alt="Instagram"
              style={{ width: '30px', height: '30px' }}
            />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
              alt="Twitter"
              style={{ width: '30px', height: '30px' }}
            />
          </a>
        </div>
      </div>
    </section>
  );
}
