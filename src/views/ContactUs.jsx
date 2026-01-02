import { useState } from 'react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section className="contact-page">
      <h2 className="text-center">Contact Us</h2>
      <p className="text-center">
        Have questions about adopting a cat? We'd love to hear from you!
      </p>

      <div className="contact-form">
        {submitted ? (
          <div
            style={{
              padding: '2rem',
              background: '#d4edda',
              borderRadius: '8px',
              textAlign: 'center',
            }}
          >
            <h3>Thank you for reaching out!</h3>
            <p>We'll get back to you as soon as possible.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
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
              />
            </div>

            <button type="submit" className="btn-primary">
              Send Message
            </button>
          </form>
        )}
      </div>

      <div className="contact-info">
        <h3>Contact Information</h3>
        <p>
          <strong>Phone:</strong> (555) 123-4567
        </p>
        <p>
          <strong>Email:</strong> info@purrfectadoption.com
        </p>
        <p>
          <strong>Address:</strong> 123 Cat Street, Feline City, FC 12345
        </p>
        <p>
          <strong>Hours:</strong> Monday - Saturday: 10am - 6pm, Sunday: 12pm -
          4pm
        </p>
      </div>
    </section>
  );
}
