export default function ContactUs() {
  return (
    <section className="text-center mt-4">
      <h2>Contact Us</h2>
      <p>Get in touch with us for any inquiries about our cats or adoption process.</p>

      <div className="contact-form mt-4">
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea className="form-control" id="message" rows="4" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>

      <div className="contact-info mt-5">
        <h3>Our Contact Information</h3>
        <p>Email: info@purrfectadoption.com</p>
        <p>Phone: (123) 456-7890</p>
        <p>Address: 123 Cat Street, Purr City, PC 12345</p>
      </div>
    </section>
  );
}