import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
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
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact-page">
      <div className="container">
        <div className="text-center mb-5">
          <h2>Contact Us</h2>
          <p className="lead">Have questions? We'd love to hear from you!</p>
        </div>
        
        <div className="row">
          <div className="col-md-6">
            <h3>Get In Touch</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
          
          <div className="col-md-6">
            <h3>Contact Information</h3>
            <div className="contact-info">
              <p><strong>Address:</strong><br />123 Cat Street, Feline City, FC 12345</p>
              <p><strong>Phone:</strong><br />(555) 123-4567</p>
              <p><strong>Email:</strong><br />info@purrfectadoption.org</p>
              <p><strong>Hours:</strong><br />Monday - Friday: 9am - 6pm<br />Saturday: 10am - 4pm<br />Sunday: Closed</p>
            </div>
            
            <h4 className="mt-4">Adoption Process</h4>
            <ol>
              <li>Browse available cats on our website</li>
              <li>Submit an adoption inquiry</li>
              <li>Schedule a meet-and-greet</li>
              <li>Complete adoption paperwork</li>
              <li>Welcome your new feline friend home!</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}