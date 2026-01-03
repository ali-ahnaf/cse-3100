import { useState } from 'react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section>
      <h2>Contact Us</h2>
      <p>
        Have questions about our cats or adoption process? Get in touch with us!
        We'd love to hear from you.
      </p>

      <div style={{ maxWidth: '600px', margin: '2rem auto' }}>
        {submitted ? (
          <div
            style={{
              padding: '2rem',
              background: '#d4edda',
              color: '#155724',
              borderRadius: '8px',
              border: '1px solid #c3e6cb',
              textAlign: 'center',
            }}
          >
            <h3>Thank you for your message!</h3>
            <p>We'll get back to you as soon as possible.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell us your questions or concerns..."
              />
            </div>

            <button type="submit" className="form-submit-btn">
              Send Message
            </button>
          </form>
        )}
      </div>

      {/* Contact Information */}
      <h3 style={{ marginTop: '3rem' }}>Get in Touch</h3>
      <div className="contact-info">
        <div className="contact-item">
          <h3>📍 Location</h3>
          <p>123 Cat Street</p>
          <p>Meowville, CA 94025</p>
        </div>

        <div className="contact-item">
          <h3>📧 Email</h3>
          <p>
            <a href="mailto:info@purrfectadoption.com">
              info@purrfectadoption.com
            </a>
          </p>
          <p>
            <a href="mailto:adoptions@purrfectadoption.com">
              adoptions@purrfectadoption.com
            </a>
          </p>
        </div>

        <div className="contact-item">
          <h3>📱 Phone</h3>
          <p>(555) 123-4567</p>
          <p>Monday - Friday: 9 AM - 5 PM</p>
          <p>Saturday: 10 AM - 3 PM</p>
        </div>
      </div>
    </section>
  );
}
