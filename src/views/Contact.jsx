export default function Contact() {
  return (
    <>
      <h2>Contact Us</h2>
      <p>Have questions about adoption, volunteering, or donations? Send us a message and we're here to help!</p>

      <div style={{ marginTop: '30px', maxWidth: '400px' }}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}><strong>Name</strong></label>
          <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #ddd' }} />
        </div>
        
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}><strong>Phone</strong></label>
          <input type="tel" style={{ width: '100%', padding: '8px', border: '1px solid #ddd' }} />
        </div>
        
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}><strong>Email</strong></label>
          <input type="email" style={{ width: '100%', padding: '8px', border: '1px solid #ddd' }} />
        </div>
        
        <button style={{ padding: '10px 30px', marginTop: '10px' }}>Submit</button>
      </div>
    </>
  );
}