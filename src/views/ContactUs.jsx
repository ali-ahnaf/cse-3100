export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <div className="contact-page">
      <h2 className="contact-title">Contact Us</h2>
      
      <div className="contact-content">
        <p className="contact-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed
        </p>
        
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" className="form-input" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" className="form-input" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" className="form-input" required />
          </div>
          
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
}