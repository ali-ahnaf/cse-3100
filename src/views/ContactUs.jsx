import { useState } from 'react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    // Bangladesh mobile: optional +880 or 880, then 1, then [3-9], then 8 digits
    // Or local: 01[3-9] followed by 8 digits
    const phoneRegex = /^(?:\+880|880|0)?1[3-9]\d{8}$/;
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid Bangladeshi mobile number (e.g., 01712345678 or +8801712345678)';
    }

    // Standard email regex
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // If valid → show success
    setSubmitted(true);
    setErrors({});
    
    // Optional: reset form after 5 seconds
    setTimeout(() => {
      setFormData({ name: '', phone: '', email: '' });
      setSubmitted(false);
    }, 5000);
  };

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5 display-4">Contact Us</h1>
      <p className="text-center lead mb-5">
        We'd love to hear from you! Get in touch for adoption inquiries or questions.
      </p>

      <div className="row justify-content-center">
        <div className="col-lg-6">
          {submitted && (
            <div className="alert alert-success text-center mb-4" role="alert">
              <strong>Successfully submitted!</strong> Thank you for contacting us. We'll get back to you soon. 🐱
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name <span className="text-danger">*</span></label>
              <input
                type="text"
                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
              />
              {errors.name && <div className="invalid-feedback">{errors.name}</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Phone <span className="text-danger">*</span></label>
              <input
                type="tel"
                className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. 01XXXXXXXXX "
              />
              {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="form-label">Email <span className="text-danger">*</span></label>
              <input
                type="email"
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-primary btn-lg px-5">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}