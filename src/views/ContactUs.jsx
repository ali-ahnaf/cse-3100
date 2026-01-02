export default function ContactUs() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
  };

  return (
    <section className="text-center">
      <h2>Contact us</h2>
      <div className="card">
              <p>
                  Have questions about adopting a cat? Need information about our adoption process?
                  Our team is here to help! Fill out the form below and we'll get back to you within 24 hours
                  to assist with your cat adoption journey.
              </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Phone:</label>
            <input
              type="tel"
              className="form-control"
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email:</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              required
            />
          </div>

          <button type="submit" className="btn">Submit</button>
        </form>
      </div>
    </section>
  );
}