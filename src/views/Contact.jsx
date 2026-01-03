import React from 'react';

const Contact = () => {
  return (
    <div className="container">
      <h1 >Contact Us </h1>
      <p>Lorem ipsum dolor sit amet..consectetur adipiscing elit.Maecenas luc...</p>
      
      <form style={{ maxWidth: '400px', margin: '0 auto' }}>
        <label>Name</label><br/>
        <input type="text" style={{ width: '100%', padding: '8px', marginBottom: '10px' }} /><br/>
        
        <label>Phone</label><br/>
        <input type="text" style={{ width: '100%', padding: '8px', marginBottom: '10px' }} /><br/>
        
        <label>Email</label><br/>
        <input type="email" style={{ width: '100%', padding: '8px', marginBottom: '10px' }} /><br/>
        
        <button type="submit" style={{ padding: '10px 20px', background: '#007bff', color: 'white', border: 'none' }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;