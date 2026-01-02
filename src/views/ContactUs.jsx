export default function ContactUs() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted! (This is a demo)');
  };

  return (
    <section className="text-center mt-4">
      <h2>Contact Us</h2>
      <p className="mb-4">
        Have questions about adopting a cat? Get in touch with us!
      </p>

      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="tel"
              className="form-control"
              placeholder="Your Phone Number"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Your Email"
              required
            />
          </div>
          <button type="submit" className="btn btn-submit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}