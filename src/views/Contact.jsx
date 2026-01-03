export default function Contact() {
  return (
    <section className="section">
      <h2>Contact us</h2>
      <p className="contact-intro">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Maecenas luc
      </p>
      <form className="contact-form">
        <label className="contact-label" htmlFor="name">
          Name
        </label>
        <input className="contact-input" id="name" type="text" />

        <label className="contact-label" htmlFor="phone">
          Phone
        </label>
        <input className="contact-input" id="phone" type="text" />

        <label className="contact-label" htmlFor="email">
          Email
        </label>
        <input className="contact-input" id="email" type="email" />
        <button className="btn contact-btn" type="button">
          Submit
        </button>
      </form>
    </section>
  );
}
