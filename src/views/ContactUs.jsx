import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for contacting us!');
    // Reset form
    setFormData({ name: '', phone: '', email: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div style={styles.container}>
      {/* Title EXACTLY like assignment - on the left */}
      <h1 style={styles.title}>Contact us</h1>
      
      {/* Text EXACTLY like assignment PDF - two paragraphs */}
      <div style={styles.textSection}>
        <p style={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed
        </p>
        <p style={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed
        </p>
      </div>

      {/* Form EXACTLY like assignment PDF - FIXED with real inputs */}
      <form onSubmit={handleSubmit} style={styles.formSection}>
        <div style={styles.formField}>
          <label style={styles.label} htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={styles.inputBox}
            placeholder="Enter your name"
            required
          />
        </div>
        
        <div style={styles.formField}>
          <label style={styles.label} htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            style={styles.inputBox}
            placeholder="Enter your phone number"
            required
          />
        </div>
        
        <div style={styles.formField}>
          <label style={styles.label} htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={styles.inputBox}
            placeholder="Enter your email"
            required
          />
        </div>
        
        <div style={styles.formField}>
          <div style={{...styles.label, visibility: 'hidden'}}>Submit:</div>
          <button type="submit" style={styles.submitButton}>Submit</button>
        </div>
      </form>
    </div>
  );
};

// EXACT styling like assignment PDF
const styles = {
  container: {
    padding: '20px',
    maxWidth: '600px',
    margin: '0 auto'
  },
  title: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#000',
    marginBottom: '20px',
    textAlign: 'left'
  },
  textSection: {
    marginBottom: '30px'
  },
  paragraph: {
    fontSize: '16px',
    lineHeight: '1.5',
    color: '#333',
    margin: '0 0 15px 0'
  },
  formSection: {
    borderTop: '1px solid #ccc',
    paddingTop: '20px'
  },
  formField: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px'
  },
  label: {
    fontSize: '18px',
    fontWeight: 'bold',
    width: '80px'
  },
  inputBox: {
    flex: 1,
    height: '35px',
    padding: '0 10px',
    fontSize: '16px',
    border: '1px solid #0066cc',
    backgroundColor: '#fff',
    borderRadius: '3px',
    outline: 'none'
  },
  submitButton: {
    backgroundColor: '#0066cc',
    color: 'white',
    border: 'none',
    padding: '10px 30px',
    fontSize: '16px',
    fontWeight: 'bold',
    borderRadius: '3px',
    cursor: 'pointer',
    marginLeft: '80px' // Aligns with input boxes
  }
};

export default ContactUs;