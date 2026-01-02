export default function ContactUs() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
  };

  return (
    <section className="text-center mt-4">
      <h2>Contact Us</h2>
      <p className="mb-4">
        Have questions about adopting a cat? Reach out to us!
      </p>

      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card p-4">
            <form onSubmit={handleSubmit}>
              <div className="mb-3 text-start">
                <label htmlFor="name" className="form-label">Name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="mb-3 text-start">
                <label htmlFor="phone" className="form-label">Phone:</label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div className="mb-3 text-start">
                <label htmlFor="email" className="form-label">Email:</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="mb-3 text-start">
                <label htmlFor="message" className="form-label">Message:</label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="4"
                  placeholder="Enter your message"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>

            <div className="mt-5">
              <h4>Our Contact Information</h4>
              <p className="mb-1"><strong>Address:</strong> 123 Cat Street, Meowington</p>
              <p className="mb-1"><strong>Phone:</strong> (123) 456-7890</p>
              <p className="mb-1"><strong>Email:</strong> contact@purrfectadoption.com</p>
              <p className="mb-0"><strong>Hours:</strong> Mon-Fri 9AM-5PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}