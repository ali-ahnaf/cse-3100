export default function Contact() {
  return (
    <>
      <h2>Contact Us</h2>

      <p>Email: adopt@purrfect.com</p>
      <p>Phone: +880 1234 567 890</p>

      <form className="contact-form">
        <input placeholder="Your Name" required />
        <input placeholder="Your Email" required />
        <textarea placeholder="Message" rows="4"></textarea>
        <button>Submit</button>
      </form>
    </>
  );
}
