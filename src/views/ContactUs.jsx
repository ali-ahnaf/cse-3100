import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');
    setTimeout(() => {
      setStatus('Purrfect! Submission successful.');
      setFormData({ name: '', phone: '', email: '' });
    }, 1000);
  };

  return (
    <div className="contact-container">
      <main className="contact-main">
        <h2 className="contact-title">Contact us</h2>
        <p className="contact-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo tempore rerum facere.
        </p>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label className="form-label">Name</label>
            <input 
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Phone</label>
            <input 
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Email</label>
            <input 
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>

          <button type="submit" className="submit-button">
            Submit
          </button>

          {status && <p className="status-message">{status}</p>}
        </form>
      </main>
    </div>
  );
};

export default ContactUs;
