export default function Contact() {
  return (
    <section className="mt-4" style={{ maxWidth: 520 }}>
      <h2>Contact us</h2>
      <p className="text-muted">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <div className="mb-3">
        <label className="form-label">Name</label>
        <input className="form-control" />
      </div>

      <div className="mb-3">
        <label className="form-label">Phone</label>
        <input className="form-control" />
      </div>

      <div className="mb-3">
        <label className="form-label">Email</label>
        <input className="form-control" />
      </div>

      <button className="btn btn-primary" type="button">
        Submit
      </button>
    </section>
  );
}
