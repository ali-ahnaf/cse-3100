export default function ContactUs() {
  return (
    <>
      <section className="text-center mt-5">
        <h2 className="mb-3 fw-bold">Contact Us</h2>
        <p
          className="px-4 mx-auto text-center text-muted"
          style={{ maxWidth: "600px" }}
        >
          <em>
          We would love to hear from you! Whether you have questions about
          our adoption process, want to learn more about our cats, or just want to
          say hello, feel free to reach out. Fill out the form below, and we'll
          get back to you as soon as possible.
          </em>
        </p>
      </section>

      <section className="p-4 mx-auto mb-2" style={{ maxWidth: "600px" }}>
        <form className="contact-form">
          <div className="mb-4">
            <label htmlFor="name" className="form-label fw-bold">
              Name
            </label>
            <input type="text" className="form-control" id="name" placeholder="Faiyaz Fardin"/>
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="form-label fw-bold">
              Phone
            </label>
            <input type="tel" className="form-control" id="phone" placeholder="+880123456789" />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="form-label fw-bold">
              Email
            </label>
            <input type="email" className="form-control" id="email" placeholder="kitty@cat.org" />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="form-label fw-bold">
              Message
            </label>
            <textarea className="form-control" id="message" rows="5" placeholder="We would love to hear from you!" />
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-info px-5" >
              Send
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
