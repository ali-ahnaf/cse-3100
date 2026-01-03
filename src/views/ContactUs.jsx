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
    <section className="mt-4">
      <h2 className="text-center">Contact Us</h2>
      <p className="text-center">
        Have questions? We'd love to hear from you! Fill out the form below or reach out to us directly.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your full name"
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
            placeholder="your.email@example.com"
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
            placeholder="Tell us how we can help you..."
          />
        </div>

        <button type="submit" className="btn-primary">
          {submitted ? 'Message Sent!' : 'Send Message'}
        </button>
      </form>

      <div className="contact-info">
        <h3>Get In Touch</h3>
        <p><strong>Address:</strong> House 45, Road 12, Dhanmondi, Dhaka-1209, Bangladesh</p>
        <p><strong>Phone:</strong> +880 1712-345678, +880 2-9876543</p>
        <p><strong>Email:</strong> info@purrfectadoption.com.bd</p>
        <p><strong>Hours:</strong> Saturday - Thursday: 10 AM - 7 PM, Friday: 2 PM - 6 PM</p>
      </div>
    </section>
  );
}
