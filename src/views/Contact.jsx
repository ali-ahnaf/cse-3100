export default function Contact() {
  return (
    <div className="contact-container">
      <h2>Contact us</h2>
      <p className="contact-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet.
      </p>

      <form onSubmit={(e) => e.preventDefault()}>
        <label>Name</label>
        <input type="text" className="contact-input" />

        <label>Phone</label>
        <input type="text" className="contact-input" />

        <label>Email</label>
        <input type="email" className="contact-input" />

        <button className="contact-button">
          Submit
        </button>
      </form>
    </div>
  );
}