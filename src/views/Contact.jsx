import React from 'react';

const Contact = () => (
  <section className="mt-4 text-center contact-section">
    <h2>Contact Us</h2>
    <p>
      Have questions? Reach out to us!
    </p>
    
    <div className="contact-info">
      <ul className="list-unstyled">
        <li>Email: <a href="mailto:info@purrfectadoption.com">info@purrfectadoption.com</a></li>
        <li>Phone: <a href="tel:+0123456789">01-23456789</a></li>
      </ul>
    </div>

    {/* Contact Form */}
    <div className="contact-form">
      <h4>Send Us a Message</h4>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" id="name" placeholder="Your Name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" id="email" placeholder="Your Email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea className="form-control" id="message" rows="4" placeholder="Your Message" required></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>
    </div>
  </section>
);

export default Contact;
