export default function Contact() {
  function handleSubmit(e) {
    e.preventDefault();
    alert('Thanks! We will get back to you soon.');
  }

  return (
    <section className="mt-4">
      <h2 className="text-center">Contact us</h2>
      <p className="text-center">
        Have a question about adoption or volunteering? Send us a message.
      </p>

      <div className="row justify-content-center mt-4">
        <div className="col-md-6">
          <form onSubmit={handleSubmit} className="border rounded-4 p-4">
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input className="form-control" placeholder="Your name" required />
            </div>

            <div className="mb-3">
              <label className="form-label">Phone</label>
              <input className="form-control" placeholder="Your phone" required />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                className="form-control"
                type="email"
                placeholder="you@example.com"
                required
              />
            </div>

            <button className="btn btn-dark w-100" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
