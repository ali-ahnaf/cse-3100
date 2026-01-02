export default function ContactUs() {
    return (
      <section className="mt-4">
        <h2>Contact Us</h2>
        <form className="mt-3" style={{ maxWidth: '500px' }}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" id="name" className="form-control" placeholder="Your name" />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">Phone</label>
            <input type="tel" id="phone" className="form-control" placeholder="Your phone number" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" id="email" className="form-control" placeholder="Your email" />
          </div>
          <button type="submit" className="btn btn-submit">Submit</button>
        </form>
      </section>
    );
  }