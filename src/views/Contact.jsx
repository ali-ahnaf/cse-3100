import React from 'react';

export default function Contact() {
  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 20px' }}>
      {/* Header */}
      <section style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2>Contact Us</h2>
        <p style={{ fontSize: '14px', lineHeight: '1.6', marginTop: '10px' }}>
          Have questions or need assistance? We’re here to help. Fill out the form below and 
          our team will get back to you as soon as possible.
        </p>
      </section>

      {/* Form */}
      <form
        style={{
          maxWidth: '500px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '18px',
        }}
      >
        <div>
          <label style={{ fontSize: '13px' }}>Name</label>
          <input
            type="text"
            style={{
              width: '100%',
              padding: '10px',
              marginTop: '6px',
              borderRadius: '8px',
              border: '1px solid #ccc',
            }}
          />
        </div>

        <div>
          <label style={{ fontSize: '13px' }}>Phone</label>
          <input
            type="text"
            style={{
              width: '100%',
              padding: '10px',
              marginTop: '6px',
              borderRadius: '8px',
              border: '1px solid #ccc',
            }}
          />
        </div>

        <div>
          <label style={{ fontSize: '13px' }}>Email</label>
          <input
            type="email"
            style={{
              width: '100%',
              padding: '10px',
              marginTop: '6px',
              borderRadius: '8px',
              border: '1px solid #ccc',
            }}
          />
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button
            type="button"
            style={{
              width: '120px',
              padding: '10px',
              borderRadius: '8px',
              border: '1px solid #999',
              background: '#9dd1ff',
              cursor: 'pointer',
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
