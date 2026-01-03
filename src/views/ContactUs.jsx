import { useState } from 'react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! We received your message.`);
    setFormData({ name: '', email: '', phone: '' });
  };

  return (
    <section className="text-center mt-4">
      <h2>Contact Us</h2>
      <p>Have any questions or want to adopt a cat? Fill out the form below.</p>

      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
          marginTop: '2rem',
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={{ width: '300px', padding: '0.5rem' }}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Your Phone"
          value={formData.phone}
          onChange={handleChange}
          style={{ width: '300px', padding: '0.5rem' }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={{ width: '300px', padding: '0.5rem' }}
          required
        />
        <button
          type="submit"
          style={{
            width: '150px',
            padding: '0.5rem',
            marginTop: '0.5rem',
            cursor: 'pointer',
          }}
        >
          Submit
        </button>
      </form>
    </section>
  );
}
