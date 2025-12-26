import React, { useState } from 'react';

const ContactUs = () => {
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
    alert(`Thank you, ${formData.name}! We've received your message and will get back to you soon.`);
    setFormData({
      name: '',
      phone: '',
      email: ''
    });
  };

  return (
    <div className="container page-content">
      <h1 className="page-title">Contact Us</h1>
      
      <div className="contact-us-container">
        <div className="contact-description">
          <p>
            We'd love to hear from you! Whether you have questions about adoption, want to volunteer, 
            or just want to learn more about our cats, feel free to reach out. Our team is here to help 
            and will respond to your inquiry as soon as possible.
          </p>
        </div>

        <div className="simple-contact-form">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="simple-form-label">Name</label>
              <input
                type="text"
                className="simple-form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="phone" className="simple-form-label">Phone</label>
              <input
                type="tel"
                className="simple-form-control"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="simple-form-label">Email</label>
              <input
                type="email"
                className="simple-form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn-submit-simple">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
