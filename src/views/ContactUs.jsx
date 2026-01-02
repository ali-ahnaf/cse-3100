export default function ContactUs() {
  return (
    <section className="text-center mt-4">
      <h2>Contact Us</h2>
      <p>We'd love to hear from you!</p>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <button type="submit" className="btn-submit">Send Message</button>
      </form>
      <div className="contact-info mt-4">
        <h3>Contact Information</h3>
        <p>Email: info@purrfectadoption.com</p>
        <p>Phone: (123) 456-7890</p>
        <p>Address: 123 Cat Street, Purr City, PC 12345</p>
      </div>
    </section>
  );
}