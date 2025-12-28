import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [showEmailSuggestions, setShowEmailSuggestions] = useState(false);
  const [emailSuggestions, setEmailSuggestions] = useState([]);

  const popularDomains = [
    'gmail.com',
    'hotmail.com',
    'outlook.com',
    'yahoo.com',
    'aol.com',
    'mail.com',
    'protonmail.com',
    'icloud.com',
    'msn.com',
    'yandex.com',
    'mail.ru',
    'zoho.com'
  ];

  const handleNameChange = (e) => {
    const value = e.target.value;
    // Only allow alphabetic characters and spaces
    const alphabeticOnly = value.replace(/[^a-zA-Z\s]/g, '');
    setFormData({ ...formData, name: alphabeticOnly });
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setFormData({ ...formData, email: value });

    // Show suggestions if user is typing after @
    if (value.includes('@')) {
      const atIndex = value.lastIndexOf('@');
      const typedDomain = value.substring(atIndex + 1).toLowerCase();
      const filtered = popularDomains.filter(domain =>
        domain.startsWith(typedDomain)
      );
      setEmailSuggestions(filtered);
      setShowEmailSuggestions(filtered.length > 0);
    } else {
      setShowEmailSuggestions(false);
      setEmailSuggestions([]);
    }
  };

  const handleSuggestionClick = (domain) => {
    const atIndex = formData.email.lastIndexOf('@');
    const emailPrefix = formData.email.substring(0, atIndex + 1);
    const newEmail = emailPrefix + domain;
    setFormData({ ...formData, email: newEmail });
    setShowEmailSuggestions(false);
    setEmailSuggestions([]);
  };

  const handleMessageChange = (e) => {
    setFormData({ ...formData, message: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }
  };

  return (
    <section className="contact-page">
      <div className="contact-header">
        <h2>Get in Touch</h2>
        <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
      </div>

      <div className="contact-grid">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input 
              id="name"
              type="text" 
              placeholder="John Doe"
              value={formData.name}
              onChange={handleNameChange}
              className={errors.name ? 'input-error' : ''}
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <div className="email-input-wrapper">
              <input 
                id="email"
                type="email" 
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleEmailChange}
                onFocus={() => {
                  if (formData.email.includes('@') && emailSuggestions.length > 0) {
                    setShowEmailSuggestions(true);
                  }
                }}
                onBlur={() => setTimeout(() => setShowEmailSuggestions(false), 200)}
                className={errors.email ? 'input-error' : ''}
              />
              {showEmailSuggestions && emailSuggestions.length > 0 && (
                <div className="email-suggestions">
                  {emailSuggestions.map((domain, index) => (
                    <div
                      key={index}
                      className="suggestion-item"
                      onClick={() => handleSuggestionClick(domain)}
                    >
                      {formData.email.substring(0, formData.email.lastIndexOf('@') + 1)}{domain}
                    </div>
                  ))}
                </div>
              )}
            </div>
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea 
              id="message"
              placeholder="Tell us how we can help..." 
              rows={6}
              value={formData.message}
              onChange={handleMessageChange}
              className={errors.message ? 'input-error' : ''}
            />
            {errors.message && <span className="error-message">{errors.message}</span>}
          </div>

          <button type="submit" className="btn-submit">
            Send Message
          </button>

          {submitted && (
            <div className="success-message">
              ✓ Thank you! Your message has been sent successfully.
            </div>
          )}
        </form>

        <div
          className="contact-image"
          style={{
            backgroundImage:
              "url('https://source.unsplash.com/featured/?networking,technology')",
          }}
        />
      </div>
    </section>
  );
}