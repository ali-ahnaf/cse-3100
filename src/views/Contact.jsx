export default function Contact() {
  return (
    <section className="contact-container">
      <h2>Contact Us</h2>
      <p className="subtitle">
        If you have any questions or inquiries, feel free to reach out to us.
      </p>

    <form className="contact-form">
        <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Enter Your Name" />
        </div>
        <div className="form-group">
            <label>Phone</label>
            <input type="tel" placeholder="Enter Your Phone Number" />
        </div>
        <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter Your Email" />
        </div>
        <div className="form-group">
            <label>Message</label>
            <textarea rows="4" placeholder="Write Your Inquiries Here"></textarea>
        </div>
        <button type="submit" className="send-btn">Send</button>
    </form>
    </section>
  );
}
