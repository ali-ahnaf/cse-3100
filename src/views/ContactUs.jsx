import React, { useState } from 'react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for reaching out! We have received your message and will get back to you shortly.');
    setFormData({ name: '', email: '', phone: '' });
  };

  return (
    <section className="mt-4">
      <h2 className="text-center">Contact Us</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <textarea
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        
        <button type="submit">Send phone</button>
      </form>
    </section>
  );
}
