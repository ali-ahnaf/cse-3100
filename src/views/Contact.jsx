export default function Contact() {
   return (
    <section className="text-mx-100 mt-4">
      <h2 className="about-heading">Contact Us</h2>
      <p style={{ lineHeight: '1.6', marginTop: '1.5rem' }}>
        We would love to hear from you! Whether you have questions about adopting a cat,
        volunteering, or supporting our rescue, our team is here to help. Please feel free 
        to reach out via email, phone, or by visiting our office during business hours. 
        Every message is important to us, and we strive to respond as quickly as possible.
      </p>
      <form className="contact-form mt-4" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div>
          <label style={{ fontWeight: '600', marginBottom: '0.8rem', display: 'block' }}>Name</label>
          <input 
            type="text" 
            placeholder="Your Name" 
            style={{
              width: '30%',
              padding: '0.5rem',
              borderRadius: '8px',
              border: '1px solid #ccc',
              fontSize: '1rem'
            }}
          />
        </div>
        <div>
          <label style={{ fontWeight: '600', marginBottom: '0.8rem', display: 'block' }}>Phone</label>
          <input 
            type="tel" 
            placeholder="Your Phone Number" 
            style={{
              width: '30%',
              padding: '0.5rem',
              borderRadius: '8px',
              border: '1px solid #ccc',
              fontSize: '1rem'
            }}
          />
        </div>
                <div>
          <label style={{ fontWeight: '600', marginBottom: '0.8rem', display: 'block' }}>Email</label>
          <input 
            type="email" 
            placeholder="Your Email" 
            style={{
              width: '30%',
              padding: '0.5rem',
              borderRadius: '8px',
              border: '1px solid #ccc',
              fontSize: '1rem'
            }}
          />
        </div>
        <button 
          type="submit" 
          style={{
            marginTop: '1rem',
            padding: '0.4rem 1rem',
            borderRadius: '6px',
            border: 'none',
            background: 'linear-gradient(135deg, #89f7fe, #66a6ff)',
            color: 'white',
            fontSize: '0.9rem',
            cursor: 'pointer',
            transition: 'transform 0.2s',
            alignSelf: 'flex-start'
          }}
          onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
        >
          Submit
        </button>


      </form>

   
  
    </section>
  );
}