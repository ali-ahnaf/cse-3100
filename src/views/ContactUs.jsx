import React, { useState } from 'react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send to backend)
    console.log('Form submitted:', formData);
    setSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="contact-us-section">
      <h2>Contact Us</h2>
      <p className="section-description">
        Have questions about cat adoption or want to support our cause? Reach out to us! We're based in Dhaka, Bangladesh and serve communities across the country.
      </p>

      <div className="contact-container">
        {/* Contact Info */}
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <div className="info-item">
            <strong>Email:</strong>
            <p>
              <a href="mailto:info@purrfectadoption.bd">info@purrfectadoption.bd</a>
            </p>
          </div>
          <div className="info-item">
            <strong>Phone:</strong>
            <p>
              <a href="tel:+8801700000000">+880 1700-000-000</a>
            </p>
          </div>
          <div className="info-item">
            <strong>Address:</strong>
            <p>Mohammadpur, Dhaka 1207, Bangladesh</p>
          </div>
          <div className="info-item">
            <strong>Hours:</strong>
            <p>Saturday - Thursday: 9:00 AM - 6:00 PM</p>
            <p>Friday: 2:00 PM - 8:00 PM</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-container">
          {submitted && (
            <div className="success-message">
              ✓ Thank you for your message! We'll get back to you soon.
            </div>
          )}
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                className="form-control"
                rows="6"
              ></textarea>
            </div>

            <button type="submit" className="btn-submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
