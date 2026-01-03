export default function Contact() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-10 mx-auto">
            <div className="card contact-card shadow-lg border-0 rounded-4">
              <div className="card-body p-4 p-md-5">
                
                <h2 className="fw-bold text-center mb-3">Contact Us</h2>
                <p className="text-muted text-center mb-4">
                  Have questions or want to adopt? We'd love to hear from you. Please fill out the form below and our team will get back to you shortly.
                </p>

                
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label small text-muted">
                      Name
                    </label>
                    <input
                      id="name"
                      className="form-control form-control-lg contact-input"
                      type="text"
                      placeholder=""
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label small text-muted">
                      Phone
                    </label>
                    <input
                      id="phone"
                      className="form-control form-control-lg contact-input"
                      type="tel"
                      placeholder=""
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label small text-muted">
                      Email
                    </label>
                    <input
                      id="email"
                      className="form-control form-control-lg contact-input"
                      type="email"
                      placeholder=""
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="message" className="form-label small text-muted">
                      Message
                    </label>
                    <textarea id="message" rows={5} className="form-control contact-input" placeholder=""></textarea>
                  </div>

                  <div className="d-grid">
                    <button
                      type="submit"
                      className="btn btn-blue btn-lg rounded-pill"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
