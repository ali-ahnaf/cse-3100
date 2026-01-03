// src/views/Contact.jsx
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  function onChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function onSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.email) {
      alert('Please provide at least your name and email.');
      return;
    }
    console.log('Contact form submitted', form);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section className="contact-section">
        <div className="contact-success">
          <h2>Contact us</h2>
          <p>Thanks — we received your message. We will contact you soon.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="contact-section">
      <h2>Contact us</h2>
      <p>
        For adoption enquiries or volunteering opportunities, please contact us using the form below or call our office.
      </p>

      <div className="contact-info">
        <div><strong>Office:</strong> Baily Road, Dhaka-1000</div>
        <div><strong>Hours:</strong> Mon–Sat, 9:00–17:00</div>
      </div>

      <form onSubmit={onSubmit} className="contact-form" noValidate>
        <div className="form-row">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={onChange}
            required
            placeholder="Your full name"
          />
        </div>

        <div className="form-row">
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            name="phone"
            value={form.phone}
            onChange={onChange}
            placeholder="Optional"
          />
        </div>

        <div className="form-row">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={onChange}
            required
            placeholder="you@example.com"
          />
        </div>

        <div className="form-row">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={form.message}
            onChange={onChange}
            placeholder="Write your message here..."
          />
        </div>

        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <button type="submit" className="btn-primary">Submit</button>
        </div>
      </form>
    </section>
  );
}
