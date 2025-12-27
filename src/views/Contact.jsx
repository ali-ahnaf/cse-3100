export default function Contact() {
  return (
    <section className="mt-4" style={{ maxWidth: '600px' }}>
      <h2>Contact Us</h2>

      <p className="mt-2">
        Have questions about adoption or want to get involved? Reach out to us
        and our team will get back to you as soon as possible.
      </p>

      <form className="mt-4">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" />
        </div>

        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input type="text" className="form-control" />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          style={{ marginTop: '0.5rem' }}
        >
          Submit
        </button>
      </form>
    </section>
  );
}
