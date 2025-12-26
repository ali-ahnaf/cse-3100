import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.includes('@')) newErrors.email = 'Valid email required';
    if (!form.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = e => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  return (
    <section className="contact-wrapper">
      <div className="contact-glow" />

      <AnimatePresence mode="wait">
        {!submitted ? (
          <motion.form
            key="form"
            className="contact-card"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
          >
            <h1>Contact Us</h1>
            <p className="contact-subtitle">
              Have questions or want to adopt? We’d love to hear.
            </p>

            {['name', 'phone', 'email', 'message'].map(field => (
              <div key={field} className="floating-group">
                {field !== 'message' ? (
                  <input
                    type={field === 'email' ? 'email' : 'text'}
                    value={form[field]}
                    onChange={e =>
                      setForm({ ...form, [field]: e.target.value })
                    }
                    required={field !== 'phone'}
                  />
                ) : (
                  <textarea
                    rows="4"
                    value={form.message}
                    onChange={e =>
                      setForm({ ...form, message: e.target.value })
                    }
                  />
                )}
                <label>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                {errors[field] && (
                  <span className="error-text">{errors[field]}</span>
                )}
              </div>
            ))}

            <motion.button
              type="submit"
              className="contact-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        ) : (
          <motion.div
            key="success"
            className="success-card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="success-check"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              ✓
            </motion.div>
            <h2>Message Sent!</h2>
            <p>Thank you for reaching out. We’ll get back to you shortly.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
