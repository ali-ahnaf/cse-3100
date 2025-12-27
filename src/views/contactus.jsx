export default function ContactUs() {
  return (
    <div className="container mt-4">
      <h2>Contact us</h2>
      <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      
      <div className="col-md-6">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" style={{ border: '1px solid #000', borderRadius: '10px', margin: '10px 10px 10px 10px' }} />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input type="text" className="form-control" style={{ border: '1px solid #000', borderRadius: '10px',  margin: '10px 10px 10px 10px' }} />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" style={{ border: '1px solid #000', borderRadius: '10px', margin: '10px 10px 10px 10px' }} />
        </div>
        <button className="btn px-4" style={{ backgroundColor: '#A0D1FF', border: '1px solid #000',  margin: '10px 10px 10px 10px' }}>
          Submit
        </button>
      </div>
    </div>
  );
}