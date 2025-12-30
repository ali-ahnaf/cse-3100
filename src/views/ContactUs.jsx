import React from 'react';

export default function ContactUs() {
  return (
    <section className="contact-us">
      <h2>Contact Us</h2>
      <p>We'd love to hear from you! Please fill out the form below to get in touch.</p>

      <form className="contact-form">
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>

        <button type="submit">Submit</button>
      </form>

      <div className="contact-info">
        <h3>Our Contact Information</h3>
        <p>Email: contact@purrfectadoption.com</p>
        <p>Phone: +1 (555) 123-4567</p>
        <p>Address: 123 Cat Lane, Meowtown, CA 90210</p>
      </div>
    </section>
  );
}