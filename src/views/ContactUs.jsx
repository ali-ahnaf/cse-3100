const ContactUs = () => {
    return (
      <div className="container mt-4">
        <h1 style={{textAlign:'left'}}>Contact Us</h1>
        <p style={{fontSize: '1.15rem', textAlign:'justify'}}>
        
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
        </p>
        <form className="mt-4" style={{ maxWidth: '400px', textAlign: 'left' }}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input type="text" className="form-control" id="name" placeholder="Name" />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone:
          </label>
          <input type="tel" className="form-control" id="phone" placeholder="Phone number" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input type="email" className="form-control" id="email" placeholder="Email" />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      </div>
    );
  };
  
  export default ContactUs;
  