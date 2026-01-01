export default function ContactUs() {
  return (
    <div className="contact-us-page">
      <h2>Contact us</h2>
      <p className="contact-intro">
        Have questions or want to help a pet find a loving home? We’d love to hear from you! Reach out to us anytime, and our team will be happy to assist you on your adoption journey.
      </p>

      <form className="contact-form">
        <div className="form-container">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
            />
          </div>

          <button type="button" className="submit-btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
