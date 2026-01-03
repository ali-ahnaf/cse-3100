export default function ContactUs() {
  return (
    <div>
      <h1>Contact us</h1>
      <p style={{margin: '20px 0'}}>Feel free to reach out to us for any adoption inquiries!</p>
      <div style={{maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '15px'}}>
        <div>
          <label>Name</label>
          <input type="text" className="filter-input" style={{width: '100%'}} />
        </div>
        <div>
          <label>Phone</label>
          <input type="text" className="filter-input" style={{width: '100%'}} />
        </div>
        <div>
          <label>Email</label>
          <input type="email" className="filter-input" style={{width: '100%'}} />
        </div>
        <button className="btn-search" style={{width: '100px'}}>Submit</button>
      </div>
    </div>
  );
}