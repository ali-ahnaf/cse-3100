export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
    alert('Thank you for contacting us! We will get back to you soon.');
  };

  return (
    <div className="contact-page">
      <div className="contact-card">
        <h2>Contact us</h2>
        <p>
          We'd love to hear from you! Whether you're interested in adopting a specific breed, 
          have questions about breed characteristics, or just want to learn more about our cats, 
          feel free to reach out.
        </p>
        
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              required
              placeholder="Enter your name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input 
              type="tel" 
              id="phone" 
              name="phone" 
              required
              placeholder="Enter your phone number"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required
              placeholder="Enter your email address"
            />
          </div>

          <button type="submit" className="btn-submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
