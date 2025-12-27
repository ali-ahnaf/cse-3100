import React from 'react';

export default function ContactUs() {
  const inputStyle = {
    width: '100%',
    padding: '0.5rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
    marginBottom: '1rem' // Spacing between inputs
  };

  return (
    <section>
      <div style={{ marginBottom: '2rem' }}>
        <h2>Contact us</h2>
        <p style={{ maxWidth: '800px' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc.
        </p>
      </div>

      <form style={{ maxWidth: '500px' }}>
        <div className="mb-3">
          <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Name</label>
          <input type="text" id="name" style={inputStyle} />
        </div>

        <div className="mb-3">
          <label htmlFor="phone" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Phone</label>
          <input type="tel" id="phone" style={inputStyle} />
        </div>

        <div className="mb-3">
          <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Email</label>
          <input type="email" id="email" style={inputStyle} />
        </div>

        <button 
          type="submit" 
          style={{ 
            backgroundColor: '#9ec5fe', /* Light blue matching the mockup button */
            color: '#000', 
            border: 'none', 
            padding: '0.5rem 2rem', 
            borderRadius: '4px',
            cursor: 'pointer',
            marginTop: '10px'
          }}
        >
          Submit
        </button>
      </form>
    </section>
  );
}