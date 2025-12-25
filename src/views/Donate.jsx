export default function Donate() {
  return (
    <section className="text-center">
      <div className="hero">
        <h2>Support Our Mission</h2>
        <p>Your donation helps us care for cats and find them loving homes.</p>
      </div>
      
      <div className="contact-form">
        <h3>Make a Donation</h3>
        <div className="form-group">
          <label htmlFor="amount">Donation Amount ($)</label>
          <input type="number" id="amount" min="1" defaultValue="25" />
        </div>
        
        <div className="form-group">
          <label htmlFor="card">Card Number</label>
          <input type="text" id="card" placeholder="1234 5678 9012 3456" />
        </div>
        
        <div className="form-group">
          <label htmlFor="name-on-card">Name on Card</label>
          <input type="text" id="name-on-card" />
        </div>
        
        <button className="btn" onClick={() => alert('Thank you for your donation!')}>
          Donate Now
        </button>
      </div>
    </section>
  );
}