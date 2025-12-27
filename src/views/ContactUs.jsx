import React from 'react';

export default function ContactUs() {
  return (
    <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h2 className="mb-4">Contact us</h2>

      <p className="mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc.
      </p>

      <form style={{ maxWidth: '500px' }}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" style={{ borderRadius: '8px', border: '1px solid #ced4da', padding: '0.5rem' }} />
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone</label>
          <input type="tel" className="form-control" id="phone" style={{ borderRadius: '8px', border: '1px solid #ced4da', padding: '0.5rem' }} />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" style={{ borderRadius: '8px', border: '1px solid #ced4da', padding: '0.5rem' }} />
        </div>

        <button 
          type="submit" 
          className="btn btn-primary" 
          style={{ 
            backgroundColor: '#9ec5fe', /* Light blue similar to mockup */
            color: '#000', 
            border: 'none', 
            padding: '0.5rem 2rem', 
            borderRadius: '4px'
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}