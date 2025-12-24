export default function ContactUs() {
  return (
    <>
      <section className="text-center mt-5">
        <h2 className="mb-3">Contact Us</h2>
        <p
          className="px-4 mx-auto text-center text-muted"
          style={{ maxWidth: "600px" }}
        >
          Have questions about adopting a cat? We'd love to hear from you! Fill
          out the form below and we'll get back to you as soon as possible.
        </p>
      </section>

      <section className="p-4 mx-auto mb-2" style={{ maxWidth: "600px" }}>
        <form className="contact-form">
          <div className="mb-4">
            <label for="name" className="form-label fw-bold">
              Name
            </label>
            <input type="text" className="form-control" id="name" />
          </div>

          <div className="mb-4">
            <label for="phone" className="form-label fw-bold">
              Phone
            </label>
            <input type="tel" className="form-control" id="phone"/>
          </div>

          <div className="mb-4">
            <label for="email" className="form-label fw-bold">
              Email
            </label>
            <input type="email" className="form-control" id="email" />
          </div>

          <div className="mb-4">
            <label for="message" className="form-label fw-bold">
              Message
            </label>
            <textarea
              className="form-control"
              id="message"
              rows="5"
            ></textarea>
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-info px-5">
              Send Message
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
