import { useState } from 'react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will contact you soon.');
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <div className="contact-page">
      <div className="container py-5">
        <div className="row">
          
          {/* Left Column - Contact Info */}
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="contact-info">
              <h2 className="contact-title mb-4">Get in Touch</h2>
              <div className="contact-text mb-5">
                <p>
                  We're here to help you find your perfect feline companion or answer any questions you may have about cat adoption.
                </p>
                <p>
                  Our team is available Monday through Friday, 9 AM to 6 PM, and we strive to respond to all inquiries within 24 hours.
                </p>
                <p>
                  Whether you're interested in adopting, volunteering, or supporting our mission, we'd love to hear from you!
                </p>
              </div>

              <div className="contact-details">
                <div className="detail-item mb-4">
                  <h4 className="detail-title">Visit Us</h4>
                  <p className="detail-content">
                    123 Cat Adoption Lane<br />
                    Feline City, FC 12345
                  </p>
                </div>

                <div className="detail-item mb-4">
                  <h4 className="detail-title">Call Us</h4>
                  <p className="detail-content">(555) 123-4567</p>
                </div>

                <div className="detail-item">
                  <h4 className="detail-title">Email Us</h4>
                  <p className="detail-content">info@purrfectadoption.org</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="col-lg-6">
            <div className="contact-form-container">
              <h2 className="form-title mb-4">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="contact-form">
                
                <div className="form-group mb-4">
                  <label htmlFor="name" className="form-label">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="form-group mb-4">
                  <label htmlFor="phone" className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="form-group mb-4">
                  <label htmlFor="email" className="form-label">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Enter your email address"
                    required
                  />
                </div>

                <div className="form-group mb-5">
                  <label htmlFor="message" className="form-label">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea"
                    placeholder="Tell us how we can help you..."
                    rows="5"
                  />
                </div>

                <button type="submit" className="submit-btn">
                  Send Message
                </button>

              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}