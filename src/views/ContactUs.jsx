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
    // In a real application, you would send this data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section>
      <h2>Contact Us</h2>
      <p>
        Have questions? Want to adopt? Need more information? We'd love to hear
        from you! Please fill out the form below and we'll get back to you as soon
        as possible.
      </p>

      {submitted && (
        <div
          style={{
            backgroundColor: '#d4edda',
            color: '#155724',
            padding: '1em',
            borderRadius: '4px',
            marginBottom: '1.5em',
          }}
        >
          Thank you for your message! We'll get back to you soon.
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Send Message</button>
      </form>

      <div className="contact-info">
        <h3>Other Ways to Reach Us</h3>
        <p>
          <strong>Phone:</strong> (555) 123-4567
        </p>
        <p>
          <strong>Email:</strong> info@purrfectadoption.com
        </p>
        <p>
          <strong>Address:</strong> 123 Whisker Lane, Cat City, CC 12345
        </p>
        <p>
          <strong>Hours:</strong> Monday - Friday: 9 AM - 6 PM, Saturday: 10 AM -
          4 PM, Sunday: Closed
        </p>
      </div>
    </section>
  );
}
