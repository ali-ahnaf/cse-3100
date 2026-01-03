import { useState } from 'react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name:  '',
    phone: '',
    email: ''
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
    console.log('Form submitted:', formData);
    alert('Thank you for contacting us! We will get back to you soon.');
    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: ''
    });
  };

  return (
    <div className="page-container">
      <h2 className="page-title text-center">Contact us</h2>
      
      <p className="contact-intro">
        Have questions about adopting a cat or want to learn more about our adoption process? 
        We'd love to hear from you! Fill out the form below and our team will get back to you 
        within 24-48 hours.  Whether you're interested in adoption, volunteering, or making a 
        donation, we're here to help.
      </p>

      <div className="contact-form-container">
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
            />
          </div>

          {/* Phone Field */}
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Enter your phone number"
            />
          </div>

          {/* Email Field */}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}