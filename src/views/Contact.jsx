import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div style={{maxWidth: '600px', margin: '0 auto', padding: '20px'}}>
      <h1 style={{textAlign: 'center', marginBottom: '20px'}}>Send us a Message</h1>
      
      <p style={{textAlign: 'center', marginBottom: '30px', color: '#666'}}>
        Fill out the form below and we'll get back to you as soon as possible.
      </p>
      
      <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
        <div>
          <label style={{display: 'block', marginBottom: '8px', fontWeight: 'bold'}}>Your Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '16px'
            }}
          />
        </div>
        
        <div>
          <label style={{display: 'block', marginBottom: '8px', fontWeight: 'bold'}}>Your Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '16px'
            }}
          />
        </div>
        
        <div>
          <label style={{display: 'block', marginBottom: '8px', fontWeight: 'bold'}}>Your Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="6"
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '16px',
              resize: 'vertical'
            }}
          />
        </div>
        
        <button
          type="submit"
          style={{
            padding: '12px 30px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            fontSize: '16px',
            cursor: 'pointer',
            alignSelf: 'flex-start'
          }}
        >
          Send Message
        </button>
      </form>
      
      <div style={{marginTop: '50px', paddingTop: '20px', borderTop: '1px solid #ddd', textAlign: 'center', color: '#666'}}>
        <p>Purrfect Adoption Contact Form</p>
      </div>
    </div>
  );
}

export default Contact;