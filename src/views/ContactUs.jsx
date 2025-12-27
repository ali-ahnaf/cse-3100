export default function ContactUs() {
  return (
    <section className="container mt-4">
      <h2>Contact Us</h2>
      <p>
        Have questions about adopting a cat? We'd love to hear from you! Reach
        out to us using any of the methods below.
      </p>

      <div className="row mt-4">
        <div className="col-md-6">
          <h3>Get In Touch</h3>
          <div className="mt-3">
            <p>
              <strong> Email:</strong> adopt@purrfectadoption.com
            </p>
            <p>
              <strong> Phone:</strong> (555) 123-4567
            </p>
            <p>
              <strong> Address:</strong> 123 Cat Street, Meow City, MC 12345
            </p>
            <p>
              <strong> Hours:</strong> Monday - Saturday, 9:00 AM - 6:00 PM
            </p>
          </div>
        </div>

        <div className="col-md-6">
          <h3>Send Us a Message</h3>
          <form className="mt-3">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Your Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="your.email@example.com"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="4"
                placeholder="Tell us about your interest in adoption..."
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}