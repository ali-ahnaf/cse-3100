export default function Contact() {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p className="contact-text">
        Have questions about adoption or want to get in touch?
        <br />
        We’d love to hear from you!
      </p>

      <form className="contact-form">
        <div className="form-group">
          <label>Name</label>
          <input type="text" placeholder="Enter your name" />
        </div>

        <div className="form-group">
          <label>Phone</label>
          <input type="tel" placeholder="Enter your phone number" />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />
        </div>

        <div className="form-group">
          <label>Message</label>
          <textarea placeholder="Write your message here..." rows="4"></textarea>
        </div>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}
