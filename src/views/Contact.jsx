import { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Minimal submit handler — in real app send to server
    // For now just clear form and show a friendly message
    alert('Thanks! We received your message.');
    setName('');
    setPhone('');
    setEmail('');
  };

  return (
    <section className="contact-page text-center mt-4">
      <h2><strong>Contact Us</strong></h2>
      <p>If you have questions about adoption or want to help, please reach out using the form below.</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your full name"
            required
          />
        </label>

        <label>
          Phone
          <input
            type="number"
            inputMode="numeric"
            pattern="[0-9]*"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone number"
            required
          />
        </label>

        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
          />
        </label>

        <button type="submit" className="btn-submit">Submit</button>
      </form>
    </section>
  );
}
