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
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="mt-4">
      <h2>Contact Us</h2>

      <div style={{ marginTop: '2em', maxWidth: '600px' }}>
        <div style={{ marginBottom: '2em' }}>
          <h3>Get in Touch</h3>
          <p>Have questions about adoption? Want to support our mission? We'd love to hear from you!</p>
        </div>

        {submitted && (
          <div
            style={{
              padding: '1em',
              backgroundColor: '#d4edda',
              color: '#155724',
              borderRadius: '4px',
              marginBottom: '1em',
              border: '1px solid #c3e6cb',
            }}
          >
            Thank you for your message! We'll get back to you soon.
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1.5em' }}>
            <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5em', fontWeight: 'bold' }}>
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '0.75em',
                fontSize: '1em',
                border: '1px solid #ddd',
                borderRadius: '4px',
              }}
              placeholder="Your name"
            />
          </div>

          <div style={{ marginBottom: '1.5em' }}>
            <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5em', fontWeight: 'bold' }}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '0.75em',
                fontSize: '1em',
                border: '1px solid #ddd',
                borderRadius: '4px',
              }}
              placeholder="your.email@example.com"
            />
          </div>

          <div style={{ marginBottom: '1.5em' }}>
            <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5em', fontWeight: 'bold' }}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '0.75em',
                fontSize: '1em',
                border: '1px solid #ddd',
                borderRadius: '4px',
                minHeight: '150px',
                fontFamily: 'inherit',
              }}
              placeholder="Your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            style={{
              padding: '0.75em 2em',
              fontSize: '1em',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Send Message
          </button>
        </form>

        <div style={{ marginTop: '3em', paddingTop: '2em', borderTop: '1px solid #ddd' }}>
          <h3>Contact Information</h3>
          <p>
            <strong>Email:</strong> info@purrfectadoption.com
          </p>
          <p>
            <strong>Phone:</strong> (555) 123-4567
          </p>
          <p>
            <strong>Address:</strong> 123 Whisker Lane, Cat City, CC 12345
          </p>
          <p>
            <strong>Hours:</strong> Monday - Friday: 10 AM - 6 PM | Saturday: 11 AM - 4 PM | Sunday: Closed
          </p>
        </div>
      </div>
    </section>
  );
}
