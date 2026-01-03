import './ContactUs.css';

export default function ContactUs() {
  return (
    <main>
      <div className="container">
        <h2 className="page-title">Contact Us</h2>

        <p className="contact-description">
          We’d love to hear from you! Whether you have questions, suggestions, or just want to say hello,
          please fill out the form below and we’ll get back to you soon.
        </p>

        <form className="contact-form">
          <label>
            Name
            <input type="text" name="name" className="form-input" placeholder="Your name" required />
          </label>

          <label>
            Email
            <input type="email" name="email" className="form-input" placeholder="Your email address" required />
          </label>

          <label>
            Phone
            <input type="tel" name="phone" className="form-input" placeholder="Your phone number" required />
          </label>

          <button type="submit" className="btn">Submit</button>
        </form>
      </div>
    </main>
  );
}
