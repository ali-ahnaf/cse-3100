import { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!name.trim()) e.name = 'Please enter your name';
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) e.email = 'Please enter a valid email';
    if (!phone.trim() || !/^[0-9()+\-\s]+$/.test(phone)) e.phone = 'Please enter a valid phone';
    return e;
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) {
      console.log('Contact form submitted:', { name, email, phone });
      setSubmitted(true);
      setName('');
      setEmail('');
      setPhone('');
    }
  };

  return (
    <section className="text-center mt-4">
      <div className="container" style={{ maxWidth: 640 }}>
        <h2>Contact Us</h2>

        {submitted && (
          <div style={{ background: '#e6ffed', padding: '0.75rem', borderRadius: 8, marginBottom: '1rem', color: '#064e2a' }}>
            Thank you — we received your message and will get back to you soon.
          </div>
        )}

        <form onSubmit={onSubmit} style={{ textAlign: 'left', margin: '0 auto' }}>
          <div style={{ marginBottom: 12 }}>
            <label htmlFor="contact-name" style={{ display: 'block', marginBottom: 6 }}>Name</label>
            <input id="contact-name" value={name} onChange={(e) => setName(e.target.value)} className="filter-search" />
            {errors.name && <div style={{ color: '#c13434', marginTop: 6 }}>{errors.name}</div>}
          </div>

          <div style={{ marginBottom: 12 }}>
            <label htmlFor="contact-email" style={{ display: 'block', marginBottom: 6 }}>Email</label>
            <input id="contact-email" value={email} onChange={(e) => setEmail(e.target.value)} className="filter-search" />
            {errors.email && <div style={{ color: '#c13434', marginTop: 6 }}>{errors.email}</div>}
          </div>

          <div style={{ marginBottom: 12 }}>
            <label htmlFor="contact-phone" style={{ display: 'block', marginBottom: 6 }}>Phone</label>
            <input id="contact-phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="filter-search" />
            {errors.phone && <div style={{ color: '#c13434', marginTop: 6 }}>{errors.phone}</div>}
          </div>

          <div style={{ textAlign: 'right' }}>
            <button type="submit" style={{ padding: '0.5rem 0.9rem', borderRadius: 8, border: 'none', background: '#2b8a3e', color: '#fff' }}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
