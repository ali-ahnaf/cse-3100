import React, { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // For this assignment we won't send data to a server.
    // Show a simple confirmation and clear the form.
    alert(`Thanks ${name || 'friend'}! Your message has been received.`);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section className="mt-4 container">
      <h2>Contact Us</h2>
      <p>If you have questions about adoption or want to help, drop us a note.</p>

      <form onSubmit={handleSubmit} style={{ maxWidth: 720 }}>
        <div style={{ marginBottom: '.75rem' }}>
          <label htmlFor="contact-name">Name</label>
          <input
            id="contact-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            required
            style={{ width: '100%', padding: '.5rem', borderRadius: 8, border: '1px solid rgba(0,0,0,0.08)' }}
          />
        </div>

        <div style={{ marginBottom: '.75rem' }}>
          <label htmlFor="contact-email">Email</label>
          <input
            id="contact-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
            style={{ width: '100%', padding: '.5rem', borderRadius: 8, border: '1px solid rgba(0,0,0,0.08)' }}
          />
        </div>

        <div style={{ marginBottom: '.75rem' }}>
          <label htmlFor="contact-message">Message</label>
          <textarea
            id="contact-message"
            rows={6}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell us about your inquiry"
            required
            style={{ width: '100%', padding: '.5rem', borderRadius: 8, border: '1px solid rgba(0,0,0,0.08)' }}
          />
        </div>

        <div>
          <button type="submit" style={{ padding: '.6rem 1rem', borderRadius: 8, background: 'var(--accent)', color: '#fff', border: 'none', fontWeight: 700 }}>
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
}
