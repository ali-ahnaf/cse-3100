import { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
  });

  // Validate input fields
  const validate = (name, value) => {
    switch (name) {
      case 'fullName':
        if (!value.trim()) {
          return 'Name is required';
        } else if (!/^[a-zA-Z\s]+$/.test(value)) {
          return 'Name can only contain letters and spaces';
        } else {
          return '';
        }
      case 'email':
        if (!value.trim()) {
          return 'Email is required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
        ) {
          return 'Enter a valid email address';
        } else {
          return '';
        }
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update form state
    setForm({ ...form, [name]: value });

    // Validate field
    setErrors({ ...errors, [name]: validate(name, value) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields before submission
    const fullNameError = validate('fullName', form.fullName);
    const emailError = validate('email', form.email);

    if (fullNameError || emailError) {
      setErrors({ fullName: fullNameError, email: emailError });
      return;
    }

    alert(`Thank you, ${form.fullName}! Your message has been sent.`);
    setForm({ fullName: '', email: '', message: '' });
    setErrors({ fullName: '', email: '' });
  };

  return (
    <section className="static-page">
      <h2>Contact Us</h2>
      <p className="lead white">Have a question, suggestion, or want to help? Reach out to us below.</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        {/* Name Field */}
        <label>
          Full Name
          <input
            type="text"
            name="fullName"
            placeholder="Enter your full name"
            value={form.fullName}
            onChange={handleChange}
            required
          />
          {errors.fullName && <span className="error">{errors.fullName}</span>}
        </label>

        {/* Email Field */}
        <label>
          Email Address
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            required
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </label>

        {/* Message Field */}
        <label>
          Your Message
          <textarea
            name="message"
            placeholder="Type your message here"
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
