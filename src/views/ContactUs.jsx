function ContactUs() {
     const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };
  return (
    <section className="mt-4">
      <h2>Contact us</h2>
      <p className="mb-4">
        Have questions about cat adoption or want to give a cat a loving home?
        We’re here to help you with adoption details, rescue information, and volunteering opportunities.
      </p>

      <div className="mb-4" style={{ 
        padding: '20px', 
        backgroundColor: '#f0f0f0', 
        borderRadius: '8px',
        maxWidth: '500px'
      }}>
        <h3 className="h5 mb-3">Our Contact Information</h3>
        <p className="mb-2"><strong>Email:</strong> catadoption@gmail.com</p>
        <p className="mb-2"><strong>Phone:</strong> 01XXXXXXXXX</p>
        <p className="mb-2"><strong>Address:</strong> Local Cat Rescue Center, Dhaka, Bangladesh</p>
        <p className="mb-0"><strong>Hours:</strong> Mon-Fri 9AM-5PM, Sat 10AM-4PM</p>
      </div>
      <div 
        style={{ 
          maxWidth: '500px',
          padding: '30px',
          border: '1px solid #ddd',
          borderRadius: '8px',
          backgroundColor: '#f9f9f9'
        }}
      >
        <div className="mb-3">
          <label htmlFor="name" className="form-label" style={{ fontWeight: '500' }}>
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Your name"
            style={{ 
              padding: '10px',
              borderRadius: '4px',
              border: '1px solid #ccc'
            }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className="form-label" style={{ fontWeight: '500' }}>
            Phone
          </label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            placeholder="Your phone number"
            style={{ 
              padding: '10px',
              borderRadius: '4px',
              border: '1px solid #ccc'
            }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label" style={{ fontWeight: '500' }}>
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Your email"
            style={{ 
              padding: '10px',
              borderRadius: '4px',
              border: '1px solid #ccc'
            }}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
          style={{
            padding: '10px 30px',
            fontSize: '16px',
            fontWeight: '500',
            borderRadius: '4px'
          }}
        >
          Submit
        </button>
      </div>
    </section>
  );
}

export default ContactUs;