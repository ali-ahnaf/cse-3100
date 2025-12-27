// Contact.jsx
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! We'll contact you soon.`);
    setFormData({ name: '', phone: '', email: '' });
  };

  return (
    <section className="text-center">
      <h1>Contact Us</h1>
      
      <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'left' }}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean leo.</p>
      </div>

      {/* Contact Form */}
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your phone number"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your email"
            />
          </div>

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>

      <div style={{ marginTop: '40px' }}>
        <h3>Contact Information</h3>
        <p>Email: contact@purrfectadoption.com</p>
        <p>Phone: +123 456 789</p>
        <p>Address: 123 Cat Street, Purr City, PC 12345</p>
      </div>
    </section>
  );
}