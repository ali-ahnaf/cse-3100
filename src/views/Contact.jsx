export default function Contact() {
  return (
    <>
      <h2>Contact Us</h2>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <br />
        Maecenas luctus lorem ipsum dolor sit amet.
      </p>

      <form className="contact-form">
        <label>Home</label>
        <input type="text" />

        <label>Phone</label>
        <input type="text" />

        <label>Email</label>
        <input type="email" />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}
