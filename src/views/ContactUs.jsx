export default function ContactUs() {
  return (
    <div className="contact-form">
      <h3>Contact us</h3>
      <p className="text-muted small">please fill up the form...</p>
      
      <div className="form-group">
        <label>Name</label>
        <input type="text" className="form-control" />
      </div>
      
      <div className="form-group">
        <label>Phone</label>
        <input type="text" className="form-control" />
      </div>
      
      <div className="form-group">
        <label>Email</label>
        <input type="email" className="form-control" />
      </div>
      
      <button className="btn-sketch">Submit</button>
    </div>
  );
}