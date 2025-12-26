export default function ContactUs() {
  return (
    <section className="mt-4">
      <div className="container">
        <h2>Contact us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
        </p>

        <form className="mt-3 contact-form">
          <div className="mb-3 text-start">
            <label className="form-label">Name</label>
            <input className="form-control" placeholder="Your name" />
          </div>
          <div className="mb-3 text-start">
            <label className="form-label">Phone</label>
            <input className="form-control" placeholder="Your phone" />
          </div>
          <div className="mb-3 text-start">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" placeholder="you@example.com" />
          </div>
          <button type="button" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </section>
  );
}
