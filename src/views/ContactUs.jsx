import { useState } from 'react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! We received your message.`);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section className="text-center mt-4">
      <h2>Contact Us</h2>
      <p>Have any questions or want to adopt a cat? Fill out the form below and we'll get back to you.</p>

      <form onSubmit={handleSubmit} className="mt-4 d-flex flex-column align-items-center gap-3">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="form-control"
          style={{ maxWidth: '400px' }}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="form-control"
          style={{ maxWidth: '400px' }}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Your Phone"
          value={formData.phone}
          onChange={handleChange}
          className="form-control"
          style={{ maxWidth: '400px' }}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="form-control"
          style={{ maxWidth: '400px', height: '120px' }}
        />
        <button type="submit" className="btn btn-primary" style={{ maxWidth: '200px' }}>
          Submit
        </button>
      </form>
    </section>
  );
}
