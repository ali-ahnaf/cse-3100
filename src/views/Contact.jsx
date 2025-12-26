export default function Contact() {
  return (
    <section className="mt-4">
      <div className="container">
        <div className="contact-box mx-auto">
          <h2 className="mb-3">Contact us</h2>

          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            luc Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Maecenas luc
          </p>

          <form>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Phone</label>
              <input
                type="tel"
                className="form-control"
                placeholder="Enter your phone number"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
