export default function Contact() {
  return (
    <section className="section">
      <h2>Contact us</h2>

      <p className="contact-text">
         Have questions or want to adopt a loving cat?  
  Get in touch with us and we’ll be happy to help you.
      </p>

      <form className="contact-form">
        <label>Name</label>
        <input className="control" type="text" />

        <label>Phone</label>
        <input className="control" type="text" />

        <label>Email</label>
        <input className="control" type="email" />

        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
}
