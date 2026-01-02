import { useState } from 'react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name && formData.phone && formData.email) {
      alert('Thank you for contacting us! We will get back to you soon.');
      setFormData({ name: '', phone: '', email: '' });
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div className="contact-page">
      <section className="contact-intro">
        <h2>Contact us</h2>
        <p>
          We would love to hear from you! Whether you have questions about our adoption process, want to learn more about our organization, or simply wish to share your thoughts, please feel free to reach out using the form below.
        </p>
      </section>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
}
