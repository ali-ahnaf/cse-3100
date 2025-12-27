export default function ContactUs() {
  return (
    <section className="contact-container">
      <h2 className="contact-title">Contact Us</h2>

      <p className="contact-text">
        We would love to hear from you! Feel free to contact us anytime.
      </p>

      <form className="contact-form">
        <div className="form-group">
          <label>Name</label>
          <input type="text" placeholder="Enter your name" />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />
        </div>

        <div className="form-group">
          <label>Phone</label>
          <input type="tel" placeholder="Enter your phone number" />
        </div>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </section>
  );
}


