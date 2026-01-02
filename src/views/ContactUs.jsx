import { useState } from 'react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
    // Clear form after submission
    setFormData({
      name: '',
      phone: '',
      email: ''
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="p-4">
      {/* Header left-aligned */}
      <div>
        <h2>Contact Us</h2>
        <p style={{ marginBottom: '8rem' }}>
          Have questions about adopting a cat? Get in touch with us!
        </p>
      </div>

      {/* Form left-aligned */}
      <form 
        onSubmit={handleSubmit} 
        style={{ 
          maxWidth: '500px',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          marginTop: '2rem'
        }}
      >
        {/* Name Field */}
        <div>
          <label style={{ 
            display: 'block', 
            marginBottom: '0.5rem',
            fontSize: '1.1rem'
          }}>
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              border: '1px solid black',
              borderRadius: '20px',
              padding: '12px 15px',
              fontSize: '1rem'
            }}
          />
        </div>

        {/* Phone Field */}
        <div>
          <label style={{ 
            display: 'block', 
            marginBottom: '0.5rem',
            fontSize: '1.1rem'
          }}>
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              border: '1px solid black',
              borderRadius: '20px',
              padding: '12px 15px',
              fontSize: '1rem'
            }}
          />
        </div>

        {/* Email Field */}
        <div>
          <label style={{ 
            display: 'block', 
            marginBottom: '0.5rem',
            fontSize: '1.1rem'
          }}>
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              border: '1px solid black',
              borderRadius: '20px',
              padding: '12px 15px',
              fontSize: '1rem'
            }}
          />
        </div>

        {/* Submit Button - left-aligned */}
        <button 
          type="submit" 
          style={{
            backgroundColor: '#aadaff',
            border: '1px solid black',
            borderRadius: '20px',
            padding: '12px 25px',
            fontSize: '1rem',
            width: 'fit-content',
            marginTop: '1rem'
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}