export default function Contact() {
  return (
    <section>
      <h2 className="section-title">Contact us</h2>
      <p className="subdued">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
      </p>

      <form>
        <label>
          Name
          <input type="text" name="name" />
        </label>
        <label>
          Phone
          <input type="tel" name="phone" />
        </label>
        <label>
          Email
          <input type="email" name="email" />
        </label>
        <button type="button" className="primary">
          Submit
        </button>
      </form>
    </section>
  );
}
