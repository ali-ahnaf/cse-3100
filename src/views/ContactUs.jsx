

export default function ContactUs() {
  return (
    // We added 'contact-container' class here
    <div className="container contact-container mt-5" style={{ maxWidth: '600px', marginLeft: '0' }}>
      <h2 className="mb-3">Contact us</h2>
      <p className="text-muted mb-4">Please fill out the form below to reach us.</p>
      
      <form>
        <div className="mb-3">
          <label className="contact-label">Name</label>
          <input type="text" className="form-control contact-input" />
        </div>

        <div className="mb-3">
          <label className="contact-label">Phone</label>
          <input type="text" className="form-control contact-input" />
        </div>

        <div className="mb-3">
          <label className="contact-label">Email</label>
          <input type="email" className="form-control contact-input" />
        </div>

        <button type="submit" className="btn btn-primary px-5 mt-2 shadow-sm">
          Submit
        </button>
      </form>
    </div>
  );
}