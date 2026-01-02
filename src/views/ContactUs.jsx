export default function ContactUs() {
  return (
    <section className="mt-4">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <h2 className="text-center mb-4">Contact Us</h2>
          <p className="text-center mb-4">
            Have questions about adopting a cat? Get in touch with us!
          </p>

          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Your name"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Your email"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="subject" className="form-label">
                Subject
              </label>
              <input
                type="text"
                className="form-control"
                id="subject"
                placeholder="Subject"
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
                rows="5"
                placeholder="Your message"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>

          <div className="mt-5">
            <h3>Other Ways to Reach Us</h3>
            <p>
              <strong>Email:</strong> info@purrfectadoption.com
            </p>
            <p>
              <strong>Phone:</strong> (555) 123-4567
            </p>
            <p>
              <strong>Address:</strong> 123 Cat Lane, Whisker City, ST 12345
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
