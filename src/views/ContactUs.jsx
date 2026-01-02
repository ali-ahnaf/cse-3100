export default function ContactUs() {
  return (
    <div className="mt-4">
      <h3>Contact us</h3>
      <p className="text-muted small mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc...</p>
      <div className="form-group">
        <label className="small fw-bold">Name</label>
        <input type="text" className="form-control" />
      </div>
      <div className="form-group">
        <label className="small fw-bold">Phone</label>
        <input type="text" className="form-control" />
      </div>
      <div className="form-group">
        <label className="small fw-bold">Email</label>
        <input type="email" className="form-control" />
      </div>
      <button className="btn btn-submit mt-2">Submit</button>
    </div>
  );
}