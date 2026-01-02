import { useState } from 'react';

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-form-container mt-5">
      <h2>Contact us</h2>
      {submitted ? (
        <div style={{ padding: '20px', background: '#e6fffa', border: '1px solid #38b2ac', borderRadius: '8px', marginTop: '20px' }}>
          <p style={{ color: '#2c7a7b', margin: 0, fontWeight: 'bold' }}>
            Thanks for your concern, we will get back to you soon!
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
          <div className="form-group">
            <label>Name</label>
            <input type="text" required />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input type="tel" required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" required />
          </div>
          <button type="submit" className="btn-submit">Submit</button>
        </form>
      )}
    </div>
  );
}