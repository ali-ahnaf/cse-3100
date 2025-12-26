export default function Contact() {
  return (
    <section style={{ padding: '20px' }}>
      <h2 style={{ fontWeight: 'bold' }}>Contact us</h2>
      
      <br />
      <p style={{ maxWidth: '700px', lineHeight: '1.6' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc.
      </p>
      <br />

      <form style={{ maxWidth: '500px' }}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>Name</label>
          <input 
            type="text" 
            className="form-control" 
            style={{ borderRadius: '10px', width: '100%', padding: '8px', border: '1px solid #ccc' }} 
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>Phone</label>
          <input 
            type="tel" 
            className="form-control" 
            style={{ borderRadius: '10px', width: '100%', padding: '8px', border: '1px solid #ccc' }} 
          />
        </div>
        
        <div style={{ marginBottom: '15px' }}>
          <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>Email</label>
          <input 
            type="email" 
            className="form-control" 
            style={{ borderRadius: '10px', width: '100%', padding: '8px', border: '1px solid #ccc' }} 
          />
        </div>

        <br />

        <button 
          type="submit" 
          className="btn"
          style={{ 
            backgroundColor: '#9ecaff', 
            border: '1px solid #333', 
            borderRadius: '8px', 
            padding: '10px 40px',
            cursor: 'pointer'
          }}
        >
          Submit
        </button>
      </form>
    </section>
  );
}