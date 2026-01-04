export default function ContactUs() {
  return (
    <section className="mt-4">
      <div className="container">
        <h2 className="mb-3">Contact Us</h2>
        <p>
          Thinking about adoption or have questions? Reach out to us using the form below—we’re here for you and our cats.
        </p>

        <form className="mt-4">
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
              type="text"
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
    </section>
  );
}